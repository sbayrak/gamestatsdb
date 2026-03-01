"use client";

import Image from "next/image";

const FALLBACK_IMAGE = "/no-image.svg";

interface CardImageProps {
  src?: string;
  alt: string;
}

export default function CardImage({ alt, src }: CardImageProps) {
  const imgSrc = src || FALLBACK_IMAGE;

  return (
    <div className="relative w-full">
      <Image
        src={imgSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
}
