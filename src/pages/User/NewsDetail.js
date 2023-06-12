import React from "react";
import FooterCommon from "../../common/FooterCommon";
import HeaderCommon from "../../common/HeaderCommon";
import Navbar from "../../common/Navbar/Navbar";
import NewsDetailContent from "../../component/NewsDetailContent/NewsDetailContent";
import { useStore } from "../../store";
import Forbidden from "./Forbidden";

function NewsDetail() {
  const [state] = useStore();
  return (
    <div className="App">
        <>
          <NewsDetailContent />
        </>
    </div>
  );
}

export default NewsDetail;
