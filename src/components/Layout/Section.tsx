import { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({ children, id, className: _className }: Props) => {
  const className = `h-dvh block snap-center snap-always${
    _className ? ` ${_className}` : ""
  }`;

  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};
