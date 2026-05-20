const imgShape3 = "/shape-calendar-yellow.svg";
const imgShape2 = "/shape-calendar-green.svg";
const imgQuoteL = "/quote-left.svg";
const imgQuoteR = "/quote-right.svg";

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
    <div className="bg-white flex flex-col gap-16 md:gap-[97px] items-center py-[72px] md:py-[104px] w-full px-6 xl:px-0">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[1080px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#201e26]">
          A real customer's quarter
        </p>
        <p className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26] w-full xl:whitespace-nowrap">
          What a weekly cadence actually looks like
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
            The 13 week Q2 2026. Every
          </span>
          <PlayIcon />
          <span className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
            is a video shipped to LinkedIn.
          </span>
        </div>
      </div>

      {/* Calendar + shapes */}
      <div className="relative w-full max-w-[1230px]">
        {/* Green diamond — top left (hidden on mobile) */}
        <div className="hidden xl:block absolute left-0 top-5 w-[213px] h-[286px] pointer-events-none z-0">
          <img alt="" className="block size-full" src={imgShape2} />
        </div>
        {/* Yellow blob — bottom right (hidden on mobile) */}
        <div className="hidden xl:block absolute right-[-40px] bottom-[80px] w-[224px] h-[214px] pointer-events-none z-0">
          <img alt="" className="block size-full" src={imgShape3} />
        </div>

        {/* Desktop calendar — days as rows, weeks as columns */}
        <div className="hidden xl:block relative xl:ml-[79px] w-[1119px] z-10">
          <div className="absolute inset-0 translate-x-3 translate-y-2.5 bg-[#5645f5] border border-[#201e26] rounded-lg" />
          <div className="relative bg-white border border-[#201e26] rounded-lg overflow-hidden">
            <div className="border-b border-[#201e26] flex items-center justify-center py-4">
              <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">
                Content Marketing Calendar
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col w-[145px] shrink-0">
                <div className="bg-[#201e26] border-t border-[#fafafa] flex items-center px-6 py-4 h-[72px]">
                  <p className="font-heading font-semibold text-[16px] leading-6 text-[#fafafa]">Week</p>
                </div>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <div key={day} className="bg-[#201e26] border-t border-[#fafafa] flex items-center px-6 py-4 h-[72px]">
                    <p className="font-heading font-semibold text-[16px] leading-6 text-[#fafafa] whitespace-nowrap">
                      {day}
                    </p>
                  </div>
                ))}
              </div>
              {calendarData.map((week, wi) => (
                <div key={wi} className="flex flex-col flex-1 min-w-0">
                  <div className="bg-[#f7f5cb] border-b border-l border-r border-[#201e26] flex items-center justify-center px-2 py-4 h-[72px]">
                    <p className="font-heading font-semibold text-[16px] leading-6 text-[#201e26]">{wi + 1}</p>
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

        {/* Mobile calendar — transposed: weeks as rows, days as columns. Fits in 390px viewport. */}
        <div className="block xl:hidden relative w-full z-10">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#5645f5] border border-[#201e26] rounded-lg" />
          <div className="relative bg-white border border-[#201e26] rounded-lg overflow-hidden">
            <div className="border-b border-[#201e26] flex items-center justify-center py-3">
              <p className="font-heading font-semibold text-[16px] leading-[24px] text-[#201e26]">
                Content Marketing Calendar
              </p>
            </div>
            {/* Day header row */}
            <div className="flex">
              <div className="bg-[#201e26] border-t border-[#fafafa] flex items-center justify-center w-[64px] h-[48px] shrink-0">
                <p className="font-heading font-semibold text-[13px] leading-[18px] text-[#fafafa]">Week</p>
              </div>
              {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
                <div key={i} className="bg-[#201e26] border-t border-l border-[#fafafa] flex items-center justify-center flex-1 h-[48px]">
                  <p className="font-heading font-semibold text-[13px] leading-[18px] text-[#fafafa]">{d}</p>
                </div>
              ))}
            </div>
            {/* Week rows */}
            {calendarData.map((week, wi) => (
              <div key={wi} className="flex">
                <div className="bg-[#f7f5cb] border-t border-l border-r border-[#201e26] flex items-center justify-center w-[64px] h-[48px] shrink-0">
                  <p className="font-heading font-semibold text-[13px] leading-[18px] text-[#201e26]">{wi + 1}</p>
                </div>
                {week.map((cell, di) => (
                  <div key={di} className={`${cellBg[cell]} border border-[#201e26] flex items-center justify-center flex-1 h-[48px]`}>
                    {cell !== '' && <PlayIcon />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Checkmarks */}
        <div className="flex flex-col gap-4 mt-14 xl:ml-[79px] w-full max-w-[720px] relative z-10">
          {[
            'Same content team, zero new headcount.',
            '46 videos snipped!',
            "A CMO off your back about why you don't have a video team yet.",
          ].map(text => (
            <div key={text} className="flex items-center gap-6">
              <img alt="" src="/check-icon.svg" width={24} height={24} className="block shrink-0" />
              <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#201e26]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#fafafa] flex flex-col xl:flex-row gap-6 md:gap-12 items-start p-8 md:p-12 rounded-2xl w-full max-w-[1120px]">
        <div className="h-[93px] overflow-clip relative shrink-0 w-[120px]">
          <div className="absolute inset-[0_0_0.23%_56.01%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteL} />
          </div>
          <div className="absolute inset-[0.23%_56%_0_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuoteR} />
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0 w-full">
          <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[36px] text-[#201e26]">
            Lumen5 helped us reduce video creation time from days to just six minutes.
          </p>
          <div className="h-[52px]">
            <p className="font-heading font-semibold text-[20px] leading-[30px] text-[#201e26]">Glen Wellbrock</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#201e26]">
              Senior Director of Marketing, Berkshire Hathaway HomeService
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
