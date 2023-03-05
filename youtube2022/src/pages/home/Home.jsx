import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import "../../../src/style/App.css"
import LandingPage from "../../components/LandingPage/LandingPage";
import Weather from "../../components/Weather";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <LandingPage/>
          
      </div>
    </div>
  );
};

export default Home;
