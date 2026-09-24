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
    <div className="w-full max-w-[518px]">
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="d0504344-920f-4f40-9138-e2dfbf11f78c"
        data-portal-id="4012735"
      />
    </div>
  );
}
