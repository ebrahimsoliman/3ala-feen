import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from "../components/shared/nav";
import FooterComponent from "../components/shared/footerComponent";
import {Fragment} from "react";

/*0-shared between pages*/
function MyApp({Component, pageProps}) {

    return (<Fragment>
        <Header/>
        {/*1- pages content change based on file-based router*/}
        <Component {...pageProps} />
        <FooterComponent/>
    </Fragment>)
}

export default MyApp
