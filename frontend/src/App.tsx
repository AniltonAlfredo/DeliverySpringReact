import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Rotas from './Rotas';

function App() {
  return (
    <>
      <Rotas/>
      <ToastContainer/>
    </>
  );
}

export default App;
