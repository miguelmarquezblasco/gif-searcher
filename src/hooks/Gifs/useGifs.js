import getGifs from "../../services/Gifs/getGifs";
import {useEffect, useState} from "react";

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'cats'

        getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
}