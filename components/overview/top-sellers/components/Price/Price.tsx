interface PriceProps {
  discountedPrice?: number;
  price?: number;
}

export default function Price({ discountedPrice, price }: PriceProps) {
  const hasDiscountedPrice = !!discountedPrice;
  const hasPrice = !!price;

  return (
    <div className="p-2 flex flex-row items-center gap-x-2">
      {hasDiscountedPrice && (
        <span className="line-through text-sm text-gray-400">
          €{discountedPrice}
        </span>
      )}{" "}
      {hasPrice && (
        <span className="text-primary text-lg font-semibold">€{price}</span>
      )}
      {!hasPrice && !hasDiscountedPrice && (
        <span className="text-primary">Free</span>
      )}
    </div>
  );
}
