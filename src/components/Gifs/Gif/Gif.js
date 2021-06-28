import {API_KEY, API_URL} from "../../../services/settings";

export default function Gif({id, title, url}) {

    const URL = API_URL +
        '/gifs/' + id +
        '?api_key=' + API_KEY

    const copyToClipboard = async () => {
        await fetch(URL)
            .then(response => response.json())
            .then((jsonData) => {
                const gifURL = jsonData.data.images.downsized_medium.url
                navigator.clipboard.writeText(gifURL)
                    .then(function() {
                        alert('GIF copied to clipboard!')
                    }, function(error) {
                        console.error('Could not copy gif: ', error)
                    })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <button onClick={copyToClipboard}>
            <img
                src={url}
                alt={title}
                className="d-block user-select-none"
                width="400em"
                height="400em"
                loading="lazy"
            />
        </button>
    )
}