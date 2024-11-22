import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div class="lds-ellipsis" bis_skin_checked="1">
      <div bis_skin_checked="1"></div>
      <div bis_skin_checked="1"></div>
      <div bis_skin_checked="1"></div>
      <div bis_skin_checked="1"></div>
    </div>
  );
}
