// Demo page — request form. Visual/interactive only for now: no submission wiring.
// TODO: swap this out for the HubSpot embed once the client provides the embed code.
import { useState } from 'react';

const CHEVRON = '/demo-dropdown-chevron.svg';

const TEAM_SIZE_OPTIONS = ['Less than 3 users', '3 or more users'];

const MEETING_GOAL_OPTIONS = [
  'See a live demo',
  'Discuss pricing',
  'Explore enterprise features',
  'Just exploring',
];

function TextField({ label, type = 'text' }: { label: string; type?: string }) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <label className="font-body font-normal text-[20px] leading-[36px] text-white w-full">
        {label}
      </label>
      <input
        type={type}
        placeholder="Enter here"
        className="bg-white h-[50px] rounded-2xl w-full px-[15px] font-body font-normal text-[18px] leading-[30px] text-black placeholder:text-black/60 outline-none"
      />
    </div>
  );
}

function Dropdown({ label, options }: { label: string; options: string[] }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2 items-start w-full relative">
      <label className="font-body font-normal text-[20px] leading-[36px] text-white w-full">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="bg-white cursor-pointer h-[50px] relative rounded-2xl w-full px-[15px] flex items-center justify-between"
      >
        <span className={`font-body font-normal text-[18px] leading-[30px] text-left ${value ? 'text-black' : 'text-black/60'}`}>
          {value ?? 'Please select'}
        </span>
        <img
          alt=""
          src={CHEVRON}
          className={`w-3.5 h-3 shrink-0 transition-transform ${open ? '' : 'rotate-180'}`}
        />
      </button>
      {open && (
        <div className="absolute top-full mt-2 z-20 bg-white rounded-2xl w-full shadow-lg overflow-hidden">
          {options.map(option => (
            <button
              key={option}
              type="button"
              onClick={() => { setValue(option); setOpen(false); }}
              className="block w-full text-left px-[15px] py-3 font-body font-normal text-[18px] leading-[30px] text-black hover:bg-black/5"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DemoForm() {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex flex-col gap-6 items-start w-full max-w-[518px]"
    >
      <TextField label="Name" />
      <TextField label="Email" type="email" />
      <Dropdown label="What's your team size?" options={TEAM_SIZE_OPTIONS} />
      <Dropdown label="What's the goal of your meeting?" options={MEETING_GOAL_OPTIONS} />

      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-body font-normal text-[20px] leading-[36px] text-white w-full">
          Additional details you'd like to share?
        </label>
        <textarea
          placeholder="Your message here"
          rows={5}
          className="bg-white rounded-2xl w-full px-[15px] py-[10px] font-body font-normal text-[18px] leading-[30px] text-black placeholder:text-black/60 outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#5645f5] flex items-center justify-center px-6 py-4 rounded-full hover:bg-[#3c30ac] transition-colors"
      >
        <span className="font-heading font-semibold text-[16px] leading-[30px] text-[#fafafa] whitespace-nowrap">
          Get a demo
        </span>
      </button>
    </form>
  );
}
