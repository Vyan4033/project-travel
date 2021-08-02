import Link from 'next/link'
const header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">
                        King Of Travel
                    </span>
                </a>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <Link href="/user/Home">
                        <li>
                            <a className="nav-link px-2 link-secondary">
                                Home
                            </a>
                        </li>
                    </Link>
                    <Link href="/user/DataWisata">
                        <li>
                            <a className="nav-link px-2 link-dark">
                                Paket Wisata
                            </a>
                        </li>
                    </Link>
                    <Link href="/Pemesanan">
                        <li>
                            <a className="nav-link px-2 link-dark">
                                Pemesanan
                            </a>
                        </li>
                    </Link>
                    <Link href="/admin/DataPaket">
                        <li>
                            <a className="nav-link px-2 link-dark">
                                Admin
                            </a>
                        </li>
                    </Link>
                </ul> 
            </header>
            
        </div>            
    )
}

export default header;