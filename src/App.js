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
import RootNavbar from './component/RH/NavbarRh/RootNavbar';
import Dashboard from './component/RH/Dashboard/Dashboard';
import Team from './component/RH/Approbation/Team';
import Add from './component/RH/AddEmploye/Add';
import Ops from './component/RH/OperationsPlus/Ops';
import EditEmp from './component/RH/ListEmp/EditEmp';
import BarChart from './component/RH/BarChart/BarChart';
import PieChart from './component/RH/PieChart/PieChart';
import LineChart from './component/RH/LineChart/LineChart';
import Calendar from './component/RH/Calendar/Calendar';
function App() {
  return (
    <main>
    <Router>
    <ToastContainer />
      <Routes>
      <Route exact path="/" element={<RootNavbar />}>
        <Route index element={<Dashboard />} />
       
        <Route path="Emps" element={<EditEmp />} />
      <Route path="team" element={<Team />} />
      <Route path="calendrier" element={<Calendar />} />
      <Route path="form" element={<Add />} />
      <Route path="Export" element={<Ops />} />
      <Route path="Bar" element={<BarChart />} />
      <Route path="Pie" element={<PieChart />} />
      <Route path="Line" element={<LineChart />} />
        </Route> 

           <Route exact path="/Auth" element={<Authentication />}></Route> 
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
