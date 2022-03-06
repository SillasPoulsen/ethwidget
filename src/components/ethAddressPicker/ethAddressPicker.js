import EthAddressList from "./ethAdressList";
import { useNavigate } from "react-router-dom";

function EthAdressPicker({ allAddresses, handleChange, transferInfo }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/send");
  }

  return (
    <div className="container">
      <div className="content-box">
        <div className="top-content">
          <p>My Ethereum Addresses</p>
        </div>

        <div className="main-content">
          {allAddresses && (
            <ul>
              {allAddresses.map((address, idx) => {
                return (
                  <EthAddressList
                    address={address}
                    handleChange={handleChange}
                    key={idx}
                    transferInfo={transferInfo}
                  />
                );
              })}
            </ul>
          )}
        </div>
        <div className="bottom-content">
          <p>Copy the adress from which you wish to send money</p>
          <button className="submit" type="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default EthAdressPicker;
