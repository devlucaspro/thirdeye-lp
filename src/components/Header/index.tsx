import Btn from '../Btn'
import './header.scss'

const Header = () => {

  function handleMenu() {
    const button = document.querySelector('.menu-button') as HTMLButtonElement; //type assertion
    button.classList.toggle('active-button');

    const menu = document.querySelector('.menu') as HTMLUListElement;
    menu.classList.toggle('active-menu');
  }

  return (
    <header className='container'>
      <img src="./assets/logo.png" alt="ThirdEye logo" width={170} />
      <div className='menu'>
        <ul>
          <li><a href="">Resources <i className="fa-solid fa-chevron-down"></i></a></li>
          <li><a href="">About <i className="fa-solid fa-chevron-down"></i></a></li>
          <li><a href="">Documentation</a></li>
          <Btn children="Login" hrefProp="https://www.instagram.com/ribeiroo.dev" />
        </ul>
      </div>
      <Btn children="Login" hrefProp="https://www.instagram.com/ribeiroo.dev" />
      <button onClick={handleMenu} className='menu-button'>Menu <span className='hamb-icon'></span></button>
      <span className='gradient-header'></span>
    </header>
  )
}

export default Header;