// Explainers — the cost + quality reframe (old way vs now).
// The "$50k / 3 weeks → an afternoon" collapse from the launch concept.

type Col = {
  label: string;
  value: string;
  highlight?: boolean;
};

const cols: Col[] = [
  { label: "Agency",   value: "$50k · 3 weeks" },
  { label: "In-house", value: "Never scales" },
  { label: "Lumen5",   value: "An afternoon", highlight: true },
];

export default function OldWayVsNow() {
  return (
    <div className="bg-white flex flex-col gap-10 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[800px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#5645f5]">
          The math
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
          What an explainer used to cost. And what it costs now.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[920px]">
        {cols.map(col => (
          <div
            key={col.label}
            className={`flex flex-col items-center gap-2 px-6 py-10 rounded-2xl text-center ${col.highlight ? 'bg-[#EEEDFE]' : 'bg-[#fafafa]'}`}
          >
            <p className={`font-heading font-semibold text-[15px] leading-[22px] tracking-[0.06em] uppercase ${col.highlight ? 'text-[#5645f5]' : 'text-[#6c6a78]'}`}>
              {col.label}
            </p>
            <p className={`font-heading font-semibold text-[30px] leading-[38px] ${col.highlight ? 'text-[#3C3489]' : 'text-[#201e26]'}`}>
              {col.value}
            </p>
          </div>
        ))}
      </div>

      <p className="font-body italic text-[18px] leading-[30px] text-[#6c6a78] text-center">
        And good enough isn&rsquo;t good enough when it&rsquo;s your brand.
      </p>
    </div>
  );
}
