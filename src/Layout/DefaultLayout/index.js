import FooterCommon from "../../common/FooterCommon";
import HeaderCommon from "../../common/HeaderCommon";
import Navbar from "../../common/Navbar/Navbar";
// import Home from "../../pages/Home";

function DefaultLayout({ children }) {
  return (
    <div className="defaultlayout__container">
      <HeaderCommon />
      <Navbar />
      {children}

      <FooterCommon />
    </div>
  );
}

export default DefaultLayout;
