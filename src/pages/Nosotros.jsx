import { Banda } from "../components/Banda";
import { BannerBot } from "../components/BannerBot";
import img from '../assets/images/pexels-michael-burrows-7129665.jpg';
// import img2 from '../assets/images/pexels-francisco-basto-5344794.jpg';

export const Nosotros = () => {
    return (
        <div>
            <main className="grid sm:grid-cols-2 ">

                <section className="">
                    <img className="h-full w-full object-cover" src={img} alt="" />
                </section>
                <section className="py-8 px-10 sm:p-12 5xl:pr-96 4xl:pr-72 3xl:pr-60 sm:pt-24">
                    <h1 className="text-2xl leading-tight sm:text-5xl pt-7 text-azulOscuro">Sobre nosotros</h1>
                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro">Con más de una década en el juego de gestionar propiedades y alquileres, ¡nos sentimos genial de seguir creciendo cada día! En Nae Riviera Maya, estamos comprometidos con los propietarios, los huéspedes ¡y también con el medio ambiente! Esa es la clave de nuestro éxito.</p>
                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro mt-2">Queremos que cada estadía sea una experiencia cómoda y de primer nivel en los mejores lugares de la Riviera Maya. Creamos conexiones cercanas con nuestros huéspedes, quienes nos siguen eligiendo año tras año y se convierten en parte de nuestra familia en Nae Riviera Maya</p>
                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro mt-2">Mantener propiedades de alta calidad en excelente estado es nuestra promesa. Queremos que se sientan felices en su segundo hogar, la Riviera Maya, mientras también concienciamos sobre el cuidado del medio ambiente.</p>
                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro mt-2">Nuestro equipo está lleno de características y valores únicos, con habilidades y conocimientos que nos permiten brindar un servicio excepcional. ¡Nos enorgullece decir que somos tus amigos locales en la Riviera Maya!</p>
                </section>

            </main>
            {/* <img className="w-full object-cover object-bottom max-h-unit-40 sm:max-h-unit-5xl lg:max-h-unit-9xl relative bottom-[-68px]" src={img2} alt="" /> */}
            <Banda />
            <BannerBot />
        </div>
    )
}
