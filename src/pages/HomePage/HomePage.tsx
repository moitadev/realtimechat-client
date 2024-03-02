import { Menu, Sidebar } from '@/components';
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
          <div className="col col-3">
            <Sidebar />
          </div>
          <div className="col col-9">
            <a onClick={toggleMenu}>Toggle Menu</a>
          </div>
        </div>
      </div>
    </>
  );
};
