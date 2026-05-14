// Destination URLs for CTA buttons across all landing pages.
// Mapping decided in client thread:
//   - "Make my next video" / "Build my clip pack" / "See it on my brand" /
//     "Try now" / "Try with brand assets" → signup
//   - "Get a demo" / "Request a demo" / "Talk to sales" / "Talk to us"  → demo
//     (Talk to sales/us points to demo per Ryan's decision — lumen5.com has no
//     dedicated sales contact page.)
//   - "Visit our trust center"                                          → trust

export const CTA = {
  signup: "https://lumen5.com/auth/signup/",
  demo:   "https://lumen5.com/request-a-demo",
  trust:  "https://lumen5.com/trust/",
} as const;
