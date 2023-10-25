import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';


export const DetailsContact = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    })

    return (
        <div>
            <main className="flex justify-center px-5 py-10 sm:p-16">

                <section className="overflow-hidden grid grid-cols-2 justify-center items-center rounded-3xl lg:max-w-4xl bg-[#023047] h-72">

                    <div className='w-full h-full'>

                        {isLoaded ?
                            (<GoogleMap center={{ lat: 20.634028, lng: -87.073671 }} zoom={13} mapContainerStyle={{
                                width: '100%',
                                height: '100%'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </GoogleMap>) : null}
                    </div>

                    <div className='md:px-16 px-6 pb-2'>

                        <div className="flex flex-col ">
                            <h1 className="text-3xl text-[#FFF8EA] tracking-wide  xs:text-2xl md:text-3xl lg:text-5xl mb-2"> ¿Cómo hacer una reserva?</h1>
                        </div>
                        <div>
                            <p className="text-[#FFF8EA]">Nuestro punto fuerte es el asesoramiento personalizado, así podemos brindarte una mejor experiencia.</p>
                        </div>
                        <div>

                            <Link className=' flex justify-center w-16 my-3 bg-[#FFF8EA] text-[#023047]  px-12 py-2 rounded-full cursor-pointer' to={'https://api.whatsapp.com/send?phone=5219842323621'} target="_blank">
                                <div>
                                    <svg className="h-6" fill="currentColor" aria-hidden="true" version="1.1" id="Capa_1" viewBox="0 0 30.667 30.667"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path> </g> </g></svg>
                                </div>
                            </Link>
                        </div>

                    </div>
                </section>


            </main>
        </div >
    )
}
