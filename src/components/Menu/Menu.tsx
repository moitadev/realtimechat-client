import styles from './menu.module.scss';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { Avatar, ToggleSwitch } from '@/components';
import { PiSignOut, PiX } from 'react-icons/pi';

type MenuProps = {
  username?: string;
  status?: string;
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Menu = ({ username, status, isOpen, toggleMenu }: MenuProps) => {
  const { signOut } = useAuth();
  const history = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    history('/login');
  };

  return (
    <>
      <section className={`${styles.menuSection} ${isOpen ? '' : styles.closed}`}>
        <div className="container w-full">
          <div className="row justify-space-between">
            <div className="col col-10">
              <div className={styles.profileWrapper}>
                <Avatar height={60} width={60} />
                <p className={styles.username}>
                  {username ? username : 'Sem Nome'}
                </p>
                <p className={styles.status}>
                  {status ? status : 'Sem Status'}
                </p>
              </div>
            </div>
            <div className="col col-2">
              <a className={styles.close} onClick={toggleMenu}><PiX /></a>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col">
                <ToggleSwitch />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a className={styles.signOut} onClick={handleSignOut}>
                  Sair <PiSignOut />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section> 
      <div className={`${styles.overlay} ${isOpen ? '' : styles.closed}`}></div>
    </>
  );
};
