import TopNavbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Activities from "./components/activities.component";
import Hero from "./components/hero.component";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LearningFramework from "./components/learning_framework.component";
import Routine from "./components/routine.component";


function App() {
  return (
    <div>
      <TopNavbar />
      <Home />
      <Hero />
      <About />
      <Activities />
      <Routine />
      <LearningFramework />
    </div>


  );
}

export default App;
