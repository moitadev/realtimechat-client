import styles from './sidebar.module.scss'
import { PiSliders } from 'react-icons/pi'
import { Contact, Search } from '@/components'

type SidebarProps = {
  toggleMenu: () => void
}

export const Sidebar = ({ toggleMenu }: SidebarProps) => {
  return (
    <div className={`col col-2 ${styles.wrapper}`}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <a onClick={toggleMenu}>
            <PiSliders />
          </a>
          <Search />
        </div>
        <div className={styles.contactList}>
          <Contact />
        </div>
      </div>
    </div>
  )
}
