import {Route,Routes} from "react-router-dom";
import App from "../../App";
import HousingProgramsPage from "../../pages/HousingProgramsPage";
import TurnPage from "../../pages/TurnPage";
import ContactsPage from "../../pages/ContactsPage";
import ResetettlementPage from "../../pages/ Resettlement";
  
  const Router = () =>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/programs" element={<HousingProgramsPage />} />
      <Route path="/turn" element={<TurnPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/resettlements" element={<ResetettlementPage />} />
    </Routes>
  
  
  export default Router;
  
  