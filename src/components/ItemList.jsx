import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemList = ({ productos }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div id="ItemList">
            <div className="flex flex-col items-center">
                {

                    productos.map((prod, index) =>
                    (

                        <Link to={`/item/${prod.id}`} key={prod.id} className={` border-azulClaro w-[80vw] 2xl:w-[50vw]  border-b-1 last:border-none hover:w-full px-20 py-20 sm:py-6 sm:pb-10 flex justify-center gap-7 items-center bg-center bg-cover transition-height ease-in-out h-32 hover:h-64 hover:border-none hover:shadow-inner-2xl`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}

                            style={{
                                backgroundImage: `url(${hoveredIndex === index ? prod.img.img1 : 'transparent'})`,
                                boxShadow: `${hoveredIndex === index ? 'inset 0 0 30px rgba(0, 0, 0, 0.3)' : 'none'}`,
                                transitionDuration: '1500ms',
                                // backgroundPosition: 'center calc(100% + 200px)',
                            }}
                        >

                            <div className="flex justify-center items-center gap-7">
                                <div className={`max-w-3xl ${hoveredIndex === index ? 'text-arenaClaro' : 'text-azulOscuro'}`}>
                                    <div className="flex justify-left sm:justify-center">
                                        <h3 className={'font-semibold text-2xl sm:text-3xl'}>{prod.title}</h3>
                                    </div>
                                    <div className="flex justify-left sm:justify-center sm:gap-12 gap-8 text-xs sm:text-base w-[80vw] sm:max-w-3xl ">
                                        <p>{prod.details.rooms}</p>
                                        <p>{prod.details.area}</p>
                                        <p className="hidden sm:flex">{prod.details.plus}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>

                    ))}
            </div>
        </div >

    )
}
