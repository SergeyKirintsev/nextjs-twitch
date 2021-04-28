import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {

  const handleSubmit = () => {
    const seekValue = document.querySelector('#video').value
    form.action = `/video/${seekValue}`;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Поиск видео на твитче</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Введите название канала</label>
          <input id="video" type="text" required/>
          <button type="submit">Найти</button>
        </form>
      </main>

    </div>
  )
}
