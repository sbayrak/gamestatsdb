import clsx from 'clsx';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  textSize?:
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
}

export default function Logo({ size = 32, textSize }: LogoProps) {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Image
        src='/logo.png'
        alt='gamestatsdb_logo'
        width={size}
        height={size}
        priority={false}
      />
      <div className={clsx('font-bold hidden sm:inline', textSize)}>
        <span className='text-gray-500'>Gamestats</span>
        <span className='text-primary font-extrabold'>DB</span>
      </div>
    </div>
  );
}
