import { HEADER_HEIGHT } from '@/shared/constants/constants';
import Logo from './logo/logo';
import Search from './search/search';
import ThemeSwitch from './theme-switch/theme-switch';

export default function Header() {
  return (
    <div
      className={`grid grid-cols-6 sm:grid-cols-4 gap-4 items-center w-full bg-background shadow-2xl fixed top-0 left-0 right-0 ${HEADER_HEIGHT} z-50 px-6`}
    >
      <div className='col-span-1 flex items-center justify-start h-full'>
        <Logo />
      </div>
      <div className='col-span-4 sm:col-span-2 flex items-center justify-center h-full'>
        <Search />
      </div>
      <div className='col-span-1 flex items-center justify-end h-full'>
        <ThemeSwitch />
      </div>
    </div>
  );
}
