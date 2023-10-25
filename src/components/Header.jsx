import { Link } from 'react-router-dom'
import video from '../assets/images/wave.webm'
import { NavBar } from './NavBar'




export const Header = () => {
    return (
        <>
            <div className="">
                <div className=" relative isolate overflow-hidden lg:flex justify-center">

                    <video className='absolute object-cover overflow-hidden -z-20 w-full h-screen lg:h-full' src={video} autoPlay loop muted alt="Caribean sea" />
                    <main className='flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl'>

                        <NavBar />
                        <div className="text-center lg:flex-auto lg:py-32 lg:text-left mb-20 lg:mb-0">
                            <h1 className="pt-10 text-3xl font-bold tracking-tight text-[#FFF8EA] text-center sm:text-7xl">
                                Estamos trabajando en nuestra web

                            </h1>
                            <p className="mt-6 text-lg leading-tight text-[#FFF8EA]">
                                Pronto estara lista nuestra nueva web. Mientras tanto, puedes estar informado de todas nuestras novedades en nuestras redes sociales, encontrarás los links más abajo.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/"
                                    className="rounded-full bg-[#FFF8EA] px-6 py-2.5 text-sm font-semibold text-[#023047] border-2 border-[#FFF8EA] hover:text-[#FFF8EA] shadow-sm hover:bg-transparent"
                                >
                                    Próximamente
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
