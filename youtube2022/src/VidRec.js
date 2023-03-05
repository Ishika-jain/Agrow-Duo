import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./pages/home/home.scss";
import "../src/style/App.css"
import VideoRecommendation from "./components/Recommendations/VideoRecommendation";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <VideoRecommendation/>
          
      </div>
    </div>
  );
};

export default Home;
