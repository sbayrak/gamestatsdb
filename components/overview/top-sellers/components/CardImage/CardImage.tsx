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
        fill
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="absolute top-0 left-0 object-fill"
      />
    </div>
  );
}
