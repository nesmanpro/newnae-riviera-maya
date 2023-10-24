import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logoLight.svg'

export const NavBar = () => {
    return (
        <section className='flex justify-between items-center pt-5'>
            <nav>
                <Link to="/">
                    <img className='h-16' src={Logo} alt="Logo Nae Riviera Maya" />
                </Link>

            </nav>
            <nav >
                <ul className='flex gap-5 text-neutral-50 font-sans font-bold text-[#FFF8EA]'>
                    <li className='border-b-3 border-transparent hover:border-b-3 hover:border-cyan-600'>
                        <a href="#">Home</a></li>
                    <li className='border-b-3 border-transparent hover:border-b-3 hover:border-cyan-600'>
                        <a href="#">Departments</a></li>
                    <li className='border-b-3 border-transparent hover:border-b-3 hover:border-cyan-600'>
                        <a href="#">Contact</a></li>
                </ul>
            </nav>


        </section >
    )
}
