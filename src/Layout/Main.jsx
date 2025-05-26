import {Outlet} from "react-router-dom";
import Header2 from "../Components/Header/Header2";
import Footer1 from "../Components/Footer/Footer1";

const Main = () => {
  return (
    <div className="main-page-area">
      <Header2></Header2>
      <Outlet></Outlet>
      <Footer1></Footer1>
    </div>
  );
};

export default Main;
