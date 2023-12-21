import { Link } from "react-router-dom";

const Footer=()=>{

    return <>
    <div className="w-full px-4 py-1 bg-slate-800 flex flex-col justify-between mt-4 h-max absolute bottom-0">
    <span className="my-4 text-3xl text-white">The Newspaper</span>
    <span className="flex flex-row items-center w-full justify-center gap-6 md:gap-3 text-md md:text-sm text-slate-200 md:flex-col">
        <Link to="/">Home</Link>
        <Link to="/business">Business</Link>
        <Link to="/health">Health</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
    </span>
    <span className="text-center text-xs border-y-2 text-slate-400 border-slate-600 mt-10 py-1">
        Copyright ©{new Date().getFullYear()} , Made by Gourab Das
    </span>
    <span className="w-10 h-10 shadow-md rounded-full text-sm bg-slate-400 text-white font-semibold flex justify-center items-center absolute left-5 top-5" onClick={()=>{window.scroll(0,0)}}><i className="fi fi-ss-arrow-up"></i></span>
    </div>
    </>
}

export default Footer;