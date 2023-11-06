import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>IamAdmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg" alt="" />
                <span>Merve</span>
            </div>
            <img src="settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}

export default Navbar