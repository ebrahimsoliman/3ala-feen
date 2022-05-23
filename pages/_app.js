import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from "../components/shared/nav";
import FooterComponent from "../components/shared/footerComponent";
import {Fragment} from "react";

function MyApp({Component, pageProps}) {

    return (<Fragment>
        <Header/>
        <Component {...pageProps} />
        <FooterComponent/>
    </Fragment>)
}

export default MyApp
