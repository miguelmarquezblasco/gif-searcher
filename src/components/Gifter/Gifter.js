import {useGifs} from "../../hooks/Gifs/useGifs";
import Loader from "../Loader/Loader";
import GifList from "./GifList";

export default function Gifter({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <>
        {
            loading
                ? <Loader/>
                : <GifList gifs={gifs}/>
        }
        <div className="row justify-content-center">
            <button onClick={handleNextPage}>More GIFs</button>
        </div>
        </>
}