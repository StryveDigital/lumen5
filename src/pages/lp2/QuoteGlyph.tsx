// Stylized double-quote glyph used in LP2 testimonial cards.
// Two curl shapes side-by-side in Lumen5 purple. Inlined SVG so it's
// deploy-stable (no Figma asset URL expiry) and the two curls are
// tightly grouped instead of having a 12% gap between halves.

const CURL_PATH = "M40.4767 0L46.4645 9.742C46.4645 9.742 20.6157 21.8944 18.3035 47.6977C18.3035 47.6977 30.9582 41.6891 42.2496 49.7473C42.2496 49.7473 50.9041 55.7559 52.4972 65.0369C54.0903 74.3178 49.0564 85.468 41.1659 89.3367C41.1659 89.3367 23.7519 99.9858 9.73887 83.8744C-4.28418 67.768 -9.86244 26.1641 40.4767 0Z";

export default function QuoteGlyph({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-10 0 122 100"
      fill="#5645F5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={CURL_PATH} />
      <path d={CURL_PATH} transform="translate(55 0)" />
    </svg>
  );
}
