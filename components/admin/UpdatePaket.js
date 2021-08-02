//@ts-check

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';


const updatePaket = () => {
    const [_id, setId] = useState('');
    const [_nama, setNama] = useState('');
    const [_harga, setHarga] = useState('');
    const [_foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');


    const router = useRouter();
    const { id, nama, harga } = router.query;

    useEffect(() => {
        if (typeof id == 'string') {
            setId(id);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof harga == 'string') {
            setHarga(harga);
        }
    }, [id, nama, harga, id])

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function () {
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)

    }
    
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/updatePaket', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id : _id,
                    nama : _nama,
                    harga : _harga,
                    foto : _foto,
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

            alert("Update Data Sukses")
            Router.push('/admin/DataPaket')

        } catch (e) {
            throw Error(e.message)

        }

    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h2 className="text-center">Update Paket Wisata</h2>
                    <div className="text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={_foto} alt="Pilih Foto"
                                style={{ background: "gray", width: "100px", height: "100px" }} />
                        </label>
                        <input
                            id="uploadGambar"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />

                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "id"
                            type = "text"
                            placeholder = "ID"
                            value = {_id}
                            onChange = {(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "nama"
                            type = "text"
                            placeholder = "Nama Paket"
                            value = {_nama}
                            onChange = {(e) => setNama(e.target.value)}
                        />
                        <label htmlFor="nama">Nama Paket</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "harga"
                            type = "text"
                            placeholder = "Harga"
                            value = {_harga}
                            onChange = {(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Update Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default updatePaket;