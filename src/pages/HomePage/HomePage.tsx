import { Button, Sidebar } from '@/components';
import { useState } from 'react';

export const HomePage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="container">
        <div className="row">
          <div className="col">
            <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
          </div>
        </div>
      </div>
    </>
  );
};
