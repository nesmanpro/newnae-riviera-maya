import { Typography } from "@material-tailwind/react";
import Logo from '../../assets/logo/logoDark.svg'
import { Link } from "react-router-dom";
import { IgIcon } from "../icons";

export function Footer() {
    return (
        <footer className="w-full bg-azulClaro p-8 rounded-tl-3xl rounded-tr-3xl pt-16 relative z-50">
            <div className="md:px-10 mx-auto sm:max-w-[75%] xl:max-w-6xl lg:max-w-4xl">

                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                    <img className="h-10" src={Logo} alt="logo-ct" />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-azulOscuro">
                        <li className="hover:scale-110 cursor-pointer">
                            <Link to={'https://www.instagram.com/naerivieramaya'} target="_blank">
                                <IgIcon size='32' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 mb-2 border-azulOscuro" />
                <Typography className="text-xs italic text-azulOscuro">
                    &copy; 2023 Nae Riviera Maya
                </Typography>
            </div>
        </footer>
    );
}