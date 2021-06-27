import {API_KEY, API_URL} from '../settings.dist';

export default function getTrendingTerms() {

    const URL = API_URL +
        '/trending/searches?api_key=' +
        API_KEY

    return fetch(URL)
        .then(response => response.json())
        .then(response => {
            const {data = []} = response
            return data.slice(0, 6)
        })
}