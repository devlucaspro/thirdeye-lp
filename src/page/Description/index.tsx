import './description.scss';

const Description = () => {
  return (
    <div className='description-container container'>
      <img src="./assets/mockup-phone2.png" alt="Mockup phone login screen" />
      <div className='description-text'>
        <p className='orange p-feature'>Feature #1</p>
        <h2>Ease of use</h2>
        <p className='p-description'>To get started using our app, you can install it through Play Store or by our site itself.</p>
        <div className='icons-container'>
          <div className='div-icon'>
            <i className="fa-solid fa-book-open fa-2x"></i>
            <div>
              <p>Super Useful!</p>
              <p>100% TRUSTED</p>
            </div>
          </div>
          <div className='div-icon'>
            <i className="fa-solid fa-bolt fa-2x"></i>
            <div>
              <p>Servers every time!</p>
              <p>100% TRUSTED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description;