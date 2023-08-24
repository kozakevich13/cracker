import { Badge } from "@mui/material";
import React from "react";
import Details from "./Details";
import Logo from "../logo/Logo";
import { useTypedSelector } from "../../store/useTypedSelector";
import {
  getTotalCostCrackers,
  selectAllCrackers,
} from "../../store/selectors/selector";
import "./Header.css";

const HeaderBar: React.FC = () => {
  const crackers = useTypedSelector(selectAllCrackers);
  const total = useTypedSelector(getTotalCostCrackers);

  return (
    <div className="header">
      <Logo />
      <div className="header-details">
        <Badge badgeContent={crackers.length} color="error">
          <img src="cracker.svg" alt="Info" />
        </Badge>
        <div>TOTAL: {total}€</div>
        <Details />
      </div>
    </div>
  );
};

export default HeaderBar;
