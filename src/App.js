import React,{ Component} from "react";
import PageOne from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CpapMachines from "./pages/CpapMachines";
import Navbar from "./component/Navbar";
import Masks from "./pages/Masks";
import Stayintouch from "./component/Stayintouch";
import Accessories from "./component/Accessories";
import Disorder from './component/Disorder';


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
         <Route path="/disorder" element= {<Disorder/>}/>
         <Route path="/stayintouch" element= {<Stayintouch/>}/>
         <Route path="/accessories" element= {<Accessories />}/>

       </Routes>
      </BrowserRouter>
      <conditionalreact/>
   
    
        </div>
    )
  }
}
export default App
