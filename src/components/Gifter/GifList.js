import Gif from "./Gif";

export default function GifList({gifs}) {
    return (
        <div id="gifter" className="row hidden-md-up jumbotron justify-content-center">
            {
                gifs.map(({id, title, url}) =>
                    <Gif
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                    />
                )
            }
        </div>
    )
}