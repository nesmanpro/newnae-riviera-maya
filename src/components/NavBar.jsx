import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo/logoLight.svg'
import LogoDark from '../assets/logo/logoDark.svg'
import { Link as NavScroll } from 'react-scroll'

const esMobile = window.innerWidth <= 640;

export const NavBar = () => {

    const location = useLocation();
    const isDark = location.pathname === '/';

    return (
        <section className='flex justify-between items-center pt-5'>
            {esMobile ?

                <nav>
                    <Link to="/">
                        <img className='h-10 sm:h-16 hover:scale-110 transition ease-in delay-50' src={Logo} alt="Logo Nae Riviera Maya" />
                    </Link>
                </nav>
                :
                isDark ? <nav>
                    <Link to="/">
                        <img className='h-10 sm:h-16 hover:scale-110 transition ease-in delay-50' src={LogoDark} alt="Logo Nae Riviera Maya" />
                    </Link>
                </nav>
                    :
                    <nav>
                        <Link to="/">
                            <img className='h-10 sm:h-16 hover:scale-110 transition ease-in delay-50' src={Logo} alt="Logo Nae Riviera Maya" />
                        </Link>
                    </nav>

            }


            <nav>
                {isDark ?
                    <ul className='flex text-xs sm:text-base gap-2 sm:gap-5 font-sans font-bold sm:text-azulOscuro text-arenaClaro'>
                        <li className='navlink'>
                            <Link to="/">Nosotros</Link>
                        </li>
                        <li className='navlink cursor-pointer'>
                            <NavScroll
                                to="ItemList"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={1000}
                            >
                                Departamentos
                            </NavScroll>
                        </li>
                        <li className='navlink'>
                            <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                    :
                    <ul className='flex text-xs sm:text-base gap-2 sm:gap-5 font-sans font-bold text-arenaClaro'>
                        <li className='navlinkDark'>
                            <Link to="/">Nosotros</Link>
                        </li>


                        <li className='navlinkDark'>
                            <Link to="/">Departamentos</Link>
                        </li>

                        <li className='navlinkDark'>
                            <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                }

            </nav>


        </section >
    )
}
