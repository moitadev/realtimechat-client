import styles from './MessageInput.module.scss'
import { Input } from '@/components'
import { BiImage } from 'react-icons/bi'
import { MdAttachFile } from 'react-icons/md'

const MessageInput = () => {
  return (
    <div className={styles.wrapper}>
      <Input name="message" placeholder="Digite sua mensagem" className={styles.messageInput} />
      <i><MdAttachFile /></i>
      <i><BiImage /></i>
    </div>
  )
}

export { MessageInput }
