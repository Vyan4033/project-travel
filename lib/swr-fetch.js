//@ts-check

import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url);
    return res.json()
}

export const useDataWisata = (pkt) => {
    //url
    const url = "http://localhost:3000/api/dtPaket"
    //data error
    const {data, error} = useSWR(url, fetcher, {initialData : pkt, refreshInterval : 1000})

    return {data, error}
}
