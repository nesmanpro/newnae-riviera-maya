import { Banda } from "./Banda";
import { BannerBot } from "./BannerBot";

export const ItemDetail = ({ item }) => {

    const iconKeys = Object.keys(item.extras.text).slice(0, 6);

    return (
        <div>

            {/* 1ra Seccion imagen principal */}

            <div className="h-[55vh] overflow-hidden">
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
                        {iconKeys.map((key, index) => (
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

            {/* 4ta Seccion e imagenes */}
            <div className="grid grid-cols-3 w-full ">
                <img src={item.img.img3} alt={item.subtitle} />
                <img src={item.img.img4} alt={item.description.acerca} />
                <img src={item.img.img5} alt={item.description.alojamiento} />
            </div>
            <div>
                <div className="grid grid-cols-3 p-5">
                    <div className="col-span-2 p-10">
                        <div className="flex gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                            <h3 className="">{item.details.rooms}</h3>
                            <h3>·</h3>
                            <h3 className="">{item.details.guest}</h3>
                            <h3>·</h3>
                            <h3 className="">{item.details.plus}</h3>
                        </div>
                        <p>{item.description.acerca}</p>
                    </div>
                    <div className="p-10">
                        <div className="flex gap-5 text-3xl text-azulOscuro border-b-1 border-azulClaro pb-2 mb-5">
                            <h3 className="">Acerca de {item.details.area}</h3>
                        </div>
                        <p>{item.description.acerca}</p>
                    </div>
                </div>


            </div>
            <Banda />
            <BannerBot />
        </div>
    );
};
