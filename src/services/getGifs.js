import {API_KEY, API_URL} from './settings';

export default function getGifs({
                                    keyword = 'hello',
                                    limit = 12,
                                    page= 0
} = {}) {

    const URL = API_URL +
        '/gifs/search?api_key=' + API_KEY +
        '&q=' + keyword +
        '&limit=' + limit +
        '&offset=' + limit * page +
        '&rating=g&lang=en'

    return fetch(URL)
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