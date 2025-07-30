import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@src/assets/Logo.png';
import type { SelectedPage } from '@src/types/enum';
import Link from './Link';
import useMediaQuery from '@src/hooks/useMediaQueries';
import { useState } from 'react';
import ActionButton from '@src/components/shared/ActionButton';

type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};
const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: NavbarProps) => {
  const flexBetween = 'flex items-center justify-between';
  const navbarBG = !isTopOfPage ? 'bg-primary-100 drop-shadow' : '';

  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className={`${flexBetween} ${navbarBG} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={Logo} alt="logo" />
          {isAboveMediumScreen ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="bg-secondary-500 rounded-full p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="bg-primary-100 fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!setIsMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
