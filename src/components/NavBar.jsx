import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo/logoLight.svg';
import LogoDark from '../assets/logo/logoDark.svg';
import { Link as NavScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';


const esMobile = window.innerWidth <= 640;

export const NavBar = () => {

    const location = useLocation();
    const isDark = location.pathname === '/';
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('lng', newLanguage);
    };

    return (
        <section className='flex justify-between items-center pt-5'>
            {esMobile ?

                <nav>
                    <Link to="/">
                        <img className='h-10 sm:h-16 hover:scale-110 transition ease-in delay-50' src={Logo} alt="Logo Nae Riviera Maya" />
                    </Link>
                </nav>
                :

                <nav>
                    <Link to="/">
                        <img className='h-10 sm:h-16 md:h-24  hover:scale-110 transition ease-in delay-50' src={LogoDark} alt="Logo Nae Riviera Maya" />
                    </Link>
                </nav>

            }


            <nav>
                {isDark ?
                    <ul className='drop-shadow-md flex text-xs sm:text-base gap-2 sm:gap-5 font-sans font-bold  text-arenaClaro'>
                        <li className='navlink cursor-pointer'>
                            <NavScroll
                                to="ItemList"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={1000}
                            >
                                {t('navbar.dep')}
                            </NavScroll>
                        </li>
                        <li className='navlink'>
                            <Link to="/nosotros">{t('navbar.us')}</Link>
                        </li>
                        <li className='navlink'>
                            <Link to="/contact">{t('navbar.cont')}</Link>
                        </li>
                        <li>
                            <a href={location.pathname}>
                                <div
                                    type='button'
                                    onClick={handleChangeLanguage}
                                    className='navlink cursor-pointer'>
                                    {i18n.language === 'en' ? 'ES' : 'EN'}
                                </div>
                            </a>
                        </li>
                    </ul>
                    :
                    <ul className='drop-shadow-md flex text-xs sm:text-base gap-2 sm:gap-5 font-sans font-bold text-arenaClaro'>
                        <li className='navlinkDark'>
                            <Link to="/">{t('navbar.dep')}</Link>
                        </li>
                        <li className='navlinkDark'>
                            <Link to="/nosotros">{t('navbar.us')}</Link>
                        </li>
                        <li className='navlinkDark'>
                            <Link to="/contact">{t('navbar.cont')}</Link>
                        </li>
                        <li>
                            <Link to={location.pathname}>
                                <div
                                    type='button'
                                    onClick={handleChangeLanguage}
                                    className='navlink cursor-pointer'>
                                    {i18n.language === 'en' ? 'ES' : 'EN'}
                                </div>
                            </Link>
                        </li>
                    </ul>
                }

            </nav>


        </section >
    )
}
