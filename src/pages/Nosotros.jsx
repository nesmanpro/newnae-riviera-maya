import { useTranslation } from "react-i18next";

// components
import { Banner } from "../components/layouts/Banner";
import { BannerCta } from "../components/layouts/BannerCta";

import img from '../assets/images/pexels-michael-burrows-7129665.jpg';

export const Nosotros = () => {
    const { t } = useTranslation();


    return (
        <div>
            <main className="grid sm:grid-cols-2 ">

                <section className="">
                    <img className="h-full w-full object-cover" src={img} alt="" />
                </section>
                <section className="py-8 px-10 sm:p-12 5xl:pr-96 4xl:pr-72 3xl:pr-60 sm:pt-24">
                    <h1 className="text-2xl leading-tight sm:text-5xl pt-7 text-azulOscuro">
                        {t('about.title')}
                    </h1>

                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro">
                        {t('about.parag1')}
                    </p>

                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro mt-2">
                        {t('about.parag2')}
                    </p>

                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro mt-2">
                        {t('about.parag3')}
                    </p>

                    <p className="text-xs sm:text-base pt-4 leading-tight text-azulOscuro mt-2">
                        {t('about.parag4')}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-10 sm:gap-5 items-center mt-10 lg:mt-20">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bebas text-6xl sm:text-4xl lg:text-6xl text-azulOscuro">+20</h4>
                            <h4 className="font-bebas text-2xl sm:text-xl lg:text-2xl text-azulClaro">
                                {t('about.detail1')}
                            </h4>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-bebas text-6xl sm:text-4xl lg:text-6xl text-azulOscuro">4.81</h4>
                            <h4 className="font-bebas text-2xl sm:text-xl lg:text-2xl text-azulClaro">
                                {t('about.detail2')}
                            </h4>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-bebas text-6xl sm:text-4xl lg:text-6xl text-azulOscuro">+300</h4>
                            <h4 className="font-bebas text-2xl sm:text-xl lg:text-2xl text-azulClaro">
                                {t('about.detail3')}
                            </h4>
                        </div>

                    </div>
                </section>

            </main>
            {/* <img className="w-full object-cover object-bottom max-h-unit-40 sm:max-h-unit-5xl lg:max-h-unit-9xl relative bottom-[-68px]" src={img2} alt="" /> */}
            <Banner />
            <BannerCta />
        </div>
    )
}
