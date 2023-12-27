import { Link } from 'react-scroll'
import img1 from '../assets/images/kumaru.webp'
import { useTranslation } from 'react-i18next';

export const Details = () => {

    const { t } = useTranslation();

    return (
        <div>
            <main className="flex justify-center px-5 py-10 sm:p-16">
                <section className="overflow-hidden grid grid-cols-2 justify-center items-center rounded-3xl lg:max-w-4xl  bg-azulClaro">

                    <img className="w-full object-cover max-full sm:max-h-unit-5xl lg:max-h-unit-6xl" src={img1} alt="Rent your apartment in Riviera Maya" />

                    <div className='md:px-16 px-6 pb-2'>
                        <h2 className='text-arenaClaro leading-tight tracking-wide text-xl xs:text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-10'>
                            {t('details')}
                        </h2>

                        <Link to='ItemList'
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={1000}
                            className=" text-arenaClaro  font-semibold cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                        </Link>

                    </div>
                </section>


            </main>
        </div >
    )
}
