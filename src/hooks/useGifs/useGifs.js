import getGifs from "../../services/getGifs/getGifs";
import {useEffect, useState} from "react";

const INITIAL_PAGE = 0;

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [gifs, setGifs] = useState([])
    const [page, setPage] = useState([])

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'cats'

    useEffect(function () {
        setLoading(true)
        getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs])

    useEffect(function () {
        if (page == INITIAL_PAGE) {
            return
        }
        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page: page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keywordToUse, page, setGifs])

    return {loading, loadingNextPage, gifs, setPage}
}