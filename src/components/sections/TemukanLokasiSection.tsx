import React, { useEffect, useState } from 'react';
import {
  APIProvider,
  APILoadingStatus,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';

const GOOGLE_MAPS_SHARE_URL = 'https://maps.app.goo.gl/nazyEZWroi8XHwcQ9';
const PLACE_QUERY = 'Rumah Makan Cikal Gading Tuntang';
const EMBED_FALLBACK_URL =
  'https://maps.google.com/maps?q=Rumah+Makan+Cikal+Gading+Tuntang&t=&z=16&ie=UTF8&iwloc=&output=embed';

interface ResolvedPlaceDetails {
  id?: string;
  displayName: string;
  formattedAddress: string;
  location: { lat: number; lng: number };
  googleMapsURI?: string;
}

interface TemukanLokasiSectionProps {
  quotaExceeded?: boolean;
}

function getGoogleMapsApiKey(): string {
  const viteKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (typeof viteKey === 'string' && viteKey.trim() && viteKey !== 'MY_GOOGLE_MAPS_API_KEY') {
    return viteKey.trim();
  }
  const globalKey = (globalThis as { GOOGLE_MAPS_API_KEY?: string }).GOOGLE_MAPS_API_KEY;
  if (typeof globalKey === 'string' && globalKey.trim() && globalKey !== 'MY_GOOGLE_MAPS_API_KEY') {
    return globalKey.trim();
  }
  return '';
}

function isQuotaError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false;
  const errRecord = err as { status?: unknown; code?: unknown; message?: unknown };
  const statusStr = String(errRecord.status ?? '');
  const codeVal = errRecord.code;
  const messageStr = String(errRecord.message ?? '');
  return (
    statusStr === 'RESOURCE_EXHAUSTED' ||
    statusStr === 'OVER_QUERY_LIMIT' ||
    codeVal === 429 ||
    messageStr.includes('RESOURCE_EXHAUSTED') ||
    messageStr.includes('OVER_QUERY_LIMIT') ||
    messageStr.includes('QuotaExceeded') ||
    messageStr.includes('429')
  );
}

interface InteractivePlaceMapProps {
  quotaExceeded: boolean;
  onPlaceResolved: (details: ResolvedPlaceDetails) => void;
}

