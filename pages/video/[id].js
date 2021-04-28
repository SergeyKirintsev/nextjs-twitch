import {useRouter} from "next/router";

import Videos from "../../components/videos";

export default function Post({dataVideos}) {
  const { videos } = dataVideos
  const {query} = useRouter()

  return <>
    <h1>Info: {query.id}</h1>
    <Videos videos={videos} />
  </>
}

export async function getServerSideProps({params}) {
  const headers = {
    'Client-ID': process.env.customKey,
    'Accept': 'application/vnd.twitchtv.v5+json',
  }

  const resUser = await м(`https://api.twitch.tv/kraken/users?login=${params.id}`, {headers})
  const dataUser = await resUser.json()
  const idUser = dataUser.users[0]._id

  const resVideos = await fetch(`https://api.twitch.tv/kraken/channels/${idUser}/videos`, {headers})
  const dataVideos = await resVideos.json()

  return {props: {dataVideos}}
}