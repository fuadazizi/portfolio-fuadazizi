import './styles/navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar-container">
            <ul>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#works"> Works </a>
                </li>
                <li>
                    <a href="#educations"> Educations </a>
                </li>
                <li>
                    <a href="#experiences"> Experiences </a>
                </li>
                <li>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>
        </div>
    )
}
