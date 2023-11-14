import { Link } from 'react-router-dom'

export const BannerBot = () => {
    return (
        <section className='grid grid-cols-2 items-center h-80 overflow-hidden text-2xl text-azulOscuro bg-arenaClaro rounded-tr-3xl rounded-tl-3xl'>
            <div className='h-full bg-[url("../public/img/apartments/kumaru01/3.jpg")] bg-cover bg-center'>

            </div>
            <div className='p-10'>
                <h1 className='text-5xl'>How Can I Book My Apartment?</h1>
                <p className='text-base pt-4 leading-tight'>Es tan fácil como llamar y nuestro agente reservara el apartamento o habitación que más te guste o si prefieres, podrás disfrutar de la atencion personalizada y se te brindarán las mejores opciones que se adaptan a tus necesidades.</p>
                <div className='pt-5'>
                    <Link
                        to="/contact"
                        className="rounded-full bg-azulOscuro px-6 py-2.5 text-sm font-semibold text-arenaClaro border-2 border-azulOscuro hover:text-azulOscuro shadow-sm hover:bg-transparent transition hover:duration-500 ease-in-out"
                    >
                        Contactanos
                    </Link>
                </div>
            </div>
        </section>
    )
}
