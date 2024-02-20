import { Button, Menu } from '@/components';
import { useState } from 'react';

export const HomePage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="container w-full">
        <div className="row">
          <div className="col">
            <Button onClick={toggleMenu}>Toggle Menu</Button>
          </div>
        </div>
      </div>
    </>
  );
};
