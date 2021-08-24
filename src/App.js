import "./styles.css";
import Footer from "./Footer";
import { useState } from "react";
const App = () => {
  const [sumdob, setSumdob] = useState(0);
  const [lucky, setLucky] = useState(0);
  function dateFunc(e) {
    let dateNum = Number(e.target.value.replace(/-+/g, ""));
    let sum = 0;
    console.log(dateNum);
    while (dateNum > 0) {
      let rem = dateNum % 10;
      sum = sum + rem;
      dateNum = parseInt(dateNum / 10);
    }
    console.log(sum);
    setSumdob(sum);
  }
  function luckyFunc(e) {
    let n = e.target.value;
    setLucky(Number(n));
  }
  function clickHandler() {
    if (sumdob % lucky === 0) {
      document.getElementById("res").textContent =
        "Yayyy!! Your birthdate is luckyyy 🤩🤩🤩";
    } else {
      document.getElementById("res").textContent =
        "Ooops!!! your birthdate isn't lucky🙄🙄😶";
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <div className="container">
              <div className="alert alert-warning mt-3" role="alert">
                <h4 className="alert-heading">
                  Hey! Is your 🎁birthday🎂 Lucky?
                </h4>
              </div>
            </div>
            <div className="container mt-5">
              <div className="font-weight-bold" style={{ fontSize: "30px" }}>
                Enter the Date Of Birth:
              </div>
              <input
                className="mt-3 datepick"
                type="date"
                onChange={dateFunc}
              />
            </div>
            <div className="container mt-5">
              <div className="font-weight-bold" style={{ fontSize: "30px" }}>
                Enter the Lucky Number:
              </div>
              <input className="mt-3 lucky" type="text" onChange={luckyFunc} />
            </div>
            <button
              type="button"
              className="btn btn-warning mt-5"
              style={{ fontSize: "25px" }}
              onClick={clickHandler}
            >
              Success
            </button>
            <div className="container mt-3">
              <p
                className="font-weight-bold"
                id="res"
                style={{ fontSize: "30px" }}
              ></p>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div
              className="alert alert-danger text-weight-bold h3"
              role="alert"
            >
              Alert!
            </div>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Just a Word for you!</h4>
              <p>
                This website simply calculates whether your DOB is a lucky one
                or not!
              </p>
              <hr />
              <p className="mb-0">
                Your private information is in no way being stored anywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="alert alert-warning mt-3" role="alert">
          <h4 className="alert-heading">Hey! Is your 🎁birthday🎂 Lucky?</h4>
        </div>
      </div>
      <div className="container mt-5">
        <div className="font-weight-bold" style={{ fontSize: "30px" }}>
          Enter the Date Of Birth:
        </div>
        <input className="mt-3 datepick" type="date" />
      </div>
      <div className="container mt-5">
        <div className="font-weight-bold" style={{ fontSize: "30px" }}>
          Enter the Lucky Number:
        </div>
        <input className="mt-3 lucky" type="text" />
      </div>
      <button
        type="button"
        class="btn btn-warning mt-5"
        style={{ fontSize: "25px" }}
      >
        Success
      </button>
      <div className="container mt-3">
        <p className="font-weight-bold" style={{ fontSize: "30px" }}></p>
      </div> */}
      <Footer />
    </div>
  );
};
export default App;
