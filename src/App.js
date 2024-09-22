import "./App.css";
import {
  Features,
  Header,
  Hero,
  Footer,
  GetInTouch,
  TechStack,
} from "./components";
function App() {
  return (
    <div className="bg-[#131314]">
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
