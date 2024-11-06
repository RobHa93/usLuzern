import '../App.css'
import Header from '../components/MainHeader.jsx'
import Carousel from '../components/Carousel.jsx'
import ButtonShop from '../components/ButtonShop.jsx'
import Description from '../components/descriptionUsLuzern.jsx'
import Zielgruppe from '../components/Zielgruppen.jsx'
import Benefits from '../components/benefits.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'


function Home() {
  
  return (
<div>
  <Header />
  <Carousel />
  <ButtonShop />
  <Description />
  <Zielgruppe />
  <Benefits />
  <Newsletter />
  <Footer />
</div>
  )
}

export default Home
