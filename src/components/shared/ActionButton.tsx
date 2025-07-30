import { SelectedPage } from '@src/types/enum';
import type { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type ActionButtonProps = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="bg-secondary-500 hover:bg-primary-500 rounded-md px-10 py-2 text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
