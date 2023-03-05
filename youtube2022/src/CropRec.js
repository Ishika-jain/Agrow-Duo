import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./pages/home/home.scss";
import "../src/style/App.css"
import CropRecommendation from "./components/Recommendations/CropRecommendation";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <CropRecommendation/>
          
      </div>
    </div>
  );
};

export default Home;
