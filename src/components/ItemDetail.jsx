import { Banda } from "./Banda";
import { BannerBot } from "./BannerBot";
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


export const ItemDetail = ({ item }) => {

    const firstSix = Object.keys(item.extras.text).slice(0, 6);
    const secondSix = Object.keys(item.extras.text).slice(6, 12);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    })

    return (
        <div>

            {/* 1ra Seccion imagen principal */}

            <div className="h-[65vh] overflow-hidden">
                <img className="w-full bottom-[-200px]" src={item.img.img2} alt={item.subtitle} />
            </div>

            {/* 2da Seccion titulo & img */}

            <div className="grid grid-cols-2">
                <div className="bg-azulOscuro p-12 text-arenaClaro pl-20">

                    {/* Izquierda */}

                    <div className="border-b-1 border-azulClaro pb-5">
                        <h1 className="font-bebas text-6xl tracking-wide pb-5">{item.title}</h1>
                        <p className="leading-tight">{item.description.alojamiento}</p>
                    </div>

                    <div className="text-arenaclaro mt-5 grid grid-cols-2 gap-2">
                        {firstSix.map((key, index) => (
                            <div className="flex gap-3 mb-5" key={index}>
                                <div dangerouslySetInnerHTML={{ __html: item.extras.icon[key] }} />
                                <h4>{item.extras.text[key]}</h4>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Derecha */}

                <div>
                    <img className="h-full w-full object-cover" src={item.img.img1} alt={item.subtitle} />
                </div>
            </div>

            {/* 3ra Seccion Sobre el departamento */}

            <div className="text-azulOscuro py-12 px-20 bg-arenaClaro">
                <h2 className="w-full font-bebas text-5xl tracking-wide border-b-1 border-azulClaro pb-2">Sobre el departamento</h2>
                <p className="mt-7">{item.description.acerca}</p>
            </div>

            {/* 4ta Seccion Imagenes */}

            <div className="grid grid-cols-3 w-full ">
                <img src={item.img.img3} alt={item.subtitle} />
                <img src={item.img.img4} alt={item.description.acerca} />
                <img src={item.img.img5} alt={item.description.alojamiento} />
            </div>

            {/* 5ta Seccion Info y Mapa */}

            <div className="my-16">
                <div className="grid grid-cols-3 mx-20 my-10 gap-10">

                    {/* Info */}

                    <div className="col-span-2">
                        <div className="flex gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                            <h3 className="">{item.details.rooms}</h3>
                            <h3>·</h3>
                            <h3 className="">{item.details.guest}</h3>
                            <h3>·</h3>
                            <h3 className="">{item.details.plus}</h3>
                        </div>
                        <p>{item.description.acerca}</p>
                    </div>


                    <div className="">
                        <div className="flex gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                            <h3 className="">Acerca de {item.details.area}</h3>
                        </div>
                        <p>{item.description.acceso}</p>
                    </div>

                </div>
                <div className="grid grid-cols-3 mx-20 my-10 gap-10">
                    {/* mapa */}

                    <div className="col-span-2">
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
                            </GoogleMap>) : null}
                    </div>


                    <div className="">
                        <div className="flex gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                            <h3 className="">otros servicios</h3>
                        </div>
                        <div className="text-arenaclaro mt-5 gap-2">
                            {secondSix.map((key, index) => (
                                <div className="flex gap-3 mb-5" key={index}>
                                    <div dangerouslySetInnerHTML={{ __html: item.extras.icon[key] }} />
                                    <h4>{item.extras.text[key]}</h4>
                                </div>
                            ))}
                        </div>


                    </div>

                </div>

            </div>

            {/* 6ta Imagenes */}

            <div className="grid grid-cols-3 w-full ">
                <img src={item.img.img6} alt={item.subtitle} />
                <img src={item.img.img7} alt={item.description.acerca} />
                <img src={item.img.img8} alt={item.description.alojamiento} />
            </div>
            <Banda />
            <BannerBot />
        </div>
    );
};
