import React from "react";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Loader from "./Loader"

function LandingPage() {
  return (
    <div style={{ width: "100vw", marginTop: "6%", marginBottom: "10%", marginLeft: "9%" }}>
      <Aboutus/>
      <Services/>
    </div>
  );
}

export default LandingPage;
