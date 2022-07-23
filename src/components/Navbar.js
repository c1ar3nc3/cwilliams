import { FaHome, FaMale, FaBook, FaAddressBook } from "react-icons/fa"
import './navbar.css'


export default function Navbar() {

    return(
        <nav className="navbar">
            <ul className="nav">
                <a href="#"><FaHome/></a>
                <a href="#"><FaMale/></a>
                <a href="#"><FaBook/></a>
                <a href="#"><FaAddressBook/></a>
            </ul>
        </nav>
    )
}