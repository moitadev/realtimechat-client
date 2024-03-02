import styles from './search.module.scss'
import { Input } from "@/components";

export const Search = (): JSX.Element => {
  return <>
    <Input name="search" placeholder="Buscar" className={styles.searchInput} />
  </>;
};
