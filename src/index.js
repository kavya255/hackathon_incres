import React from "react";
//import { ReactDOM } from "react";
import {TextComponent}
//import ReactDOM from "react-dom";
import {
  TextComponent,
  InputComponent,
  Box,
  DatePick,
  Dropdown,
  Attatchments,
} from "./components";
//import GlobalStyle from "./globalStyles";
 export function Header() {
  return (
    <div
      style={{
        backgroundColor: "#5375E2",
        justifyContent: "left",
        alignItems: "blue",
        color: "white",
        fontFamily: "Nunito Sans",
        fontWeight: "700",
      }}
    >
      <TextComponent
        label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
        styleProps={{
          fontSize: "16px",
          color:"#5375E2",
          textAlign: "center",
          paddingTop: "18px",
        }} />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING 2023"
        styleProps={{
          fontSize: "36px",
          fontFamily: 'Nunito',
          textAlign: "center",
          color:"#5375E2",
          paddingBottom: "15px",
        }} />
    </div>
  );
}