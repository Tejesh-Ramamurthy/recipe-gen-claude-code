import TabButton from "../ui/TabButton";

type Tab = "genie" | "pantry" | "shopping-list";

type NavBarProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

const tabs: { label: string; value: Tab }[] = [
  { label: "Genie", value: "genie" },
  { label: "Pantry", value: "pantry" },
  { label: "Shopping List", value: "shopping-list" },
];

export default function NavBar({ activeTab, onTabChange }: NavBarProps) {
  return (
    <nav
      className="w-full flex flex-row items-end justify-start gap-[24px] pl-[16px] pb-[16px]"
      style={{ backgroundColor: "#1C1C1C", height: "71px" }}
    >
      {tabs.map(({ label, value }) => (
        <TabButton
          key={value}
          label={label}
          isSelected={activeTab === value}
          onClick={() => onTabChange(value)}
        />
      ))}
    </nav>
  );
}
