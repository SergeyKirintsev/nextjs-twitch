const APP_NAME = "twitchVideos";

const saveVideoToLocalStorage = (card) => {
  const result = JSON.parse(localStorage.getItem(APP_NAME)) || {};
  result[card.url] = card
  localStorage.setItem(APP_NAME, JSON.stringify(result));
}

const loadVideoFromLocalStorage =()=> {
  const result = JSON.parse(localStorage.getItem(APP_NAME)) || {};
  return result
}

export {saveVideoToLocalStorage, loadVideoFromLocalStorage}