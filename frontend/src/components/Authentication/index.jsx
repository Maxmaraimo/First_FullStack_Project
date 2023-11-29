import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import styles from './styles/index.scss'

import Apple from '../../assets/icons/Apple.png';
import Google from '../../assets/icons/Google.png';
import Facebook from '../../assets/icons/Facebook.png';
import Steam from '../../assets/icons/Steam.png';

function Authentication(props) {
    let [registered, setRegistered] = useState(true);

    let registerBB = { "boxShadow": "inset calc(((577px / 100) * 70) / 2) 0 #FAC704" }
    let loginBB = { "boxShadow": "inset calc(((-577px / 100) * 70) / 2) 0 #FAC704" }

    return (
        <main style={styles}>
            <section id='authentication-section' >
                <div>
                    <div className='action-btns'>
                        <button onClick={() => { setRegistered(true) }}>ВОЙТИ</button>
                        <button onClick={() => { setRegistered(false) }}>СОЗДАТЬ АККАУНТ</button>
                        <span className='border-bottom' style={registered ? registerBB : loginBB}></span>
                    </div>

                    <div className={registered ? 'visible' : 'invisible'}>
                        <Login />
                    </div>
                    <div className={registered ? 'invisible' : 'visible'}>
                        <Register />
                    </div>

                    <div className='globals'>
                        <div>
                            <p></p>
                            <p>Или войдите через</p>
                            <p></p>
                        </div>
                        <div>
                            <span className='steam'>
                                <img src={Steam} alt="Steam" />
                            </span>
                            <span className='apple'>
                                <img src={Apple} alt="Apple" />
                            </span>
                            <span className='google'>
                                <img src={Google} alt="Google" />
                            </span>
                            <span className='facebook'>
                                <img src={Facebook} alt="Facebook" />
                            </span>
                        </div>
                    </div>

                    <div className='footer'>
                        Создавая аккаунт в "Ozodbek Company", вы соглашаетесь с нашими 
                        <a href='#'>Условиями использования</a> и <a href='#'>Политикой конфиденциальности</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Authentication;