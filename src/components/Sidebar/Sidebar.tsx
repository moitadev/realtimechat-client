import styles from './sidebar.module.scss';
import { PiSliders } from 'react-icons/pi';
import {Contact, Search} from '@/components'

export const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <a><PiSliders /></a>
          <Search />
        </div>
        <div className={styles.contactList}>
            <Contact />
        </div>
      </div>
    </>
  );
};
