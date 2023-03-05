import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import LandingPage from "../../Displays/LandingPage";
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
