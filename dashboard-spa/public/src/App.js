import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SideBar from "./components/SideBar/SideBar"


function App() {
  const router=useRoutes(routes)
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <div className="wrapper">
          <SideBar />
          {router }
        </div>
      </div>
    </div>
  );
}

export default App;
