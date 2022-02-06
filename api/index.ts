import app from "./src/app";
require("./src/dataBase.ts");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
