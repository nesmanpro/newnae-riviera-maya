import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../assets/logo/logoLight.svg'
import { Link as NavScroll } from 'react-scroll'


export const NavBar = () => {

    const location = useLocation();

    const isActiveDepartamentos = location.pathname === '/';

    return (
        <section className='flex justify-between items-center pt-5'>
            <nav>
                <Link to="/">
                    <img className='h-16 hover:scale-110 transition ease-in delay-50' src={Logo} alt="Logo Nae Riviera Maya" />
                </Link>

            </nav>
            <nav >
                <ul className='flex gap-5 font-sans font-bold text-arenaClaro'>
                    <li className='navlink'>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        isActiveDepartamentos &&
                        <li className='navlink cursor-pointer'>

                            <NavScroll
                                to="ItemList"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                            >
                                Departments
                            </NavScroll>
                        </li>
                    }
                    <li className='navlink'>
                        <Link to="/contact">Contact</Link></li>

                </ul>
            </nav>


        </section >
    )
}
