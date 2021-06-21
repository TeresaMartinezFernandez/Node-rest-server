const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.phonesPath = "/api/phones";

    //Middlewars_ funciones que añaden otras funcionalidades a la webserver
    this.middlewares();

    //app routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //read and parseint body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.phonesPath, require("../routes/phones"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server running at port", this.port);
    });
  }
}

module.exports = Server;
