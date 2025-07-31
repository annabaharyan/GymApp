import { type ReactNode } from 'react';

type HeadingTextProps = {
  children: ReactNode;
};

const HeadingText = ({ children }: HeadingTextProps) => {
  return <h1 className="font-montserrat basis-3/5 text-3xl font-bold">{children}</h1>;
};

export default HeadingText;
