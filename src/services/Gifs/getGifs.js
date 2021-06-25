const API_KEY = 'Vd223ZCBY73Jvj0cXIP8Oa0aONEnB5cb';

export default function getGifs({keyword = 'hello'} = {}) {

    const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY +
        '&q=' + keyword +
        '&limit=25&offset=0&rating=g&lang=en'

    return fetch(API_URL)
        .then(response => response.json())
        .then(response => {
            const {data = []} = response
            return data.map(image => {
                const {images, id, title} = image
                const {url} = images.downsized_medium
                return {id, title, url}
            })
        })
}