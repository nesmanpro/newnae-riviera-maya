import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemList = ({ productos }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div id="ItemList">
            <div className="flex flex-col items-center mb-20">
                {

                    productos.map((prod, index) =>
                    (

                        <Link to={`/item/${prod.id}`} key={prod.id} className={` border-azulClaro w-[70vw] border-b-1 last:border-none  hover:w-full px-20 py-6 pb-10 flex justify-center gap-7 items-center bg-center bg-cover transition-height ease-in-out h-32 hover:h-64 hover:border-none`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}

                            style={{
                                backgroundImage: `url(${hoveredIndex === index ? prod.img.img1 : 'transparent'})`,
                                transitionDuration: '1000ms',
                                // backgroundPosition: 'center calc(100% + 200px)',
                            }}
                        >

                            <div className="flex justify-center items-center gap-7 h-full w-full ">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-plus-lg ${hoveredIndex === index ? 'hidden' : 'text-azulClaro'}`} viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                </div>
                                <div className={`max-w-3xl ${hoveredIndex === index ? 'text-arenaClaro' : 'text-azulOscuro'}`}>
                                    <div>
                                        <h3 className={'font-semibold text-3xl'}>{prod.title}</h3>
                                    </div>
                                    <div className="flex justify-evenly gap-12">
                                        <p>{prod.details.rooms}</p>
                                        <p>{prod.details.area}</p>
                                        <p>{prod.details.plus}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>

                    ))}
            </div>
        </div >

    )
}
