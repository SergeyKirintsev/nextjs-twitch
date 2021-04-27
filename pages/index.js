import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log(result.user)
    // result.user => 'Ada Lovelace'
  }

  const tester = () => {
    const seekValue = document.querySelector('#video').value
    your_form.action = `/video/${seekValue}`;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to app!
        </h1>

        <p>
          <Link href={'/about'}><a>Избранное</a></Link>
        </p>
        <p>
          <Link href={'/video/42'}><a>Поиск видео</a></Link>
        </p>

        <form id="your_form" onSubmit={tester}>
          <label htmlFor="name">Введите название канала</label>
          <input id="video" type="text" required />
          <button type="submit">Найти</button>
        </form>

      </main>

    </div>
  )
}
