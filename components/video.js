import styles from '../styles/Video.module.css'
import {saveVideoToLocalStorage} from '../utils/localStorage'

export default function Video({info}) {
  const {title, url, preview} = info

  const favoriteClick = (evt) => {
    evt.preventDefault()
    const card = {title, url, preview}
    saveVideoToLocalStorage(card)
  }

  return <li>
    <div className={styles.card}>
      <a className={styles.link} href={url}>
        <img src={preview.medium}/>
        <h2 className={styles.title}>{title}</h2>
        <img src='/favorite.svg' className={styles.favorite} onClick={(evt) => favoriteClick(evt)}/>
      </a>
    </div>
  </li>
}