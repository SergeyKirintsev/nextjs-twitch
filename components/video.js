import styles from '../styles/Video.module.css'

export default function Video({ info }) {
  const { title, url, preview } = info

  return <li>
    <div className={styles.card}>
      <a className={styles.link} href={url}>
        <img src={preview.medium} />
        <h2 className={styles.title}>{title}</h2>
      </a>
    </div>
  </li>
}