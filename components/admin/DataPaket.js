//@ts-check

import { useDataWisata } from '../../lib/swr-fetch'
import Link from 'next/link'
import { mutate } from 'swr';
import Router from 'next/router'

const DataWisata = () => {
    const { data, error } = useDataWisata();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }
    console.log(data)
    async function deletePaket(id) {
        
        let res = await fetch(`/api/hapusPaket?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapusPaket')
        alert('Data telah terhapus')
        Router.push('/admin/DataPaket')
    }

    return (
        <div className="container w-75 mx-auto py-4">
            <h3 className="font-bold text-center">Data Paket</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Nama</th>
                        <th className="text-center">Harga</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((pkt, idx) => (
                            <tr key={idx}>
                                <td>
                                    {pkt.id}
                                </td>
                                <td>
                                    {pkt.nama}
                                </td>
                                <td>
                                    {pkt.harga}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link href={`/admin/updatePaket?
                                        &id=${pkt.id}
                                        &nama=${pkt.nama}
                                        &harga=${pkt.harga}`}
                                        >
                                            <button className = "btn btn-primary">Edit</button>
                                        </Link>
                                        <button
                                            className = "btn btn-danger"
                                            value={pkt.id}
                                            onClick={(e) => deletePaket(e.target.value)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center">
                <Link href="/admin/create">
                    <a className="btn btn-primary">Tambah Data</a>
                </Link>
            </div>
        </div>
    );
}

export default DataWisata;