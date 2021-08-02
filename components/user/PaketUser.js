//@ts-check

import Link from "next/link";

const Paket = ({data}) => {
    return(
        <div className="container col py-3">
            {
                data.map((pkt,idx) => (
                    <div className="row featurette col py-3">
                        <div key={idx}>
                            <h2 className="featurette-heading text-center col py-3">{pkt.id}. {pkt.nama}</h2>
                            <div className="text-center col py-3">
                                <img src={pkt.foto} style={{width:"400x", height: "300px"}}></img>
                            </div>
                            <h3 className="text-center col py-3">Rp. {pkt.harga}</h3 >
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Paket