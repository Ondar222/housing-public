import {Route,Routes} from "react-router-dom";
import App from "../../App";
import HousingProgramsPage from "../../pages/HousingProgramsPage";
import TurnPage from "../../pages/TurnPage";
  
  const Router = () =>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/programs" element={<HousingProgramsPage />} />
      <Route path="/turn" element={<TurnPage />} />
    </Routes>
  
  
  export default Router;
  
  