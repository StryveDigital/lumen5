// Explainers — the cost + quality reframe. Collapses the old options against
// Lumen5. The closing line lands the real differentiator: it isn't cheap OR
// good, it's both.

const cols = [
  { label: 'Agency', value: '$50k · 3 weeks', note: 'Expensive and slow', highlight: false },
  { label: 'In-house / freelance', value: 'Never scales', note: 'One at a time, if at all', highlight: false },
  { label: 'Lumen5', value: 'An afternoon', note: 'On brand, any volume', highlight: true },
];

export default function OldWayVsNow() {
  return (
    <div className="bg-white w-full px-6 md:px-16 py-[72px] md:py-[104px]">
      <div className="mx-auto max-w-[1020px]">
        <div className="flex flex-col gap-3 items-center text-center mb-12">
          <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[54px] text-[#201e26] max-w-[760px]">
            The math that used to stop you.
          </h2>
          <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
            How many more explainers would you make if they didn’t cost thousands and take weeks?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cols.map(({ label, value, note, highlight }) => (
            <div
              key={label}
              className={`rounded-2xl p-8 text-center flex flex-col gap-2 ${
                highlight ? 'bg-[#201e26]' : 'bg-[#fafafa] ring-1 ring-black/[0.05]'
              }`}
            >
              <p className={`font-body text-[15px] leading-[22px] uppercase tracking-[0.1em] ${highlight ? 'text-[#8b7fff]' : 'text-[#201e26]'}`}>
                {label}
              </p>
              <p className={`font-heading font-semibold text-[28px] leading-[34px] ${highlight ? 'text-[#fafafa]' : 'text-[#201e26]'}`}>
                {value}
              </p>
              <p className={`font-body text-[14px] leading-[20px] ${highlight ? 'text-[#fafafa]' : 'text-[#201e26]'}`}>
                {note}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-heading font-semibold text-[20px] md:text-[24px] leading-[32px] text-[#201e26] mt-12">
          Agency quality. Afternoon turnaround. You no longer have to pick.
        </p>
      </div>
    </div>
  );
}
