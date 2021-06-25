import {Link} from "wouter";

const POPULAR_GIFS = ['trending', 'rick', 'dog', 'games'];

export default function Navbar() {
    return (
        <ul className="navbar-nav me-auto">
            {POPULAR_GIFS.map((popularGif => (
                <li key={popularGif} className="nav-item">
                    <Link to={`/gif/${popularGif}`} className="nav-link">Gifs de {popularGif}</Link>
                </li>
            )))}
        </ul>
    )
}