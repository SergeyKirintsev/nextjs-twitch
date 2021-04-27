import {useRouter} from "next/router";

import Videos from "../../components/videos";

export default function Post({data}) {
  const {query} = useRouter()
  return <>
    <h1>Info {query.id}</h1>
    <pre>{JSON.stringify(data)}</pre>


    <h2 className="section-title">Видео</h2>
    <p className="section-subtitle">Для тех, кто любит прокрастинировать</p>

    <Videos/>

  </>
}

export async function getServerSideProps({params}) {
// "display_name":"JesusAVGN","_id":"34711476","name":"jesusavgn"
  // "display_name":"GAECHKATM","_id":"450012016"
  // const res = await fetch(`https://api.twitch.tv/kraken/users?login=${params.id}`, {

  const res = await fetch(`https://api.twitch.tv/kraken/channels/34711476/videos`, {
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