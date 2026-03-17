type TabButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function TabButton({ label, isSelected, onClick }: TabButtonProps) {
  if (isSelected) {
    return (
      <button
        onClick={onClick}
        className="
          inline-flex items-center
          w-fit
          py-[0px]
          font-serif font-bold text-[24px] text-[#FF7B00]
          bg-transparent border-none outline-none
          cursor-pointer
          rounded-md
          transition-all duration-150
          active:bg-orange-500/10
        "
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center
        w-fit
        py-[3px]
        font-sans font-normal text-[16px] text-[#CACACA]
        bg-transparent border-none outline-none
        cursor-pointer
        rounded-md
        transition-all duration-150
        hover:text-[#FF7B00]
        active:bg-orange-500/10 active:text-[#FF7B00]
      "
    >
      {label}
    </button>
  );
}
