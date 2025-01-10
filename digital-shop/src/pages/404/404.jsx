import React from "react";
import {Link} from 'react-router-dom'
import img from "./../../asset/404/static_404_1200.webp"
import {Helmet} from "react-helmet";
import favIcon from "../../asset/logo/favicon_new.webp";

export default function Page404(){

    return(
        <>
        <Helmet>
            <title>{`صفحه پیدا نشد`}</title>
            <link rel="icon" href={favIcon} />
        </Helmet>
        <div className={"w-[90%] my-5 bg-blue-900 rounded-xl flex flex-col justify-center items-center gap-3  py-10 mx-auto"}>
            <img src={img} className={"w-full "} />
            <Link to={"/"} className={"bg-white px-5 py-3 rounded text-blue-900"}>برگشت به خانه</Link>
        </div>
        </>
    )
}