import { Menu, Sidebar, Main } from '@/components';
import { useState } from 'react';

export const HomePage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="container-fluid">
        <div className="row">
          <Sidebar toggleMenu={toggleMenu} />
          <div className="col col-10">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};
