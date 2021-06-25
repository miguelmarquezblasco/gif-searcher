import Searcher from "../Searcher/Searcher";
import Navbar from "./Navbar";
import {Link} from "wouter";

export default function Toolbar() {
    return (
        <nav id="toolbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">GIF Searcher</Link>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <Navbar/>
                </div>
                <Searcher/>
            </div>
        </nav>
    )
}