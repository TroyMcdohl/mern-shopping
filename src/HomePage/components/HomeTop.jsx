import { useContext, useState } from "react";
import "./homeTop.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { AuthContext } from "../../context/AuthContext";

const HomeTop = () => {
  const [move, setMove] = useState(0);

  const moveHandler = (way) => {
    way === "left"
      ? setMove(move > 0 ? move - 1 : 2)
      : setMove(move > 1 ? 0 : move + 1);
  };

  return (
    <div className="home_top_container">
      <div className="home_top_left_arrow" onClick={() => moveHandler("left")}>
        <ArrowLeftIcon />
      </div>
      <div
        className="home_top_right_arrow"
        onClick={() => moveHandler("right")}
      >
        <ArrowRightIcon />
      </div>
      <div
        className="home_top_wrapper"
        style={{ transform: `translateX(-${move * 100}%)` }}
      >
        <div className="home_top_card">
          <div className="home_top_des">
            <h5 className="home_top_caption">Summer Fashion</h5>
            <p className="home_top_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ratione eos quisquam! Illo quos autem ullam, nostrum quia fuga
              repellendus ab tempore veniam aliquid accusantium. Ipsa quae eaque
              saepe aliquid.
            </p>
            <button className="home_top_btn">Shop now</button>
          </div>
          <div className="home_top_img_box">
            <img
              src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/Glitter-Paparazzi-600x800.jpg"
              alt=""
              className="home_top_img"
            />
          </div>
        </div>
        <div className="home_top_card">
          <div className="home_top_des">
            <h5 className="home_top_caption">Fall Fashion</h5>
            <p className="home_top_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ratione eos quisquam! Illo quos autem ullam, nostrum quia fuga
              repellendus ab tempore veniam aliquid accusantium. Ipsa quae eaque
              saepe aliquid.
            </p>
            <button className="home_top_btn">Shop now</button>
          </div>
          <div className="home_top_img_box">
            <img
              src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/Ombr%C3%A9-Oyster-600x800.jpg"
              alt=""
              className="home_top_img"
            />
          </div>
        </div>
        <div className="home_top_card">
          <div className="home_top_des">
            <h5 className="home_top_caption">Winter Fashion</h5>
            <p className="home_top_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ratione eos quisquam! Illo quos autem ullam, nostrum quia fuga
              repellendus ab tempore veniam aliquid accusantium. Ipsa quae eaque
              saepe aliquid.
            </p>
            <button className="home_top_btn">Shop now</button>
          </div>
          <div className="home_top_img_box">
            <img
              src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/Hashtags-and-Hash-Browns-600x800.jpg"
              alt=""
              className="home_top_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
