import {Link} from "wouter";
import {useEffect, useState} from "react";
import getTrendingTerms from "../../../services/getTrendingTerms/getTrendingTerms";

export default function Navbar() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms()
            .then(setTrends)
    }, [])

    return (
        <ul className="navbar-nav me-auto">
            {
                trends.map((popularGif => (
                    <li key={popularGif} className="nav-item">
                        <Link to={`/gif/${popularGif}`} className="nav-link">{popularGif}</Link>
                    </li>
                )))
            }
        </ul>
    )
}