import { FaFacebook, FaGithubSquare, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

export default function Links() {

    return(
        <ul>
            <a href="https://github.com/c1ar3nc3" target="_blank"><FaGithubSquare style={{color: 'black', fontSize: '30px'}}/></a>
            <a href="https://www.linkedin.com/in/c1ar3nc3/" target="_blank"><FaLinkedin style={{color: ' #0a66c2', fontSize: '30px'}}/></a>
            <a href="https://www.facebook.com/c1ar3nc3" target="_blank"><FaFacebook style={{color: '#1877f2', fontSize: '30px'}}/></a>
            <a href="https://twitter.com/_c1ar3nc3_" target="_blank"><FaTwitter style={{color: '#1da1f2', fontSize: '30px'}} /></a>
            <a href="https://www.instagram.com/_c1ar3nc3_/" target="_blank"><FaInstagramSquare style={{color: '#c32aa3', fontSize: '30px'}}/></a>
        </ul>
    )
}