// Demo page — "The power of Lumen5" tabbed feature showcase.
// Figma node: 508:2018 for "Blog to Video"; the other 4 tabs' copy came from screenshots of
// the prototype (https://figma.com/proto/.../415-4239), since only Blog to Video exists as
// inspectable content in the underlying design file.
import { useState } from 'react';

type Step = {
  badge: string;
  badgeBg: string;
  title: string;
  body: string;
};

type Tab = {
  label: string;
  href: string;
  heading: string;
  body: string;
  steps: Step[];
};

const TABS: Tab[] = [
  {
    label: 'Blog to Video',
    href: 'https://lumen5.com/features/blog-to-video',
    heading: 'Blog to Video',
    body: 'AI powered video creation designed for marketers, creators, and content teams. Turn written content into compelling, shareable videos in minutes.',
    steps: [
      {
        badge: 'Step 1',
        badgeBg: '#46e378',
        title: 'Add your content',
        body: 'Paste a URL from your blog, upload a PDF, add text manually, or start from an outline. Lumen5 instantly extracts the most important information, making repurposing effortless.',
      },
      {
        badge: 'Step 2',
        badgeBg: '#3bd9eb',
        title: 'Generate your AI script',
        body: 'Say hello to AI magic. Lumen5 produces multiple script variations with different angles and tones. Choose the version that fits your message and adjust length or style with a few clicks.',
      },
      {
        badge: 'Step 3',
        badgeBg: '#e5e250',
        title: 'Let it generate',
        body: 'Select your script and Lumen5 automatically pairs it with media, timing, and motion. Your rough cut is ready within seconds.',
      },
    ],
  },
  {
    label: 'Talking Heads',
    href: 'https://lumen5.com/features/talking-head',
    heading: 'Talking Heads',
    body: 'Talking head videos create a sense of human presence that other formats struggle to match. This personal touch increases engagement, trust, and retention.',
    steps: [
      {
        badge: 'Step 1',
        badgeBg: '#46e378',
        title: 'Add your written content',
        body: 'Start with written material or a recorded message. Lumen5 can take your content and convert it into a structured script inside the editor.',
      },
      {
        badge: 'Step 2',
        badgeBg: '#3bd9eb',
        title: 'Enhance your video with visual overlays',
        body: 'Add callouts, lower thirds, and cutaways to highlight key points and maintain viewer attention. These visual layers guide understanding and elevate the storytelling experience.',
      },
      {
        badge: 'Step 3',
        badgeBg: '#e5e250',
        title: 'Generate captions and refine with ease',
        body: "Captions are automatically generated to match your script and can be styled to fit your brand's fonts and colors. This improves accessibility and keeps viewers engaged even with sound off.",
      },
    ],
  },
  {
    label: 'AI Voices',
    href: 'https://lumen5.com/features/ai-voiceover-video-generator',
    heading: 'AI Voices',
    body: "Create high quality voiceovers in seconds with Lumen5's AI Voiceover Generator. Produce natural, human sounding narration in multiple languages without expensive equipment.",
    steps: [
      {
        badge: 'Step 1',
        badgeBg: '#46e378',
        title: 'Add your script',
        body: 'Add your text directly into Lumen5. You can type your script, paste it from documents, or import it from your Lumen5 video project.',
      },
      {
        badge: 'Step 2',
        badgeBg: '#3bd9eb',
        title: 'Choose your AI voice',
        body: 'Select from a curated library of natural AI voices across multiple languages, accents, genders, and speaking styles. Every voice is optimized for clarity, warmth, and professional delivery.',
      },
      {
        badge: 'Step 3',
        badgeBg: '#e5e250',
        title: 'Generate and apply your voiceover',
        body: 'Instantly create your narration. Lumen5 automatically syncs the audio with your visuals so your video is ready to publish without manual adjustments.',
      },
    ],
  },
  {
    label: 'Custom Branding',
    href: 'https://lumen5.com/features/video-branding-customization',
    heading: 'Custom Branding',
    body: "Your brand deserves videos that look polished, consistent, and unmistakably yours. Lumen5's branding tools make this effortless by automatically applying your logos, fonts, colors, and watermarks to every video.",
    steps: [
      {
        badge: 'Step 1',
        badgeBg: '#46e378',
        title: 'Set your brand kit',
        body: 'Upload your logo, choose your fonts, define your color palette, and add your watermark. This becomes the foundation for all future videos.',
      },
      {
        badge: 'Step 2',
        badgeBg: '#3bd9eb',
        title: 'Apply automatically',
        body: 'Lumen5 applies your brand kit to every new project. Scene layouts, text styles, and design elements instantly adopt your brand identity.',
      },
      {
        badge: 'Step 3',
        badgeBg: '#e5e250',
        title: 'Publish with consistency',
        body: 'Produce videos that look professional and aligned with your brand every time. Whether you are posting on social platforms or creating internal training content, your videos stay consistent.',
      },
    ],
  },
  {
    label: 'Templates',
    href: 'https://lumen5.com/features/video-templates-scene-designs',
    heading: 'Templates',
    body: "Skip the design challenges and start every project with a strong foundation. Lumen5's video templates and scene designs provide professionally crafted frameworks that let you create polished videos in minutes.",
    steps: [
      {
        badge: 'Step 1',
        badgeBg: '#46e378',
        title: 'Choose a template',
        body: 'Begin with a professionally built framework designed to support your story, style, and platform needs.',
      },
      {
        badge: 'Step 2',
        badgeBg: '#3bd9eb',
        title: 'Customize your scenes',
        body: 'Add text, upload media, and choose from a wide range of dynamic scene layouts. Each layout is built for clarity and visual impact.',
      },
      {
        badge: 'Step 3',
        badgeBg: '#e5e250',
        title: 'Edit and publish',
        body: 'Refine animations, adjust pacing, apply branding, and share your finished video across any channel.',
      },
    ],
  },
];

