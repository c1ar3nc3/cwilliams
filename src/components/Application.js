import Landing from "./Landing";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Projects from "./Projects";
import Contact from "./Contact";
import Links from "./Links";


export default function Application() {

    return (
        <div>
        <Navbar/>
        <Landing/>
        <Bio/>
        <Projects/>
        <Contact/>
        <Links/>
        </div>
    );
}