import { ArrowLeftRight, CheckSquare, Cloud, Cog, Globe2, Heart } from "lucide-react";

const iconMap = {
  arrows: ArrowLeftRight,
  check: CheckSquare,
  cloud: Cloud,
  cog: Cog,
  globe: Globe2,
  heart: Heart
};

export default function ServiceIcon({ name, className = "", size = 58 }) {
  const Icon = iconMap[name] ?? Cog;

  return (
    <Icon
      className={className}
      size={size}
      strokeWidth={2.5}
      fill={name === "cloud" ? "currentColor" : "none"}
    />
  );
}
