import Link from "next/link";
import Video from "./video";
import styles from '../styles/Videos.module.css'

export default function Videos({videos}) {

  const listVideos = videos.map(info => <Video info={info}/>)

  return <section>
    <ul className={styles.grid}>
      {listVideos}
    </ul>
    <p>
      <Link href={'/'}><a>Назад</a></Link>
    </p>
  </section>
}