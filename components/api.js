export default class Api {
  // static fetch() {
  //   // if (!token) {
  //   //   return Promise.resolve('<p class="error">У вас нет токена</p>');
  //   // }
  //   return fetch(
  //     `https://tricolor-77333.firebaseio.com/cards.json`
  //     // `https://tricolor-77333.firebaseio.com/cards.json?auth=${token}`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response && response.error) {
  //         return `<p class="error">${response.error}</p>`;
  //       }
  //
  //       return response
  //         ? Object.keys(response).map((key) => ({
  //           ...response[key],
  //           id: key,
  //         }))
  //         : [];
  //     });
  // }

  static headers = {
    'Client-ID': process.env.customKey,
    'Accept': 'application/vnd.twitchtv.v5+json',
  }

  static async getVideos(name) {
    const res = await fetch(`https://api.twitch.tv/kraken/users?login=${name}`, {
        headers: this.headers
      }
    )

    const user = await res.json()


  }
}