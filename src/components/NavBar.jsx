import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo/logoLight.svg'
import { Link as NavScroll } from 'react-scroll'


export const NavBar = () => {

    const location = useLocation();
    const isDark = location.pathname === '/';

    return (
        <section className='flex justify-between items-center pt-5'>
            <nav>
                <Link to="/">
                    <img className='h-16 hover:scale-110 transition ease-in delay-50' src={Logo} alt="Logo Nae Riviera Maya" />
                </Link>

            </nav>
            <nav >
                {isDark ?
                    <ul className='flex gap-5 font-sans font-bold text-arenaClaro'>
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
                    <ul className='flex gap-5 font-sans font-bold text-arenaClaro'>
                        <li className='navlinkDark'>
                            <Link to="/">Nosotros</Link>
                        </li>
                        <li className='navlinkDark cursor-pointer'>

                            <li className='navlinkDark'>
                                <Link to="/">Apartamentos</Link>
                            </li>
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
