import { useTranslation } from "react-i18next";

export const Banda = () => {

    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center h-28 sm:h-44 w-full text-xs sm:text-2xl text-azulOscuro bg-arenaOscuro rounded-tr-3xl rounded-tl-3xl relative bottom-[-44px] z-10 sm:px-20">
            <h3 className="text-center border-azulOscuro border-r-1 px-5 sm:px-10 sm:py-4">
                {t('banda.text1')}
            </h3>
            <h3 className="text-center border-azulOscuro border-r-1 px-5 sm:px-10 sm:py-4">
                {t('banda.text2')}
            </h3>
            <h3 className="text-center border-azulOscuro px-5 sm:px-10">
                {t('banda.text3')}
            </h3>
        </div>
    )
}
