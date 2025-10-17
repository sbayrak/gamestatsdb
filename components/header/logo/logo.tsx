import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Image
        src='/logo.png'
        alt='gamestatsdb_logo'
        width={32}
        height={32}
        priority={false}
      />
      <div className='font-bold hidden sm:inline'>
        <span className='text-gray-500'>Gamestats</span>
        <span className='text-primary font-extrabold'>DB</span>
      </div>
    </div>
  );
}