export default function PowerTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div id="power" className="bg-white flex flex-col items-center justify-center px-6 md:px-16 xl:px-[104px] py-16 md:py-[104px] w-full scroll-mt-6">
      <div className="flex flex-col gap-14 md:gap-[73px] items-start w-full max-w-[1232px]">
        <div className="flex flex-col gap-14 md:gap-[75px] items-center w-full">
          <div className="flex flex-col gap-3 items-center text-center w-full max-w-[944px]">
            <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] text-[#201e26]">
              The power of Lumen5
            </h2>
            <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#333]">
              Lumen5 turns whatever you've already created — a script, a slide deck, a brand
              voice — into finished video. With many available features, Lumen5 can cover every
              aspect of video creation for you.
            </p>
            <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#333]">
              Pick a tab to see how each one works.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center w-full">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={`border-b-[6px] cursor-pointer flex items-center justify-center p-4 md:p-6 transition-colors ${
                  i === active ? 'border-[#5645f5]' : 'border-[#ccc] hover:border-[#999]'
                }`}
              >
                <span className={`font-heading font-semibold text-[16px] md:text-[20px] leading-[42px] text-center whitespace-nowrap ${
                  i === active ? 'text-[#201e26]' : 'text-black'
                }`}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="bg-[#fafafa] flex flex-col items-center justify-center px-6 md:px-10 py-12 md:py-20 rounded-2xl w-full">
          <div className="flex flex-col gap-8 md:gap-11 items-center w-full">
            <div className="flex flex-col gap-14 md:gap-[70px] items-center w-full">
              <div className="flex flex-col gap-3 items-center text-center w-full max-w-[1064px]">
                <h3 className="font-heading font-semibold text-[26px] leading-[34px] md:text-[36px] md:leading-[60px] text-[#201e26]">
                  {tab.heading}
                </h3>
                <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#333] max-w-[1104px]">
                  {tab.body}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch w-full">
                {tab.steps.map(step => (
                  <div key={step.title} className="bg-white flex flex-col gap-6 items-start px-6 py-8 rounded-2xl w-full md:w-1/3">
                    <span
                      className="flex items-center justify-center px-4 py-2 rounded-full"
                      style={{ backgroundColor: step.badgeBg }}
                    >
                      <span className="font-heading font-semibold text-[14px] leading-[21px] text-[#201e26] whitespace-nowrap">
                        {step.badge}
                      </span>
                    </span>
                    <div className="flex flex-col gap-[15px] w-full">
                      <p className="font-heading font-semibold text-[26px] leading-none text-[#201e26]">
                        {step.title}
                      </p>
                      <p className="font-body font-normal text-[18px] leading-[30px] text-black">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={tab.href}
              className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full hover:bg-[#3c30ac] transition-colors"
            >
              <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
                Learn more
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
