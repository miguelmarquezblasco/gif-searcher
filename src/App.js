import {Route} from "wouter";
import Toolbar from "./components/Toolbar/Toolbar";
import {useState} from "react";
import {useGifs} from "./hooks/Gifs/useGifs";
import Gifter from "./components/Gifter/Gifter";

export default function App() {

    const [keyword, setKeyword] = useState([])

    const {loading, gifs} = useGifs()

    return (
        <div className="App">
            <Toolbar/>
            <section className="App-Content">
                <Route
                    path="/"
                    component={Gifter}
                />
                <Route
                    path="/gif/:keyword"
                    component={Gifter}
                />
            </section>
        </div>
    )
}