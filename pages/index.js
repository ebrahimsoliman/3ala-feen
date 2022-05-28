import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CarouselSection from "../components/home/carousel";
import Destinations from "../components/home/destinations";
import About from "../components/home/about";
import Contact from "../components/home/contact";
import Packages from "../components/home/packages";
//Home Page
export default function Home() {
    return (
        <div className={styles.container}>
            {/*Meta Tags for SEO (Search Engine Optimisation)*/}
            <Head>
                <title>3ala Feen</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*Header Carousel*/}
            <CarouselSection/>
            {/*destinations section*/}
            <Destinations/>
            {/*About us Section*/}
            <About/>
            {/*Packages Section*/}
            <Packages/>
            {/*Contact Us Section*/}
            <Contact/>
        </div>
    )
}
