const imgShape3 = "https://www.figma.com/api/mcp/asset/3ced1f4e-9e10-41b4-83e6-c54d80be5547";
const imgShape2 = "https://www.figma.com/api/mcp/asset/8e96e144-bff3-46de-8ff4-d1a7c9300aa7";
const imgQuoteL = "https://www.figma.com/api/mcp/asset/5da95ec6-db2a-4bbd-b4fd-36c5942bac59";
const imgQuoteR = "https://www.figma.com/api/mcp/asset/71d65935-0ece-42e5-a91a-4c53973d30cc";

type Cell = '' | 'light' | 'medium' | 'dark';

const calendarData: Cell[][] = [
  ['dark',   'light',  '',       'medium', ''      ],
  ['light',  '',       'light',  'dark',   'medium'],
  ['',       'dark',   'medium', '',       'light' ],
  ['dark',   'light',  '',       'medium', 'dark'  ],
  ['',       'medium', 'dark',   'light',  ''      ],
  ['light',  '',       'medium', 'dark',   'light' ],
  ['medium', 'dark',   '',       'medium', ''      ],
  ['light',  'medium', 'light',  '',       'dark'  ],
  ['',       'light',  'dark',   'medium', ''      ],
  ['dark',   '',       'light',  'dark',   'light' ],
  ['',       'medium', '',       'light',  'medium'],
  ['light',  'dark',   'medium', '',       'light' ],
  ['dark',   'light',  '',       'medium', ''      ],
];

const cellBg: Record<Cell, string> = {
  '':       'bg-white',
  'light':  'bg-[#efecff]',
  'medium': 'bg-[#ccc8fe]',
  'dark':   'bg-[#aba1fb]',
};

function PlayIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M1 1.5L14.5 9L1 16.5V1.5Z" fill="#5645f5" stroke="#201e26" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function CalendarModule() {
  return (
    <div className="bg-white flex flex-col gap-[97px] items-center py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-[860px]">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[30px] text-[#201e26]">
          A real customer's quarter
        </p>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] leading-[60px] text-[#201e26] w-[788px]">
          What a weekly cadence actually looks like
        </p>
        <div className="flex items-center gap-2">
          <span className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26]">
            The 13 week Q2 2026. Every
          </span>
          <PlayIcon />
          <span className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26]">
            is a video shipped to LinkedIn.
          </span>
        </div>
      </div>

      {/* Calendar + shapes */}
      <div className="relative w-[1230px]">
        {/* Green diamond — top left */}
        <div className="absolute left-0 top-5 w-[213px] h-[286px] pointer-events-none z-0">
          <img alt="" className="block size-full" src={imgShape2} />
        </div>
        {/* Rotated blob — bottom right */}
        <div className="absolute right-[-40px] bottom-[220px] w-[260px] h-[220px] pointer-events-none rotate-[132.6deg] z-0">
          <img alt="" className="block size-full" src={imgShape3} />
        </div>

        {/* Calendar card with purple shadow */}
        <div className="relative ml-[79px] w-[1119px] z-10">
          <div className="absolute inset-0 translate-x-3 translate-y-2.5 bg-[#5645f5] border border-[#201e26] rounded-lg" />
          <div className="relative bg-white border border-[#201e26] rounded-lg overflow-hidden">
            {/* Header */}
            <div className="border-b border-[#201e26] flex items-center justify-center py-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[30px] text-[#201e26]">
                Content Marketing Calendar
              </p>
            </div>
            {/* Grid */}
            <div className="flex">
              {/* Day-label column */}
              <div className="flex flex-col w-[145px] shrink-0">
                <div className="bg-[#201e26] border-t border-[#fafafa] flex items-center px-6 py-4 h-[72px]">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-6 text-[#fafafa]">Week</p>
                </div>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <div key={day} className="bg-[#201e26] border-t border-[#fafafa] flex items-center px-6 py-4 h-[72px]">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-6 text-[#fafafa] whitespace-nowrap">
                      {day}
                    </p>
                  </div>
                ))}
              </div>
              {/* Week columns */}
              {calendarData.map((week, wi) => (
                <div key={wi} className="flex flex-col flex-1 min-w-0">
                  <div className="bg-[#f7f5cb] border-b border-l border-r border-[#201e26] flex items-center justify-center px-2 py-4 h-[72px]">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-6 text-[#201e26]">{wi + 1}</p>
                  </div>
                  {week.map((cell, di) => (
                    <div key={di} className={`${cellBg[cell]} border border-[#201e26] flex items-center justify-center h-[72px]`}>
                      {cell !== '' && <PlayIcon />}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Checkmarks */}
        <div className="flex flex-col gap-4 mt-6 ml-[79px] w-[720px] relative z-10">
          {[
            'Same content team, zero new headcount.',
            '46 videos snipped!',
            "A CMO off your back about why you don't have a video team yet.",
          ].map(text => (
            <div key={text} className="flex items-center gap-6">
              <div className="bg-[#46e378] rounded-full size-6 flex items-center justify-center shrink-0">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 4L4.5 7L11 1" stroke="#201e26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#201e26]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#fafafa] flex gap-12 items-start p-12 rounded-2xl shrink-0 w-[1120px]">
        <div className="h-[93px] overflow-clip relative shrink-0 w-[120px]">
          <div className="absolute inset-[0_0_0.23%_56.01%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteL} />
          </div>
          <div className="absolute inset-[0.23%_56%_0_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteR} />
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26]">
            Lumen5 helped us reduce video creation time from days to just six minutes.
          </p>
          <div className="h-[52px]">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[30px] text-[#201e26]">Glen Wellbrock</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#201e26]">
              Senior Director of Marketing, Berkshire Hathaway HomeService
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
