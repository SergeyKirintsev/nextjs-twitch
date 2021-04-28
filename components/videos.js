import Link from "next/link";
import Video from "./video";
import styles from '../styles/Videos.module.css'

export default function Videos({videos}) {

  const listVideos = videos.map(info => <Video key={info.url} info={info}/>)

  return <section>
    <ul className={styles.grid}>
      {listVideos}
    </ul>
    <p>
      <Link href={'/'}><a>Поиск</a></Link>
    </p>
    <p>
      <Link href={'/favorite'}><a>Избранное</a></Link>
    </p>
  </section>
}