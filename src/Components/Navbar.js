import './styles/navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar-container fixed right-40 w-max">
            <ul className="flex mt-4 md:flex-row md:space-x-8 sm:flex-row sm:space-x-8 ">
                <li>
                    About
                </li>
                <li>
                    Work
                </li>
                <li>
                    Education
                </li>
                <li>
                    Experience
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    )
}
