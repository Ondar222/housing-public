import React from "react";
import CatalogProgComponents from "../../components/CatalogPrograms/CatalogProgComponents";
import Mortgage from "../../components/MortgageBlock/Mortgage";
import AddInformationBlock from "../../components/AddInformation/AddInformationBlock";
import DescriptionProgramsBlock from "../../components/DescriptionPrograms/DescriptionProgramsBlock";
import ActionBlock from "../../components/PerfomAction/ActionBlock";
import EmergencyHousing from "../../components/Emergency/EmergencyHousing";

const HousingProgramsPage = () => {
  return (
    <div className="Container_CatalogProgramsPage">
      <div className="Block_CP_Page">
        <h2 className="Title_CP_Page">
          Каталог программ с государственной поддержкой
        </h2>
        <h4 className="Second_Title_CP_Page">
          Краткое описание всех жилищных программ мэрии города Кызыл
        </h4>
      </div>
      <CatalogProgComponents />
      <Mortgage />
      <DescriptionProgramsBlock />
      <EmergencyHousing />
      <AddInformationBlock />
    </div>
  );
};

export default HousingProgramsPage;
