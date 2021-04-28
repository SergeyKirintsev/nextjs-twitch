import Router from 'next/router'

export default function About () {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <>
      <h2>About page</h2>
      <button onClick={linkClickHandler}>Back to home</button>
      <button onClick={() => {Router.push('/video/99')}}>Back to posts</button>
    </>
  )
}