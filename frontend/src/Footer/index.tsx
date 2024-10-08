import "./styles.css"
import { ReactComponent as YoutubeIcon } from "./youtube.svg"
import { ReactComponent as LinkedinIcon } from "./linkedin.svg"
import { ReactComponent as InstagramIcon } from "./instagram.svg"

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a segunda
            edição da semana devsuperior
            <div className="footer-icons">
                <a href="/">
                    <YoutubeIcon />
                </a>
                <a href="/">
                    <LinkedinIcon />
                </a>
                <a href="/">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}
export default Footer;