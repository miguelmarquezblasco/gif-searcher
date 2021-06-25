import {useGifs} from "../../hooks/Gifs/useGifs";
import Loader from "../Loader/Loader";
import GifList from "./GifList";

export default function Gifter({params}) {
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})

    return <>
        {
            loading
                ? <Loader/>
                : <GifList gifs={gifs}/>
        }
        </>
}