import Link from "next/link";

const jumbo = (props) => {
    return(
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.judul}</h1>
                <p className="col-md-8 fs-4">{props.isi}</p>
            </div>
            <div className="text-center">
                <Link href="/user/DataWisata">
                    <button type="submit" className="btn btn-primary">Lanjutkan</button>
                </Link>
            </div>
        </div>
    )
}

export default jumbo;