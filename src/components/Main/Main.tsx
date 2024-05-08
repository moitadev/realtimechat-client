import styles from './Main.module.scss'
import { Chat } from "@/components"

const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Chat />
        </div>
    )
}

export { Main } 