type PriceProps = {
  is_free: boolean;
  price?: string;
};

export default function Price({ is_free, price }: PriceProps) {
  if (is_free) {
    return <span>Free</span>;
  }
  if (price) {
    return <span>{price}</span>;
  }
}
