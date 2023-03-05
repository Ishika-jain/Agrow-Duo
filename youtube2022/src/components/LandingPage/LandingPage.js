import React from "react";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Loader from "./Loader"

function LandingPage() {
  return (
    <div style={{ width: "85vw",padding: 10, marginTop: "4%", marginBottom: "10%", marginLeft: "6%", display:"flex", flexDirection: "column" }}>
      <Loader/>
      <Aboutus/>
      <Services/>
    </div>
  );
}

export default LandingPage;
