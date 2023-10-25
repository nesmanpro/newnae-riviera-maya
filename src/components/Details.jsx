import { Link } from 'react-router-dom'
import img1 from '../assets/images/30-02.png'
export const Details = () => {
    return (
        <div>
            <main className="flex justify-center px-5 py-10 sm:p-16">
                <section className="overflow-hidden grid grid-cols-2 justify-center items-center rounded-3xl lg:max-w-4xl  bg-[#023047] ">

                    <img className="w-full object-cover max-h-unit-40 sm:max-h-unit-5xl lg:max-h-unit-6xl" src={img1} alt="Rent your apartment in Riviera Maya" />

                    <div className='md:px-16 px-6 pb-2'>
                        <h2 className='text-[#FFF8EA] tracking-wide text-xl xs:text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-10'>
                            ¿Cómo puedo reservar mi alojamiento?
                        </h2>

                        <Link
                            to="/contact"
                            className="rounded-full bg-[#FFF8EA] px-2.5 py-1.5 md:px-6 md:py-2.5 text-xs sm:text-sm font-semibold text-[#023047] border-2 border-[#FFF8EA] hover:text-[#FFF8EA] shadow-sm hover:bg-transparent"
                        >
                            Contáctanos
                        </Link>

                    </div>
                </section>


            </main>
        </div >
    )
}
