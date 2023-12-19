import { GoogleMap, useLoadScript } from '@react-google-maps/api';

export const Contact = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    })


    return (
        <>
            <div className='flex justify-center mt-20 sm:mt-32 mb-20 min-h-[22vh]'>
                <main className='grid grid-cols-1 sm:grid-cols-2  xl:max-w-5xl'>
                    <section className='flex flex-col justify-center'>
                        <div className='md:px-16 px-6  pb-20 sm:pb-2'>

                            <div className="flex flex-col ">
                                <h1 className=" text-azulOscuro leading-none tracking-wide text-3xl md:text-4xl lg:text-5xl sm:mb-2 mb-10">¿Cómo hacer una reserva?</h1>
                            </div>
                            <div>
                                <p className="text-azulOscuro  text-md">La mejor manera de hacer una reserva es ponerte en contacto directamente con nuestro agente. Llamando a nuestras oficinas te proporcionaremos una atencion personalizada, brindandote el mejor servicio y que  más se adecúe a tus necesidades, sin que tu bolsillo salga perjudicado.</p>
                            </div>

                        </div>
                    </section>

                    <section className="flex flex-col items-start justify-center px-6 sm:px-0 ml-0 sm:ml-20">



                        <h1 className=" text-azulOscuro tracking-wide text-3xl md:text-4xl lg:text-5xl sm:mb-2 mb-10">Contacto: </h1>

                        <div className='flex flex-col gap-6  justify-center'>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-azulClaro" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="text-azulOscuro">+34 634 561 805</p>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-azulClaro" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <p className="text-azulOscuro">naerivieramaya@gmail.com</p>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-azulClaro" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

                                </svg>
                                <p className="text-[#023047]">Flamingo 1,
                                    Playa del Carmen - 77710</p>
                            </div>

                        </div>

                    </section>
                </main>
            </div>
            <div className='h-96 relative bottom-[-32px] z-20'>
                {isLoaded ? <GoogleMap center={{ lat: 20.634028, lng: -87.076671 }} zoom={15} mapContainerStyle={{
                    width: '100%',
                    height: '100%'
                }}>

                </GoogleMap>
                    : null}
            </div>
        </>


    )
}
