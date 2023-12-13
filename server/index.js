const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
const corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers
const mrUserRouter = require("./routes/mruserRouter");
const visitRouter = require("./routes/visitRouter");
const doctorsRouter = require("./routes/doctorRouter");
const loginRouter = require("./routes/loginRouter");
app.use("/api/user", mrUserRouter);
app.use("/api/visit", visitRouter);
app.use("/api/doctors", doctorsRouter);
app.use("/api/login", loginRouter);

//testing

app.get("/", (req, res) => {
  res.json({ message: "server is working" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
