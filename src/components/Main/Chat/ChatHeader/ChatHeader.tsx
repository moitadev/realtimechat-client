import { BiChevronRightCircle } from 'react-icons/bi'
import styles from './ChatHeader.module.scss'
import { Avatar } from '@/components'

const ChatHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar height={40} width={40} />
      <div className={styles.nameWrapper}>
        <p>John Doe</p>
        <a>
          <BiChevronRightCircle size='14px' />
        </a>
      </div>
    </div>
  )
}

export { ChatHeader }
