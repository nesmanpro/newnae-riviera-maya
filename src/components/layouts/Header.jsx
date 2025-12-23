import { useLocation } from 'react-router-dom'
import { Link as NavScroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../../hooks/useIsMobile'


import video from '../../assets/images/wave.webm'
import img from '../../assets/images/mobilebg.jpg'
import { NavBar } from './NavBar'

export const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'


    if (isHome) return <HomeHeader />

    return (
        <header>
            <div className={'relative isolate overflow-hidden lg:flex justify-center bg-azulClaro h-32 sm:h-56 w-full'}>
                <main className="flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl w-full">
                    <NavBar />
                </main>
            </div>
        </header>
    )
}



const HomeHeader = () => {
    const { t } = useTranslation()
    const isMobile = useIsMobile();

    // Background dinámico
    const background = isMobile
        ? { type: 'image', src: img }
        : { type: 'video', src: video }


    return (
        <header>
            <div className={'relative isolate overflow-hidden lg:flex justify-center'}>

                {background && (
                    background.type === 'image' ? (
                        <img
                            src={background.src}
                            alt=""
                            className="absolute -z-20 w-full h-screen lg:h-full object-cover"
                        />
                    ) : (
                        <video
                            src={background.src}
                            autoPlay
                            loop
                            muted
                            className="absolute -z-20 w-full h-full object-cover"
                        />
                    )
                )}

                <main className="flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl w-full">
                    <NavBar />


                    <div className="text-center lg:flex-auto lg:py-16 lg:text-left mb-5">

                        <h1 className="drop-shadow-md pt-10 text-3xl sm:text-6xl lg:text-7xl font-bold tracking-normal text-arenaClaro">
                            {t('head.title')}
                        </h1>

                        <p className="drop-shadow-md mt-6 text-lg leading-tight text-arenaClaro">
                            {t('head.description')}
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <NavScroll
                                to="ItemList"
                                spy
                                smooth
                                offset={-150}
                                duration={500}
                                className="
                    cursor-pointer drop-shadow-md rounded-full
                    px-6 py-2.5 text-sm font-semibold
                    border-2 border-arenaClaro
                    text-arenaClaro bg-transparent
                    hover:bg-arenaClaro hover:text-azulOscuro
                    transition ease-in-out
                "
                            >
                                {t('head.button')}
                            </NavScroll>
                        </div>

                    </div>
                </main>
            </div>
        </header>

    )
}
