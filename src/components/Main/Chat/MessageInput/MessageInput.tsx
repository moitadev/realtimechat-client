import { Input } from '@/components'
import { BiImage } from 'react-icons/bi'
import { MdAttachFile } from 'react-icons/md'

const MessageInput = () => {
  return (
    <div>
      <Input name="message" placeholder="Digite sua mensagem"  />
      <i><MdAttachFile /></i>
      <i><BiImage /></i>
    </div>
  )
}

export { MessageInput }
