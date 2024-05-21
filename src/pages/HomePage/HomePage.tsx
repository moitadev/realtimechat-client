import { Menu, Sidebar, Main } from '@/components';
import { useState } from 'react';
import { UserProvider } from '@/context';

export const HomePage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <UserProvider>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="container-fluid">
        <div className="row">
          <Sidebar toggleMenu={toggleMenu} />
          <div className="col col-10">
            <Main />
          </div>
        </div>
      </div>
    </UserProvider>
  );
};
