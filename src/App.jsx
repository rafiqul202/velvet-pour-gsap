import gsap from "gsap";
import "./App.css";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cocktails from "../components/Cocktails";
import About from "../components/About";
import Art from "../components/Art";
import Menu from "../components/Menu";

// youTube video link

//www.youtube.com/watch?v=AW1yfBKRMKc

https: gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
}

export default App;
