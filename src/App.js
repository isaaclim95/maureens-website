import TopNavbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Activities from "./components/activities.component";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <TopNavbar />
      <Home />
      <About />
      <Activities />
    </div>


  );
}

export default App;
