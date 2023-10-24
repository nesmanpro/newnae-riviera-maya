import { Link } from 'react-router-dom'
import img1 from '../assets/images/pexels-francisco-basto-5344794.jpg'
export const Details = () => {
    return (
        <div>
            <main className="flex justify-center px-5 py-10 sm:p-16">
                <section className="overflow-hidden flex justify-center items-center rounded-3xl lg:max-w-4xl  bg-[#023047]">

                    <img className="h-44 sm:h-72  object-cover" src={img1} alt="Rent your apartment in Riviera Maya" />

                    <div className='md:px-16 px-6 pb-2'>
                        <h2 className='text-[#FFF8EA] text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-10'>
                            Como puedo reservar mi alojamiento?
                        </h2>

                        <Link
                            to="/"
                            className="rounded-full bg-[#FFF8EA] px-6 py-2.5 text-sm font-semibold text-[#023047] border-2 border-[#FFF8EA] hover:text-[#2f291d] shadow-sm hover:bg-transparent"
                        >
                            Contáctanos
                        </Link>

                    </div>
                </section>


            </main>
        </div >
    )
}
