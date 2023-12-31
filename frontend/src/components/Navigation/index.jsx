import { Outlet, Link } from 'react-router-dom'
import styles from './style.scss'
import emailVector from '../../assets/icons/email-vector.png'
import phoneVector from '../../assets/icons/phone-vector.png'
import bottomVector from '../../assets/icons/bottom-vector.png';
import profileVector from '../../assets/icons/profile-vector.png';
import wishlistVector from '../../assets/icons/wishlist-vector.png';
import cardVector from '../../assets/icons/card-vector.png';
import searchVector from '../../assets/icons/search-vector.png';
import Footer from './Footer'

import { isLoggedIn } from '../../conf/common';


export default function Navigation() {
    return (
        <main style={styles}>
            <nav className='main-navbar'>
                <div className="upper-nav">
                    <div className="left-nav">
                        <a href="mailto:ozodbekmahmaraimov16@gmail.com">
                            <img src={emailVector} width="15" height="15" alt="" />
                            ozodbekmahmaraimov16@gmail.com
                        </a>
                        <span>
                            <img src={phoneVector} width="15" height="15" alt="" />
                            (+99890) 4772809
                        </span>
                    </div>
                    <div className="right-nav">
                        <span className='nav-link'>
                            <Link to={'/#'}>
                                English
                                <img src={bottomVector} alt="Vector" width={10} height={5} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                            <Link to={'/#'}>
                                USD
                                <img src={bottomVector} alt="Vector" width={10} height={5} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                        {
                            isLoggedIn()
                                ?
                                (<Link to={"/profile"}>
                                    Profile
                                    <img src={profileVector} alt="Vector" width={15} height={15} />
                                </Link>)
                                :
                                (<Link to={"/auth"}>
                                    Login
                                    <img src={profileVector} alt="Vector" width={15} height={15} />
                                </Link>)
                        }
                        </span>
                        <span className='nav-link'>
                            <Link to={'/wishlist'}>
                                Wishlist
                                <img src={wishlistVector} alt="Vector" width={15} height={15} />
                            </Link>
                        </span>
                        <span className='nav-link'>
                            <Link to={'/#'}>
                                <img src={cardVector} alt="Vector" width={20} height={20} />
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="main-nav">
                    <div className="main-nav-wrapper">
                        <h3>
                            <Link to={'/#'}>
                                Hekto
                            </Link>
                        </h3>
                        <div className="main-nav-links">
                            <span className='nav-link'>
                                <Link to={'/#'}>
                                    Pages
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={'/products'}>
                                    Products
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={'/#'}>
                                    Blog
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={'/#'}>
                                    Shop
                                </Link>
                            </span>
                            <span className='nav-link'>
                                <Link to={'/#'}>
                                    Contact
                                </Link>
                            </span>
                        </div>
                        <div className="main-nav-searchbar">
                            <input type="search" />
                            <button>
                                <img src={searchVector}
                                    alt="Search" width={25} height={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />

            <footer>
                <Footer />
            </footer>
        </main>
    )
}
