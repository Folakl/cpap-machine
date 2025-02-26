import React,{ Component} from "react";
// import Navbar from "./component/Navbar";
import PageOne from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CpapMachines from "./pages/CpapMachines";
import Navbar from "./component/Navbar";
import Accessories from "./component/Accessories";
import Masks from "./pages/Masks";
import conditionalreact from "./component/conditionalreact";


class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path="/" element = {<PageOne/>}/>
         <Route path="/Cpap_machines" element={<CpapMachines/>} />
         <Route path="/Cpap_masks" element= {<Masks/>}/>
       </Routes>
      </BrowserRouter>
      <conditionalreact/>
   
    
        </div>
    )
  }
}
export default App
