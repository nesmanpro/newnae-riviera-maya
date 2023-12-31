import { useLocation } from 'react-router-dom'
import video from '../assets/images/wave.webm'
import img from '../assets/images/mobilebg.jpg'
import { NavBar } from './NavBar'
import { Link as NavScroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const esMobile = window.innerWidth <= 640;

export const Header = () => {

    const { t } = useTranslation();

    const location = useLocation();

    const isActiveDepartamentos = location.pathname === '/';



    return (
        <>
            <div className="">

                {isActiveDepartamentos ?
                    <div className=" relative isolate overflow-hidden lg:flex justify-center ">
                        {esMobile ? <img className='absolute object-cover overflow-hidden -z-20 w-full h-screen lg:h-full' src={img} alt="" />
                            : <video className='absolute object-cover overflow-hidden -z-20 w-full h-full' src={video} autoPlay loop muted alt="Caribbean sea" />
                        }
                        <main className='flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl'>

                            <NavBar />
                            <div className="text-center lg:flex-auto lg:py-16 lg:text-left mb-5">
                                {esMobile ? <div>
                                    <h1 className="drop-shadow-md  pt-10 text-3xl font-bold tracking-normal text-arenaClaro text-center sm:text-7xl">
                                        {t('head.title')}
                                    </h1>
                                    <p className="drop-shadow-md mt-6 text-lg  leading-tight text-arenaClaro">
                                        {t('head.description')}
                                    </p>
                                </div>
                                    :
                                    <div>
                                        <h1 className="drop-shadow-md  pt-10 text-3xl sm:text-6xl font-bold tracking-normal text-arenaClaro text-center lg:text-7xl">
                                            {t('head.title')}
                                        </h1>
                                        <p className="drop-shadow-md mt-6 text-lg  leading-tight text-arenaClaro">
                                            {t('head.description')}
                                        </p>
                                    </div>
                                }


                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <NavScroll
                                        className="cursor-pointer drop-shadow-md rounded-full hover:bg-arenaClaro px-6 py-2.5 text-sm font-semibold hover:text-azulOscuro border-2 border-arenaClaro text-arenaClaro shadow-sm bg-transparent transition hover:duration-500 ease-in-out"
                                        to="ItemList"
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}

                                    >
                                        {t('head.button')}
                                    </NavScroll>
                                </div>

                            </div>
                        </main>
                    </div>
                    : <div className=" relative isolate overflow-hidden lg:flex justify-center bg-azulClaro h-32 sm:h-56 w-full">

                        <main className='flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl w-full'>
                            <NavBar />
                        </main>
                    </div>
                }


            </div>
        </>
    )
}
