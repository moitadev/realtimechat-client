import { Avatar } from '@/components'
import styles from './Message.module.scss'

const Message = () => {
  return (
    <div className={`${styles.message} ${styles.owner}`}>
      <div className={styles.msgInfo}>
        <Avatar width={40} height={40} />
        <span>just now</span>
      </div>
      <div className={styles.msgContent}>
        {/* <img
          src="https://images.unsplash.com/photo-1715090156594-aaa3ed5900b9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
        <p>hello, world!</p>
      </div>
    </div>
  )
}

export { Message }
