import { useState, useEffect } from "react";
import MainCard from "../../ui-component/cards/MainCard";
import {
  formatToken,
  ftBalanceOf,
  getSupplyForOwner,
  loadContract,
} from "../../resources/contract";
import { config } from "../../resources/config";
import "./style/create_token.css";
import { saveAs } from "file-saver";

const FetchNftsHolder = () => {
  const [firstPage, setFirstPage] = useState(false);
  const [contractId, setContractId] = useState("");
  const [contractNft, setContractNft] = useState("");
  const [contractFt, setContractFt] = useState("");
  const [ftAmount, setFtAmount] = useState("");
  const [log, setLog] = useState();

  const changePage = async () => {
    setFirstPage(true);
  };

  const backToLanding = async () => {
    setFirstPage(false);
  };

  useEffect(() => {
    initNear();
    console.log(contractId);
  }, [contractId, log]);

  const initNear = async () => {
    let contractNft = await loadContract(contractId, "NFT");

    setContractNft(contractNft);
    setContractFt(contractFt);
  };

  const fetchData = async () => {
    let result = [];
    const response = await fetch(
      `${config.apiUrl}/collection-stats?collection_id=${contractId}`
    );
    const data = await response.json();
    // console.log(data);
    let ownerIds = data.data.results.owner_ids;
    // console.log(ownerIds);
    if (!ownerIds) return alert("No data found");
    if (ftAmount !== "") {
      for (let ownerId of ownerIds) {
        let supplyNft = await getSupplyForOwner(contractNft, ownerId);
        // console.log(`${ownerId} has ${supplyNft}`);
        result.push({
          wallet_id: ownerId,
          nft_amount: supplyNft,
          // ft_amount: formatToken(supplyFt).toFixed(2),
          ft_amount: (parseInt(supplyNft) * parseInt(ftAmount).toString()),
        });
        console.log(result);
        setLog(JSON.stringify(result));
        var textarea = document.getElementById("textarea_id");
        textarea.scrollTop = textarea.scrollHeight;
        // break;
      }
    }
    if (ftAmount === "") {
      for (let ownerId of ownerIds) {
        let supplyNft = await getSupplyForOwner(contractNft, ownerId);
        // console.log(`${ownerId} has ${supplyNft}`);
        result.push({
          wallet_id: ownerId,
          nft_amount: supplyNft,
        });
        console.log(result);
        setLog(JSON.stringify(result));
        var textarea = document.getElementById("textarea_id");
        textarea.scrollTop = textarea.scrollHeight;
        // break;
      }
    }
    console.log(result);
    setLog("FETCHING DATA SUCCESS");
    saveAs(
      new Blob([JSON.stringify(result, null, 2)], { type: "JSON" }),
      `FetchingNFTsHolder_${contractId} - RakuApp.json`
    );
  };

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
          <h1>Get Your Holders Data</h1>
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
            <label>Contract Id</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contract Id"
              onChange={(e) => {
                setContractId(e.target.value);
              }}
              name="contractId"
            />
          </div>
          <div className="mb-4">
            <label>FT Amount (Optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter FT Amount"
              onChange={(e) => {
                setFtAmount(e.target.value);
              }}
              name="ftAmount"
            />
            <small>
              Note: Total token you want to give for Holder, Formula : (NFTs
              Amount/Holder) x (FT Amount).
            </small>
          </div>
          <div className="container mb-4 text-center">
            <button className="req-button" type="button" onClick={fetchData}>
              Continue
            </button>
          </div>
          <div className="container mb-4 pb-4">
            <h6>Log</h6>
            <textarea
              className="form-control"
              id="textarea_id"
              rows="5"
              readOnly
              autoFocus
              // onChangeText={(val) => setText(val)}
              value={log}
              style={{ resize: "none" }}
            >
              {log}
            </textarea>
          </div>
        </div>
      </MainCard>
    </>
  );
};

export default FetchNftsHolder;
