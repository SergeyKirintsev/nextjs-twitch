import Video from "./video";
import styles from '../styles/Videos.module.css'

export default function Videos() {
  return <section>
    <ul className={styles.grid}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </ul>
  </section>
}