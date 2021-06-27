import {Route} from "wouter";
import Toolbar from "./components/Toolbar/Toolbar";
import {useState} from "react";
import {useGifs} from "./hooks/useGifs/useGifs";
import Gifter from "./components/Gifs/Gifter/Gifter";
import Spacer from "./components/Spacer/Spacer";

export default function App() {

    const [keyword, setKeyword] = useState([])

    const {loading, gifs} = useGifs()

    return (
        <div className="App">
            <Toolbar/>
            <Spacer/>
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