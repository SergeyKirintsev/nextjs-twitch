import Videos from "../../components/videos";
import {loadVideoFromLocalStorage} from "../../utils/localStorage";

import {useEffect, useState} from "react";
import Video from "../../components/video";

export default function Index() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const data = loadVideoFromLocalStorage()
    const tempArr = []

    for (let key in data) {
      tempArr.push(data[key])
    }
    setCards(tempArr)
  }, [])

  const listVideos = cards.map(info => <li key={info.url}>{info.url}</li>)
  // const listVideos = cards.map(info => <Video key={info.url} info={info}/>)

  return <>
    <h1>Избранное</h1>
    {/*<Videos videos={cards} />*/}
    <ul>
      {listVideos}
    </ul>
  </>
}
