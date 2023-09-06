import { ReactNode } from 'react';

export const SectionLayout = ({
  backgroundColor,
  children,
}: {
  backgroundColor: 'tomato' | 'palegreen' | 'blueviolet';
  children: ReactNode;
}) => {
  return (
    <section
      className="app-section"
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </section>
  );
};
