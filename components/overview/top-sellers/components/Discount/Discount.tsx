import clsx from "clsx";

interface DiscountProps {
  discount_percent: number;
  styles?: string;
}
export default function Discount({ discount_percent, styles }: DiscountProps) {
  return (
    <span
      className={clsx(
        "bg-primary text-gray-800 px-2 py-1 font-bold rounded-xl text-xs",
        styles,
      )}
    >
      -{discount_percent}%
    </span>
  );
}
