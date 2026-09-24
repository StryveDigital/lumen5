// Demo page — request form. Live HubSpot embed (portal 4012735, form d0504344-920f-4f40-9138-e2dfbf11f78c).
// Renders in a cross-origin iframe (HubSpot's current embedded-forms product forces this even
// via the legacy hbspt.forms.create loader) — its field styling can only be changed from the
// HubSpot portal's own form style editor, not from this repo's CSS.
import { useEffect } from 'react';

const HUBSPOT_SCRIPT_SRC = 'https://js.hsforms.net/forms/embed/4012735.js';

export default function DemoForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = HUBSPOT_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    // White card keeps HubSpot's default dark labels legible on the dark hero; drop it once the
    // portal switches to unstyled embeds and we style the fields ourselves.
    <div className="w-full max-w-[518px] bg-white rounded-2xl p-6 md:p-8">
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="d0504344-920f-4f40-9138-e2dfbf11f78c"
        data-portal-id="4012735"
      />
    </div>
  );
}
