import { Outlet, Link } from 'react-router-dom'
import styles from './style.scss'
import emailVector from "../../assets/icons/email-vector"
import phoneVector from "../../assets/icons/phone-vector"


export default function Navigation() {
    return (
        <div className='main-navbar' style={styles}>
            <div className='upper-nav'>
                <div className='left-nav'>
                    <a href="mailto:ozodbekmahmaraimov16@gmail.com">
                        <img src={emailVector} width="15" height="15" alt='' />
                        ozodbekmahmaraimov16@gmail.com
                    </a>
                    <span>
                        <img src={phoneVector} width="15" height="15" alt='' />
                        (+99890) 4772809
                    </span>
                </div>
                <div className='right-nav'></div>

            </div>
        </div>
    )
}