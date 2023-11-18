import { Link } from 'react-router-dom'

export const BannerBot = () => {

    return (
        <section className='grid grid-cols-2 items-center h-96 overflow-hidden text-2xl text-azulOscuro bg-arenaClaro rounded-tr-3xl rounded-tl-3xl relative bottom-[-22px] z-20'>
            <div className='h-full bg-[url("../public/img/apartments/kumaru01/3.jpg")] bg-cover bg-center'>

            </div>
            <div className='p-10'>
                <h1 className='text-5xl'>¿Cómo puedo hacer una reserva?</h1>
                <p className='text-base pt-4 leading-tight'>Es tan fácil como ponerte en contacto con nuestro agente, él te proporcionará toda la información necesaria y te ayudará a encontrar la solución que mejor se ajuste a tus necesidades sin comprometer tu bolsillo.</p>
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
