import {useRouter} from "next/router";

export default function Post({data}) {
  const {query} = useRouter()
  return <>
    <h1>Poster {query.id}</h1>
    <pre>{JSON.stringify(data)}</pre>
  </>
}

export async function getServerSideProps({ params }) {

  const res = await fetch(`https://api.twitch.tv/kraken/users?login=${params.id}`, {
      headers: {
        'Client-ID': process.env.customKey,
        'Accept': 'application/vnd.twitchtv.v5+json',
      }
    }
  )

  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {props: {data}}
}