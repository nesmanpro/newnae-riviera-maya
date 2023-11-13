import { Link } from 'react-router-dom'
import { Link as Hash } from 'react-scroll'
import Logo from '../assets/logo/logoLight.svg'

export const NavBar = () => {
    return (
        <section className='flex justify-between items-center pt-5'>
            <nav>
                <Link to="/">
                    <img className='h-16 hover:scale-110 transition ease-in delay-50' src={Logo} alt="Logo Nae Riviera Maya" />
                </Link>

            </nav>
            <nav >
                {/* border-b-3 border-transparent hover:border-b-3 hover:border-azulOscuro transition hover:duration-1000 ease-in-out  */}
                <ul className='flex gap-5 font-sans font-bold text-arenaClaro'>
                    <li className='navlink'>
                        <Link to="/">Home</Link></li>
                    <li className='navlink cursor-pointer'>
                        <Hash to="ItemList" spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}>Departments</Hash></li>
                    <li className='navlink'>
                        <Link to="/contact">Contact</Link></li>

                </ul>
            </nav>


        </section >
    )
}
