import clsx from 'clsx';

type TypographyProps = {
  text: string;
  type: 'heading' | 'subtitle';
};

export default function Typography({ text, type }: TypographyProps) {
  const textSize = type === 'heading' ? 'text-4xl' : 'text-2xl';

  return (
    <span className={clsx('text-primary', 'text-2xl', textSize)}>{text}</span>
  );
}
