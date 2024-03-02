import { Avatar } from '@/components';
import styles from './contact.module.scss'

export const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <Avatar height={60} width={60} />
      <div className={styles.textWrapper}>
        <p className={styles.name}>John Doe</p>
        <p className={styles.message}>Hello!</p>
      </div>
    </div>
  );
};
