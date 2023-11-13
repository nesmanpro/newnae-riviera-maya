import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export const ItemList = ({ productos }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>

            <div>
                <div className="flex flex-col items-center mb-20">
                    {productos.map((prod, index) =>
                        <div key={prod.title} className="w-full px-20 py-6 pb-10 flex justify-center gap-7 items-center propsimg border-[#568291] border-b-1 last:border-none hover:border-none transition-height hover:duration-1000 hover:ease-in-out"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                backgroundImage: `url(${hoveredIndex === index ? prod.img.img2 : 'transparent'})`,
                            }}
                        >
                            {
                                hoveredIndex === index
                                    ? <div className="flex justify-center items-center gap-7 h-64">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg text-[#FFF8EA]" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                            </svg>
                                        </div>
                                        <div className="max-w-3xl text-[#FFF8EA]">
                                            <div>
                                                <h3 className="font-semibold text-3xl" > {prod.title} </h3>
                                            </div>
                                            <div className="flex justify-evenly gap-12">
                                                <p>{prod.details.rooms}</p>
                                                <p>{prod.details.area}</p>
                                                <p>{prod.details.plus}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex justify-center gap-7">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg text-[#568291]" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                            </svg>
                                        </div>
                                        <div className="max-w-3xl text-[#023047]">
                                            <div>
                                                <h3 className="font-semibold text-3xl" > {prod.title} </h3>
                                            </div>
                                            <div className="flex justify-evenly gap-12">
                                                <p>{prod.details.rooms}</p>
                                                <p>{prod.details.area}</p>
                                                <p>{prod.details.plus}</p>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>

                    )}
                </div>
            </div >
        </>
    )
}
