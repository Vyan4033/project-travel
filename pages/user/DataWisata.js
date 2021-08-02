// //@ts-check

import PaketUser from "../../components/user/PaketUser"
import LayoutUser from "../../components/user/LayoutUser"
import { useDataWisata } from "../../lib/swr-fetch"

const DataWisata = () => {
    const {data, error} = useDataWisata();

    if(error) {
        return <div>Error Loading</div>
    }
    if(!data) {
        return <div>Loading</div>
    }

    console.log(data)

    return(
        <div>
            <LayoutUser>
                <PaketUser data={data}/>
            </LayoutUser>
        </div>
    )
}

// export async function getStaticProps(){
//     const res = await fetch('http:localhost:3000/api/dtPaket')
//     const pkt = await res.json()

//     return{
//         props:{
//             pkt,
//         },
//     }
// }

export default DataWisata