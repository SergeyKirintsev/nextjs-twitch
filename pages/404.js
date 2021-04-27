import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <>
      <h1 className={styles.error}>Упс, нет страницы!</h1>
      <Link href={'/'}><a>Вернуться на главную</a></Link>
    </>
  )
}