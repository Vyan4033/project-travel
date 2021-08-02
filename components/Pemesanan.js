const pemesanan = () => {
    return(
        <div>
            <div className="text-center">
                <h2>Form Pemesanan Trip Wisata</h2>
            </div>
            <div className="mb-3 container">
                <input type="text" className="form-control" id="Nama" placeholder="Nama Lengkap"/>
                <input type="text" className="form-control" id="Alamat" placeholder="Alamat"/>
                <input type="text" className="form-control" id="Email" placeholder="Email"/>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Pilihan Trip</option>
                    <option value="Trip Kawah Ijen">Trip Kawah Ijen</option>
                    <option value="Trip De Djawatan – Agro Buah Naga – Pulau Merah"> Trip De Djawatan – Agro Buah Naga – Pulau Merah</option>
                    <option value="Trip Menjangan - Tabuhan">Trip Menjangan - Tabuhan</option>
                    <option value="Trip Kawah Ijen - TN Baluran">Trip Kawah Ijen - TN Baluran</option>
                </select>
            </div>
            <div className="container">
                <h4>Metode Pembayaran</h4>
                <select className="form-select" aria-label="Default select example">
                    <option selected>--Pilih Metode Pembayaran--</option>
                    <option value="Indomaret">Indomaret</option>
                    <option value="Alfamart">Alfamart</option>
                    <option value="Gopay">Gopay</option>
                </select>
            </div>
            <div className="mb-3 container text-center">
                <button type="button" className="btn btn-primary">Bayar</button>
            </div>
        </div>
    )
}

export default pemesanan;