// import Studyts from './page/Studyts';

/*
1- Made with S2 by Lucas Ribeiro
2- Motion
3- SEO
*/

import './app.scss'
import Header from './components/Header';
import Home from './page/Home';
import Bar from './components/Bar-header';
import Carousel from './page/Carousel';
import Description from './page/Description';

const App = () => {
  return (
    <>
        {/* <Studyts 
          title='Title' 
          description='Description' 
          img='./assets/logo.png' 
          hasButton={true}
        /> */}
      <Header />
      <Bar inner='Be the first 100 users to use ThirdEye' />
      <Home />
      <Carousel />
      <Description />
    </>
  )
}

export default App;