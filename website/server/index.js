const express = require("express");
const app = express();
const cors = require("cors");

//Third party middleware(CROSS ORIGIN RESOURCE SHARING)
app.use(cors());

//Inbuilt Middleware Used:
app.use(express.json());

//NOTE-> In this Model I am considering Data-1 as Name
//and Data-2 as an ID for identification of the Object

//Connection to DB :
require("./config/connection");

// //Importing Controller Functions :
// const getFn = require("./controllers/GET");
// const postFn = require("./controllers/POST");
// const putFn = require("./controllers/PUT");
// const deleteFn = require("./controllers/DELETE");

//Making Options for CRUD :
//Read Operation :

// app.get("/get", getFn);

// //Post Operation :
// app.post("/post/:datafromparams", postFn);

// //PUT Operation :
// app.put("/update/:id", putFn);

// //DELETE Operation :
// app.delete("/delete/:id", deleteFn);

// //DB data insertion operations
// app.get(
//   "/save_twitter_accounts",
//   require("./controllers/twitter_accounts_to_DB")
// );
// app.get("/save_twitter_tweets", require("./controllers/twitter_tweets_to_DB"));

//DB data fetching operations
app.get(
  "/fetch_sockpuppet",
  require("./controllers/DB data fetching/sockpuppet_db")
);

app.get(
  "/fetch_twitteraccounts",
  require("./controllers/DB data fetching/twitter_accounts_DB")
);
app.get(
  "/fetch_twittertweets",
  require("./controllers/DB data fetching/twitter_tweets_DB")
);

// //testing repote generation
// app.get("/testing", require("./testing/repote"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running on 3001 || PORT...");
});
