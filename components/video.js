import styles from '../styles/Video.module.css'

export default function Video() {
  return <li>
    <div className={styles.card}>
      <a className={styles.link} href="https://www.twitch.tv/videos/1000717298">
        <img src="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/2f963b36e836c50013e6_jesusavgn_41879340876_1619376424//thumb/thumb0-320x180.jpg" alt="preview"/>
        <h2 className={styles.title}>Text</h2>
      </a>
    </div>
  </li>
}