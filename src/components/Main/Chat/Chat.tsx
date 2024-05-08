import styles from './Chat.module.scss'
import { ChatHeader, MessageInput, Messages } from '@/components'

const Chat = () => {
  return (
    <div className={styles.ChatWrapper}>
      <header>
        <ChatHeader />
      </header>
      <main>
        <Messages />
      </main>
      <footer>
        <MessageInput />
      </footer>
    </div>
  )
}

export { Chat }
