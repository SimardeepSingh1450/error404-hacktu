import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//CSS
import "../css/Sockpuppet.css";

//Material UI Buttton
import Button from "@mui/material/Button";

const Sockpuppet = (props) => {
  const [sockpuppetdata, setsockpuppetdata] = useState();
  const [button_state, set_button_state] = useState(true);
  const [imgLink, setImgLink] = useState("");

  const getsockpuppetdata = async () => {
    const sockpuppet_data = await axios.get(
      "https://selenium-sock-api.onrender.com/sockgenerator"
    );
    console.log(sockpuppet_data.data);
    setsockpuppetdata(sockpuppet_data.data);
    props.sockdata([sockpuppet_data.data]);
    set_button_state(true);
    //this persondoesnotexist image link
    setImgLink("https://thispersondoesnotexist.com/image");
  };

  return (
    <div className="sockpuppetMain">
      <Button
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          set_button_state(false);
          getsockpuppetdata();
        }}
        variant="contained"
      >
        {button_state ? "Generate Sock Puppet" : "Under fetching..."}
      </Button>
      <div>
        {sockpuppetdata && (
          <div className="mainsockCardDiv">
            <div className="sockpuppetcardDiv">
              {/* <h4 className="sockfirst">Photo :</h4> */}
              <img style={{ height: "100px" }} src={imgLink} />
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Name :</h4>
              <h4 className="socksecond">{sockpuppetdata.name}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Address :</h4>
              <h4 className="socksecond">{sockpuppetdata.address}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Age :</h4>
              <h4 className="socksecond">{sockpuppetdata.Age}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Username :</h4>
              <h4 className="socksecond">{sockpuppetdata.Username}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Email :</h4>
              <h4 className="socksecond">{sockpuppetdata["Email Address"]}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Password :</h4>
              <h4 className="socksecond">{sockpuppetdata.Password}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Phone Number :</h4>
              <h4 className="socksecond">{sockpuppetdata.Phone}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Birthday :</h4>
              <h4 className="socksecond">{sockpuppetdata.Birthday}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Blood Type :</h4>
              <h4 className="socksecond">{sockpuppetdata["Blood type"]}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Browser Agent :</h4>
              <h4 className="socksecond">
                {sockpuppetdata["Browser user agent"]}
              </h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">DEBIT CARD :</h4>
              {sockpuppetdata.Visa?<>
                <h4 className="socksecond">{sockpuppetdata.Visa}</h4>
              </>:<></>}
              {sockpuppetdata.MasterCard?<>
                <h4 className="socksecond">{sockpuppetdata.MasterCard}</h4>
              </>:<></>}
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">CVV Number :</h4>
              <h4 className="socksecond">{sockpuppetdata.CVV2}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Card Expiry :</h4>
              <h4 className="socksecond">{sockpuppetdata.Expires}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">GUID :</h4>
              <h4 className="socksecond">{sockpuppetdata.GUID}</h4>
            </div>
            {/* <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">SNN :</h4>
              <h4 className="socksecond">{sockpuppetdata.SSN}</h4>
            </div> */}
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Vehicle :</h4>
              <h4 className="socksecond">{sockpuppetdata.Vehicle}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Weight :</h4>
              <h4 className="socksecond">{sockpuppetdata.Weight}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Height :</h4>
              <h4 className="socksecond">{sockpuppetdata.Height}</h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Mother Maiden Name :</h4>
              <h4 className="socksecond">
                {sockpuppetdata["Mother's maiden name"]}
              </h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Zodiac Sign :</h4>
              <h4 className="socksecond">
                {sockpuppetdata["Tropical zodiac"]}
              </h4>
            </div>
            <div className="sockpuppetcardDiv">
              <h4 className="sockfirst">Geo Points :</h4>
              <h4 className="socksecond">
                {sockpuppetdata["Geo coordinates"]}
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sockpuppet;
