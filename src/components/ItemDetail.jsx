export const ItemDetail = ({ item }) => {

    const iconKeys = Object.keys(item.extras.text).slice(0, 6);

    return (
        <div className='flex flex-col items-center'>
            <div className="h-[55vh] overflow-hidden">
                <img className="w-full bottom-[-200px]" src={item.img.img2} alt={item.subtitle} />
            </div>
            <div className="grid grid-cols-2">
                <div className="bg-azulOscuro p-12 text-arenaClaro">
                    <div className="border-b-1 border-azulClaro pb-10">
                        <h1 className="font-bebas text-6xl tracking-wide pb-5">{item.title}</h1>
                        <p className="leading-tight">{item.description.alojamiento}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <ul className="text-arenaclaro mt-5">
                            {iconKeys.map((key, index) => (
                                <li className="flex gap-3 mb-5" key={index}>
                                    <div dangerouslySetInnerHTML={{ __html: item.extras.icon[key] }} />
                                    <h4>{item.extras.text[key]}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <img className="w-full h-full overflow-hidden" src={item.img.img1} alt={item.subtitle} />
            </div>
            <div>section3</div>
            <div>section4</div>
            <div>section5</div>
        </div>
    );
};
