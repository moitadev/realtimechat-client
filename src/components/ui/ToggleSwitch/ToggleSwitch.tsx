import { PiMoonStars, PiSun } from "react-icons/pi";
import { useTheme } from '@/hooks';
import styles from './toggleswitch.module.scss';

export const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleSwitch}>
      <input
        type="checkbox"
        id="toggle"
        className={styles.toggleCheckbox}
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle" className={styles.toggleLabel}>
        <div className={styles.toggleHandle}>{isDarkMode ? <PiMoonStars /> : <PiSun />}</div>
      </label>
    </div>
  );
};