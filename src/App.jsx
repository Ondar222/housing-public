import React from "react";
import HousingProgramsBlocks from "./components/HousingProgramsBlock/HousingProgramsBlocks";
import ProgramBlock from "./components/Programs/ProgramBlock";
import TurnBlock from "./components/TurnComponent/TurnBlock";
import UpdatesBlock from "./components/UpdatesComponent/UpdatesBlock";
import AddInformationBlock from "./components/AddInformation/AddInformationBlock";
import ContactsBlock from "./components/Contact/ContactsBlock";


const App = () => {
  return (

    <div style={{ width: "100%" }}>
      <div style={{ margin: "0 auto", background: "white", display: "flex", flexDirection: "column", gap: "50px" }}>
        <HousingProgramsBlocks />
        <ProgramBlock />
        <TurnBlock />

        <UpdatesBlock />
        <AddInformationBlock />
        <ContactsBlock />

      </div>
    </div>

  )
}

export default App;