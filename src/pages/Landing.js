import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default function Landing(props) {
    return (
        <div className="app">
            <Navbar mode={props.darkMode} toggleTheme={props.toggleMode} />
            <div>
                <Main mode={props.darkMode} />
                <Footer mode={props.darkMode} />
            </div>
        </div>
    )
}