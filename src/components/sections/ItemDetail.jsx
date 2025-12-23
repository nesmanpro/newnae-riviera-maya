import { useTranslation } from "react-i18next";
import { Banner } from "../layouts/Banner";
import { BannerCta } from "../layouts/BannerCta";
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { IconResolver } from '../icons/helpers/iconResolver'


export const ItemDetail = ({ item }) => {

    const firstSix = Object.keys(item.extras.text).slice(0, 6);
    const secondSix = Object.keys(item.extras.text).slice(6, 12);

    const { t } = useTranslation();

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    })

    return (
        <div>

            {/* 1ra Seccion imagen principal */}

            <div className=" w-full overflow-hidden">
                <img className="w-full bottom-[-200px]" src={item.img.img2} alt={item.subtitle} />
            </div>

            {/* 2da Seccion titulo & img */}

            <section className="grid sm:grid-cols-2">
                <div className="bg-azulOscuro p-3 sm:p-12 text-arenaClaro 5xl:pl-96 4xl:pl-72 3xl:pl-60">

                    {/* Izquierda */}

                    <div className="border-b-1 border-azulClaro pb-5">
                        <h1 className="font-bebas text-2xl sm:text-4xl md:text-6xl tracking-wide pb-5">{item.title}</h1>
                        <p className="text-xs md:text-sm lg:text-base leading-tight">{item.description.alojamiento}</p>
                    </div>

                    <div className="text-xs md:text-sm lg:text-base text-arenaclaro mt-5 grid grid-cols-2 sm:gap-2">
                        {firstSix.map((key, index) => (
                            <div className="flex gap-3 mb-2 sm:mb-5" key={index}>
                                <IconResolver
                                    name={item.extras.icon[index]}
                                    size={20}
                                    className="text-arenaClaro"
                                />
                                <h4>{item.extras.text[key]}</h4>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Derecha */}

                <div>
                    <img className="h-full w-full object-cover" src={item.img.img1} alt={item.subtitle} />
                </div>
            </section>

            {/* 3ra Seccion Sobre el departamento */}

            <div className="flex justify-center  py-12 px-8 sm:px-20">

                <div className="text-azulOscuro bg-arenaClaro lg:max-w-7xl">
                    <h2 className="w-full font-bebas text-5xl tracking-wide border-b-1 border-azulClaro pb-2">{t('deps.about1')}</h2>
                    <p className="mt-7 text-sm lg:text-base">{item.description.acerca}</p>
                </div>
            </div>

            {/* 4ta Seccion Imagenes */}

            <div className="grid sm:grid-cols-3 w-full ">
                <img className="w-full h-full object-cover" src={item.img.img3} alt={item.subtitle} />
                <img className="w-full  h-full object-cover" src={item.img.img4} alt={item.description.acerca} />
                <img className="w-full h-full object-cover" src={item.img.img5} alt={item.description.alojamiento} />
            </div>

            {/* 5ta Seccion Info y Mapa */}

            <div className="flex flex-col items-center py-12 px-8 sm:px-20">

                {/* Info */}
                <div className="">

                    <div className="grid sm:grid-cols-3 my-10 gap-10 max-w-7xl">

                        <div className="sm:col-span-2">
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-5  text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                                <h3 className="">{item.details.rooms}</h3>
                                <h3 className="hidden sm:flex">·</h3>
                                <h3 className="">{item.details.guest}</h3>
                                <h3 className="hidden sm:flex">·</h3>
                                <h3 className="">{item.details.plus}</h3>
                            </div>
                            <p className="text-sm lg:text-base">{item.description.equipamiento}</p>
                        </div>


                        <div className="">
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                                <h3 className="">{t('deps.about2')} {item.details.area}</h3>
                            </div>
                            <p className="text-sm lg:text-base">{item.description.acceso}</p>
                        </div>

                    </div>

                    {/* mapa */}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl">

                        <div className="sm:col-span-2">

                            {isLoaded ?
                                (<GoogleMap
                                    center={{
                                        lat: item.details.location.lat,
                                        lng: item.details.location.lng
                                    }}
                                    zoom={18}
                                    mapContainerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                >
                                </GoogleMap>) : <div className='flex justify-center align-middle'>Loading...</div>}
                        </div>


                        <div className="">
                            <div className="flex gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                                <h3 className="">{t('deps.other')}</h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-1 text-arenaclaro mt-5 ">
                                {secondSix.map((key, index) => (
                                    <div className="flex gap-3 mb-5" key={key}>
                                        <IconResolver
                                            name={item.extras.icon[index]}
                                            size={20}
                                            className="text-azulOscuro"
                                        />
                                        <p className="text-sm lg:text-base">{item.extras.text[key]}</p>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>
                </div>


            </div>

            {/* 6ta Imagenes */}

            <div className="grid sm:grid-cols-3 w-full ">
                <img className="w-full h-full object-cover" src={item.img.img6} alt={item.subtitle} />
                <img className="w-full h-full object-cover" src={item.img.img7} alt={item.description.acerca} />
                <img className="w-full h-full object-cover" src={item.img.img8} alt={item.description.alojamiento} />
            </div>
            <Banner />
            <BannerCta />
        </div >
    );
};
