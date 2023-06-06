import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Routers/Routers";

export default function Layout() {
    return (
        //router header, pages, footer files
        <Fragment>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </Fragment>
    );
};