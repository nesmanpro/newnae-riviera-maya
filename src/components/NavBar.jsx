import { Link } from 'react-router-dom'
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
                <ul className='flex gap-5 font-sans font-bold text-arenaClaro'>
                    <li className='border-b-3 border-transparent hover:border-b-3 hover:border-azulOscuro transition hover:duration-1000 ease-in-out '>
                        <Link to="/">Home</Link></li>
                    <li className='border-b-3 border-transparent hover:border-b-3 hover:border-azulOscuro transition hover:duration-1000 ease-in-out'>
                        <Link to="/contact">Departments</Link></li>
                    <li className='border-b-3 border-transparent hover:border-b-3 hover:border-azulOscuro transition hover:duration-1000 ease-in-out'>
                        <Link to="/contact">Contact</Link></li>

                </ul>
            </nav>


        </section >
    )
}
