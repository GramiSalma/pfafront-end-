import Authentication from './component/Authentication/Authentication';
import AddAbsence from './component/conge/AddAbsence';
import './App.css';

import CongeViews from './component/conge/CongeViews';
import ProfileView from './component/conge/ProfileView';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import AddConge from './component/conge/AddConge';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  return (
    <main>
    <Router>
    <ToastContainer />
      <Routes>
           <Route exact path="/" element={<Authentication />}></Route> 
     
        <Route exact path="/CongeViews" element={<CongeViews />}></Route>
        <Route exact path="/ProfileView" element={<ProfileView />}></Route>
        <Route exact path="/AddConge" element={<AddConge />}></Route>
        <Route exact path="/add-absence" element={<AddAbsence />}></Route>
      </Routes>
    </Router>
    </main>
  );
}

export default App;
