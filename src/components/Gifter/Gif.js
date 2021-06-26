export default function Gif({id, title, url}) {
    return (
        <a href={`#${id}`}>
            <img
                src={url}
                alt={title}
                className="d-block user-select-none"
                width="400em"
                height="400em"
                loading="lazy"
            />
        </a>
    )
}