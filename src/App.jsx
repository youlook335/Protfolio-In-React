import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div id="home" className="h-screen">
                <Home/>
            </div>
            <div id="about" className="h-screen">
                <About/>
            </div>
            <div id="skills" className="h-screen">
                Skills Section
            </div>
            <div id="projects" className="h-screen">
                Projects Section
            </div>
            <div id="contact" className="h-screen">
                Contact Section
            </div>
        </>
    );
}

export default App;
