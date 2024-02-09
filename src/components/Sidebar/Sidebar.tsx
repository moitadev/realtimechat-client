import styles from './sidebar.module.scss';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { Avatar, ToggleSwitch } from '@/components';
import { PiSignOut, PiX } from 'react-icons/pi';

type SidebarProps = {
  username?: string;
  status?: string;
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const Sidebar = ({ username, status, isOpen, toggleSidebar }: SidebarProps) => {
  const { signOut } = useAuth();
  const history = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    history('/login');
  };

  return (
    <>
      <section className={`${styles.sidebarSection} ${isOpen ? '' : styles.closed}`}>
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
              <a className={styles.close} onClick={toggleSidebar}><PiX /></a>
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
