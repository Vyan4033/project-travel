//@ts-check

import { useState } from "react";
import Link from 'next/link'
const Create = () => {

    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('')

    const onSelectImage = (e) => {
        if(!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function() {
            setSelectedFile(_file)
            setFoto(reader.result)
        }
        reader.readAsDataURL(_file)
    }
    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/createPaket", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    nama,
                    harga,
                    foto,
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h2 className="text-center">Tambah Paket Wisata</h2>
                    <div className="text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={foto} alt="Pilih Foto"
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
                            value = {id}
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
                            value = {nama}
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
                            value = {harga}
                            onChange = {(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Tambah
                        </button>
                        <Link href="/admin/DataPaket">
                            <a className="btn btn-primary">Kembali</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
