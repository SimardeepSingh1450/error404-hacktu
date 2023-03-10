import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/Duck.css";
//Material UI Buttton
import Button from "@mui/material/Button";

const DuckSearchFeed = (props) => {
  const [button_state, set_button_state] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [duckArray, setDuckArray] = useState([]);

  const getDuckData = async () => {
    const duckduckGo = await axios.get(
      `https://asgardian.pythonanywhere.com/runDuckPython/${userInput}`
    );
    console.log(duckduckGo);

    setDuckArray(duckduckGo.data);
    props.setduckdata(duckduckGo.data);
    set_button_state(true);
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          className="searchfeedInput"
          placeholder="Enter the Search Field..."
        />
        <Button
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            set_button_state(false);
            getDuckData();
          }}
          variant="contained"
        >
          {button_state ? "Fetch Duck Data" : "Under fetching..."}
        </Button>
      </div>

      <div className="left-right-search-main">
        <div className="searchfeedLeft">
          <div className="maingoogleCardDiv">
            {duckArray ? (
              duckArray.map((item) => {
                return (
                  <div className="googleCardDiv">
                    <img alt="image" className="duckImage" src={item.image} />
                    <h3>
                      <span className="spanDuck">News Link :</span>
                      {item["news-link"]}
                    </h3>
                    <h3>
                      <span className="spanDuck">Text :</span>
                      {item.text}
                    </h3>
                    <h3>
                      <span className="spanDuck">Source Title :</span>
                      {item.title}
                    </h3>
                    <h3>
                      <span className="spanDuck">Website Source :</span>
                      {item.website}
                    </h3>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuckSearchFeed;
