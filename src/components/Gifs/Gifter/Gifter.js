import {useGifs} from "../../../hooks/useGifs/useGifs";
import Loader from "../../Loader/Loader";
import GifList from "../GifList/GifList";
import useNearScreen from "../../../hooks/useNearScreen/useNearScreen";
import {useCallback, useEffect, useRef} from "react";
import debounce from "just-debounce-it";

export default function Gifter({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})

    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(function () {
        if (isNearScreen) {
            debounceHandleNextPage()
        }
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {
            loading
                ? <Loader/>
                : <>
                    <GifList gifs={gifs}/>
                    <div id="visor" ref={externalRef}></div>
                </>
        }
        </>
}