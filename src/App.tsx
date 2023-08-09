import './app.scss'
import Header from './components/Header';
import Home from './page/Home';
import Bar from './components/Bar-header';
import Carousel from './page/Carousel';
import Description from './page/Description';
import Product from './page/Product';
import Animation from './page/Animation';
import Contact from './page/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='gradient-header'></div>
      <Header />
      <Bar inner='Be the first 100 users to use ThirdEye' />
      <Home />
      <Carousel showTitle={true} />
      <Description />
      <Product />
      <Carousel showTitle={false} />
      <Animation />
      <Contact />
      <Footer />
    </>
  )
}

export default App;