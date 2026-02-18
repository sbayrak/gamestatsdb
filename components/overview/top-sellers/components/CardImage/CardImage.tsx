import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
}

export default function CardImage({ alt, src }: CardImageProps) {
  return (
    <div className="relative aspect-video w-full">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
}
