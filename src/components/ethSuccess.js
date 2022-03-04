import { useNavigate } from "react-router-dom";
import Money from "../images/Frame (5).png";

function EthAddressPicker({ transferInfo }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div className="container">
      <div className="content-box">
        <div className="top-content">
          <p>Transaction complete</p>
        </div>
        <div className="main-content">
          <div className="fade-in">
            <img src={Money} alt="SVG"></img>
          </div>
          <div className="transfer-info">
            <p>You sent</p>
            <h1>{transferInfo.amount} eth</h1>
            <hr></hr>

            <h3>From</h3>
            <p>{transferInfo.account}</p>
            <h3>To</h3>
            <p>{transferInfo.transferTo}</p>
          </div>
          <div className="button-end">
            <button className="submit" type="submit" onClick={handleSubmit}>
              Account Balance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EthAddressPicker;
