// Explainers — style range + the "AI video looks generic" objection kill.
// Real animation, not a talking avatar. Style names are the real ones shown in
// the platform / webinar (Lucid, Claymation, Anime, Serenity), plus enterprise
// custom styles. Tiles are brand-tinted CSS panels labelled with the style.

type Tile = {
  name: string;
  gradient: string;
  dark?: boolean;
};

const tiles: Tile[] = [
  { name: "Lucid",       gradient: "linear-gradient(140deg, #EEEDFE 0%, #CECBF6 100%)" },
  { name: "Claymation",  gradient: "linear-gradient(140deg, #FAECE7 0%, #F5C4B3 100%)" },
  { name: "Anime",       gradient: "linear-gradient(140deg, #E6F1FB 0%, #9fc7f0 100%)" },
  { name: "Serenity",    gradient: "linear-gradient(140deg, #E1F5EE 0%, #9FE1CB 100%)" },
  { name: "Custom brand", gradient: "linear-gradient(140deg, #26215C 0%, #5645f5 100%)", dark: true },
  { name: "+ 15 more",   gradient: "linear-gradient(140deg, #FBEAF0 0%, #FAEEDA 100%)" },
];

export default function StyleRange() {
  return (
    <div className="bg-white flex flex-col gap-10 md:gap-14 items-center justify-center px-6 md:px-16 py-[72px] md:py-[104px] w-full">
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center w-full max-w-[820px]">
        <p className="font-heading font-semibold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] text-[#5645f5]">
          Not a talking avatar
        </p>
        <h2 className="font-heading font-semibold text-[28px] leading-[36px] md:text-[42px] md:leading-[60px] text-[#201e26]">
          Most AI video looks like a robot made it.
          <span className="text-[#5645f5]"> This doesn&rsquo;t.</span>
        </h2>
        <p className="font-body font-normal text-[18px] leading-[30px] md:text-[20px] md:leading-[36px] text-[#201e26]">
          Real, motion-design-grade animation &mdash; not a stock avatar reading a script. 15+ styles, your brand
          colors, any aspect ratio. Enterprise teams get a custom style built just for them.
        </p>
      </div>

      {/* Style tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5 w-full max-w-[1232px]">
        {tiles.map(tile => (
          <div
            key={tile.name}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-sm flex items-end p-4"
            style={{ background: tile.gradient }}
          >
            <span
              className={`font-heading font-semibold text-[15px] leading-[20px] ${tile.dark ? 'text-white' : 'text-[#201e26]'}`}
            >
              {tile.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
