import styles from './menu.module.scss'
import { useAuth } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { Avatar, ToggleSwitch } from '@/components'
import { PiSignOut, PiX } from 'react-icons/pi'
import { useUserInfo } from '@/hooks'
import { useState } from 'react'

type MenuProps = {
  username?: string
  status?: string
  isOpen: boolean
  toggleMenu: () => void
}

export const Menu = ({ status, isOpen, toggleMenu }: MenuProps) => {
  const { signOut, user } = useAuth()
  const { updateUserName } = useUserInfo()
  const history = useNavigate()

  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState('')

  const handleSignOut = async () => {
    await signOut()
    history('/login')
  }

  const handleNameChange = async () => {
    await updateUserName(newName)
    setIsEditing(false)
  }

  return (
    <>
      <section
        className={`${styles.menuSection} ${isOpen ? '' : styles.closed}`}
      >
        <div className="container w-full">
          <div className="row justify-space-between">
            <div className="col col-10">
              <div className={styles.profileWrapper}>
                <Avatar height={60} width={60} />
                {isEditing ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onBlur={handleNameChange}
                    autoFocus
                  />
                ) : (
                  <p
                    className={styles.username}
                    onClick={() => setIsEditing(true)}
                  >
                    {user?.displayName ? user.displayName : 'Sem Nome'}
                  </p>
                )}
                <p className={styles.status}>
                  {status ? status : 'Sem Status'}
                </p>
              </div>
            </div>
            <div className="col col-2">
              <a className={styles.close} onClick={toggleMenu}>
                <PiX />
              </a>
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
  )
}
