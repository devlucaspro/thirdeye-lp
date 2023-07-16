import './home.scss';

const Home = () => {
  return (
    <div className='home-container container'>
      <div className="home-texts">
        <p className='orange p-coming'>Coming soon...</p>
        <h1>The future of web3 payments</h1>
        <p className='p-middle'>ThirdEye is a secure 1-click checkout that allows you to use your cripto across different blockchains in just seconds, let's try it out.</p>
        <h3>Sign in to get notified when it's ready</h3>
        <div className="form-div">
          <input type="text" placeholder="Enter your email" />
          <button type="submit">Notify me</button>
        </div>
      </div>
      <img
        className="home-photo" 
        loading="lazy" 
        src="./assets/mockup-phone.png" 
        alt="Mockup Phone" 
      />
    </div>
  )
}

export default Home;