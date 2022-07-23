import Landing from "./Landing";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Projects from "./Projects";
import Contact from "./Contact";
import Links from "./Links";
// import Footer from "./Footer";
import './application.css'


export default function Application() {

    return (
        <>
            {/* <header>
            </header> */}
            <div className="container">
                    <Navbar/>
                <div className="landing">
                    <Landing/>
                </div>
                <div className="showcase">
                    <Bio/>
                </div>
                <div className="projects">
                    <Projects/>
                </div>
                <div className="contact">
                    <Contact/>
                    <Links/>
                </div>
            </div>
            {/* <footer>
                <Footer />
            </footer> */}
        </>
    );
}