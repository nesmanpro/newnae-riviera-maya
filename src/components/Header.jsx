import imagen from '../assets/images/pexels-francisco-basto-5344794.jpg'
import video from '../assets/images/vid1.mp4'


export const Header = () => {
    return (
        <>
            <div className="">
                <div className="h-screen relative isolate overflow-hidden lg:flex justify-center lg:gap-x-20 lg:px-24">

                    <video className='absolute object-cover overflow-hidden -z-20 w-full min-h-[55%]' src={video} autoPlay loop muted alt="Caribean sea" />
                    <div className="mx-auto max-w-lg text-center lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="pt-10 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">
                            Estamos trabajando en brindarte la mejor experiencia.


                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Pronto estara lista nuestra nueva web. Mientras puedes estar al tanto de todas nuestras ofertas y disponibilidad en nuestras redes sociales.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Saber más <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
