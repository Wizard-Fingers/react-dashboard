import "./Main.css";
import logo from "../../assets/logo.png";
const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={logo} alt="logo" height="300px"  />
          <div className="main__greating">
            <h1>Hello</h1>
            <p>Welcome to your admin dash-board</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">100</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Events</p>
              <span className="font-bold text-title">53</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of videos</p>
              <span className="font-bold text-title">100</span>
            </div>
          </div>
          <div className="card">
            <i className=" fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of likes</p>
              <span className="font-bold text-title">600</span>
            </div>
          </div>
              </div>
      </div>
    </main>
  );
};
export default Main;
