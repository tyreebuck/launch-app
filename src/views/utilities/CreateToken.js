import { useState, useEffect } from "react";
import MainCard from "../../ui-component/cards/MainCard";
import "./style/create_token.css";

const CreateToken = () => {
  const [firstPage, setFirstPage] = useState(false);
  const [totalSupply, setTotalSupply] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [decimal, setDecimal] = useState(0);
  const [icon, setIcon] = useState("");

  const changePage = async () => {
    setFirstPage(true);
  };

  const backToLanding = async () => {
    setFirstPage(false);
  };

  useEffect(() => {}, []);

  //   if (firstPage === false) {
  //     return (
  //       <MainCard title="Bot">
  //         <div className="container mt-4">
  //           <img
  //             src="../assets/bot_banner.png"
  //             width="100%"
  //             alt=""
  //             style={{ borderRadius: "1rem" }}
  //           />
  //           <p className="text-center mt-4">
  //             <strong>
  //               Discord bots for Verification Wallet, sales & listing, Rarity
  //               Checker, Floor Price Notification.
  //             </strong>
  //             <br />
  //             In under 10 minutes to set up a bot for your Discord Server.
  //           </p>
  //         </div>
  //         <div className="text-center mb-4">
  //           <button
  //             type="button"
  //             onClick={changePage}
  //             className="req-button mt-2"
  //             style={{ margin: "0" }}
  //           >
  //             Open
  //           </button>
  //         </div>
  //       </MainCard>
  //     );
  //   }

  return (
    <>
      <MainCard title="Create Token">
        <div className="container text-center pt-4 mt-4">
          <h1>Create Your Own Token</h1>
          <button className="backward" type="button" onClick={backToLanding}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mint-pass-01.appspot.com/o/rakkigusu%2Fback.png?alt=media&token=f3d57188-1756-4755-936e-14c2f4ec0d8a"
              width="20%"
              alt=""
            />
          </button>
        </div>
        <div className="container">
          <div className="mb-4">
            <label>Token Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Token Name"
              onChange={(e) => {
                setTokenName(e.target.value);
              }}
              name="tokenName"
            />
          </div>
          <div className="mb-4">
            <label>Token Symbol</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Token Symbol"
              onChange={(e) => {
                setTokenSymbol(e.target.value);
              }}
              name="tokenSymbol"
            />
          </div>
          <div className="mb-4">
            <label>Total Supply</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Total Supply"
              onChange={(e) => {
                setTotalSupply(e.target.value);
              }}
              name="totalSupply"
            />
          </div>
          <div className="mb-4">
            <label>Decimal</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Decimal"
              onChange={(e) => {
                setDecimal(e.target.value);
              }}
              name="totalDecimal"
            />
          </div>
          <div className="mb-4">
            <label>Icon</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Icon"
              onChange={(e) => {
                setIcon(e.target.value);
              }}
              name="totalIcon"
            />
            <small>Example icon size 128 x 128</small>
          </div>
          <div className="container mb-4 text-center">
          <button className="req-button" type="button">
            Create
          </button>
        </div>
        </div>
      </MainCard>
    </>
  );
};

export default CreateToken;
