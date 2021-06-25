export default function Gif({id, title, url}) {
    return (
        <a href={`#${id}`}>
            <img
                src={url}
                alt={title}
                className="d-block user-select-none"
                width="100%"
                height="100%"
                loading="lazy"
            />
        </a>
    )
}