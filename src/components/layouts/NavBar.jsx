import { Link, useLocation } from 'react-router-dom'
import { Link as NavScroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { useI18n } from '../../i18n/useI18n'

// assets
import LogoLight from '../../assets/logo/logoLight.svg'
import LogoDark from '../../assets/logo/logoDark.svg'

export const NavBar = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const { t } = useTranslation()
    const { currentLanguage, changeLanguage } = useI18n()

    const isMobile = window.innerWidth <= 640
    const logoSrc = isMobile || isHome ? LogoLight : LogoDark

    const navClass = `
    drop-shadow-md flex text-xs sm:text-base gap-2 sm:gap-5
    font-sans font-bold cursor-pointer
    ${isHome ? 'text-arenaClaro' : 'text-azulOscuro'}
  `

    const linkClass = isHome ? 'navlink' : 'navlinkDark'

    const handleChangeLanguage = () => {
        changeLanguage(currentLanguage === 'en' ? 'es' : 'en')
    }

    return (
        <section className="flex justify-between items-center pt-5">

            {/* Logo */}
            <nav>
                <Link to="/">
                    <img
                        src={logoSrc}
                        alt="Logo Nae Riviera Maya"
                        className="h-10 sm:h-16 md:h-24 hover:scale-110 transition ease-in delay-50 [will-change:transform] "
                    />
                </Link>
            </nav>

            {/* Links */}
            <nav>
                <ul className={navClass}>

                    <li className={linkClass}>
                        {isHome ? (
                            <NavScroll
                                to="ItemList"
                                spy
                                smooth
                                offset={-150}
                                duration={1000}
                            >
                                {t('navbar.dep')}
                            </NavScroll>
                        ) : (
                            <Link to="/">{t('navbar.dep')}</Link>
                        )}
                    </li>

                    <li className={linkClass}>
                        <Link to="/nosotros">{t('navbar.us')}</Link>
                    </li>

                    <li className={linkClass}>
                        <Link to="/contact">{t('navbar.cont')}</Link>
                    </li>

                    <li className="cursor-pointer" onClick={handleChangeLanguage}>
                        {currentLanguage === 'en' ? 'ES' : 'EN'}
                    </li>

                </ul>
            </nav>
        </section>
    )
}
