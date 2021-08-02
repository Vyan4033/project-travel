import Jumbotron from '../../components/Jumbotron'
import LayoutUser from '../../components/user/LayoutUser'

const Home = () => {
  let jumbotron = {judul : "Travel Agency", 
                    isi:"Kami sebuah usaha perjalanan wisata di Kota Banyuwangi harapannya dengan hadirnya usaha perjalanan wisata ini dapat menjadi solusi anda untuk datang dan berwisata di Banyuwangi, karena wisata alam dan budaya Banyuwangi akan membuat anda benar-benar terkesan"}

  return (
    <div className="container">
      <LayoutUser>
        <Jumbotron judul = {jumbotron.judul} isi = {jumbotron.isi}/>
      </LayoutUser>
    </div>
  )
}


export default Home;