const InteractivePlaceMap: React.FC<InteractivePlaceMapProps> = ({
  quotaExceeded,
  onPlaceResolved,
}) => {
  const loadingStatus = useApiLoadingStatus();
  const placesLib = useMapsLibrary('places');
  const map = useMap();
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [placeDetails, setPlaceDetails] = useState<ResolvedPlaceDetails | null>(null);
  const [placeFailed, setPlaceFailed] = useState(false);
  const [infoOpen, setInfoOpen] = useState(true);

  useEffect(() => {
    if (!placesLib || quotaExceeded) return;

    let cancelled = false;

    const resolveTargetPlace = async () => {
      try {
        const response = await placesLib.Place.searchByText({
          textQuery: PLACE_QUERY,
          fields: ['id', 'displayName', 'formattedAddress', 'location', 'googleMapsURI'],
          language: 'id',
          region: 'ID',
          maxResultCount: 1,
        });

        if (cancelled) return;

        const firstPlace = response?.places?.[0];
        if (!firstPlace?.location) {
          setPlaceFailed(true);
          return;
        }

        const resolved: ResolvedPlaceDetails = {
          id: firstPlace.id ?? undefined,
          displayName: firstPlace.displayName || PLACE_QUERY,
          formattedAddress: firstPlace.formattedAddress || 'Tuntang, Kabupaten Semarang, Jawa Tengah',
          location: {
            lat: firstPlace.location.lat(),
            lng: firstPlace.location.lng(),
          },
          googleMapsURI: firstPlace.googleMapsURI ?? undefined,
        };

        setPlaceDetails(resolved);
        onPlaceResolved(resolved);
      } catch (err) {
        if (cancelled) return;
        if (isQuotaError(err)) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        setPlaceFailed(true);
      }
    };

    void resolveTargetPlace();

    return () => {
      cancelled = true;
    };
  }, [placesLib, quotaExceeded, onPlaceResolved]);

  useEffect(() => {
    if (map && placeDetails?.location) {
      map.panTo(placeDetails.location);
      map.setZoom(16);
    }
  }, [map, placeDetails]);

  if (
    quotaExceeded ||
    placeFailed ||
    loadingStatus === APILoadingStatus.FAILED ||
    loadingStatus === APILoadingStatus.AUTH_FAILURE
  ) {
    return (
      <iframe
        title="Peta Lokasi Rumah Makan Cikal Gading Tuntang"
        src={EMBED_FALLBACK_URL}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  if (!placeDetails) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#0A192F]/5 text-[#0A192F] p-6 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin mb-3" />
        <p className="text-sm font-medium text-[#0A192F]">
          Memuat peta interaktif Rumah Makan Cikal Gading Tuntang...
        </p>
      </div>
    );
  }

  const directionsHref = placeDetails.id
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        placeDetails.displayName
      )}&destination_place_id=${encodeURIComponent(placeDetails.id)}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(PLACE_QUERY)}`;

  return (
    <Map
      mapId="DEMO_MAP_ID"
      defaultCenter={placeDetails.location}
      defaultZoom={16}
      gestureHandling="cooperative"
      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
      className="w-full h-full"
    >
      <AdvancedMarker
        ref={markerRef}
        position={placeDetails.location}
        title={placeDetails.displayName}
        onClick={() => setInfoOpen((prev) => !prev)}
      >
        <Pin background="#0A192F" borderColor="#C5A059" glyphColor="#C5A059" scale={1.15} />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow anchor={marker} onCloseClick={() => setInfoOpen(false)} maxWidth={280}>
          <div className="p-1 text-[#0A192F] font-sans">
            <p className="font-bold text-sm text-[#0A192F] leading-snug">
              {placeDetails.displayName}
            </p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {placeDetails.formattedAddress}
            </p>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#9A7B38] hover:text-[#0A192F] underline"
            >
              <span>Buka Petunjuk Arah</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export const TemukanLokasiSection: React.FC<TemukanLokasiSectionProps> = ({
  quotaExceeded = false,
}) => {
  const apiKey = getGoogleMapsApiKey();
  const [resolvedPlace, setResolvedPlace] = useState<ResolvedPlaceDetails | null>(null);

  const directionsUrl = resolvedPlace?.id
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        resolvedPlace.displayName
      )}&destination_place_id=${encodeURIComponent(resolvedPlace.id)}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        'Rumah Makan Cikal Gading Tuntang, Kabupaten Semarang, Jawa Tengah'
      )}`;

  return (
    <section
      id="temukan-lokasi"
      aria-labelledby="temukan-lokasi-heading"
      className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#C5A059]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B38] block mb-2 font-sans">
            Peta Interaktif Konsultasi Tatap Muka
          </span>
          <h2
            id="temukan-lokasi-heading"
            className="font-serif-luxury text-3xl sm:text-4xl text-[#0A192F] font-bold tracking-wide uppercase mb-4"
          >
            TEMUKAN LOKASI KAMI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Kunjungi titik temu konsultasi Umroh & Haji bersama <strong>Hj. IDA R</strong> di{' '}
            <strong className="text-[#0A192F]">Rumah Makan Cikal Gading Tuntang</strong>. Gunakan
            peta interaktif di bawah ini untuk melihat lokasi secara langsung atau memulai navigasi.
          </p>
        </div>

        {/* Interactive Map Card */}
        <div className="bg-white rounded-2xl border border-[#C5A059]/30 shadow-md overflow-hidden">
          {/* Top Location Bar & CTA Buttons */}
          <div className="p-5 sm:p-6 bg-[#0A192F] text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b border-[#C5A059]/30">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059] block">
                  Lokasi Pertemuan & Konsultasi
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Rumah Makan Cikal Gading Tuntang
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {resolvedPlace?.formattedAddress ||
                    'Jl. Fatmawati, Cikal, Kec. Tuntang, Kabupaten Semarang, Jawa Tengah (Area Salatiga & Tuntang)'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={GOOGLE_MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A192F] text-xs font-bold uppercase tracking-wider transition-colors text-center"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>LIHAT LOKASI DI GOOGLE MAPS</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#C5A059] hover:bg-[#D4B370] text-[#0A192F] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>PETUNJUK ARAH</span>
              </a>
            </div>
          </div>

          {/* Responsive Map Container with Explicit Height */}
          <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px] bg-[#FAF7F2]">
            {apiKey && !quotaExceeded ? (
              <APIProvider apiKey={apiKey} libraries={['places', 'marker']} language="id" region="ID">
                <InteractivePlaceMap
                  quotaExceeded={quotaExceeded}
                  onPlaceResolved={setResolvedPlace}
                />
              </APIProvider>
            ) : (
              <iframe
                title="Peta Lokasi Rumah Makan Cikal Gading Tuntang"
                src={EMBED_FALLBACK_URL}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
