
import { DetailsContact } from './DetailsContact';

export const Contact = () => {


    return (

        <main>

            <DetailsContact />
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-10  sm:h-48 mb-20 md:mb-32 mx-auto sm:max-w-[75%] xl:max-w-6xl">
                <div className="flex flex-col items-end justify-center">
                    <h1 className="text-3xl text-[#023047] tracking-wide xs:text-2xl md:text-3xl lg:text-5xl mb-2">Contacto: </h1>
                </div>
                <div className='flex flex-col gap-6 items-start justify-center'>
                    <div className='flex gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#219EBC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-[#023047]">+34 634 561 805</p>
                    </div>
                    <div className='flex gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#219EBC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <p className="text-[#023047]">booking@naerivieramaya.com</p>
                    </div>
                    <div className='flex gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#219EBC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-[#023047]">Flamingo 1,
                            Playa del Carmen - 77710</p>
                    </div>

                </div>
            </section>

        </main>

    )
}
