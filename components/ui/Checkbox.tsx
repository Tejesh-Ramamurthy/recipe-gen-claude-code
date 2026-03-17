"use client";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      style={{ width: "24px", height: "24px", padding: 0 }}
      className="
        flex items-center justify-center
        rounded-md
        cursor-pointer
        transition-all duration-200
        active:bg-orange-500/10
        border-none
        bg-transparent
        outline-none
      "
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "4px",
          flexShrink: 0,
          backgroundColor: checked ? "#FF7B00" : "transparent",
          border: checked ? "none" : "1.5px solid #CACACA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
        }}
      >
        {checked && (
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4L4.5 7.5L11 1"
              stroke="#212121"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}