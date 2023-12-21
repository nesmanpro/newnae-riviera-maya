import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

export const BannerBot = () => {

    const { t } = useTranslation();

    return (
        <section className='grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 items-center h-full overflow-hidden text-azulOscuro bg-arenaClaro rounded-tr-3xl rounded-tl-3xl relative bottom-[-22px] z-20'>

            <div className='h-full bg-[url("../public/img/apartments/kumaru01/3.jpg")] bg-cover bg-center'>

            </div>
            <div className='p-10 pb-20 xl:pr-[200px]'>
                <h1 className='text-2xl leading-tight sm:text-5xl'>
                    {t('banda2.title')}
                </h1>
                <p className='text-xs sm:text-base pt-4 leading-tight'>
                    {t('banda2.parag')}
                </p>
                <div className='pt-5'>
                    <Link
                        to="/contact"
                        className="rounded-full bg-azulOscuro px-6 py-2.5 text-xs sm:text-sm font-normal sm:font-semibold text-arenaClaro border-2 border-azulOscuro hover:text-azulOscuro shadow-sm hover:bg-transparent transition hover:duration-500 ease-in-out"
                    >
                        {t('banda2.btn')}
                    </Link>
                </div>
            </div>
        </section>
    )
}
