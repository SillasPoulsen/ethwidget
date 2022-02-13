import EthAddressList from "./ethAdressList";
import { useNavigate } from "react-router-dom";

function EthAdressPicker({ allAddresses, handleChange }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/send");
  }

  return (
    <div className="container">
      <div className="contentbox">
        <div className="topContent">
          <p>My Ethereum Addresses</p>
        </div>

        <div className="mainContent">
          {allAddresses && (
            <ul>
              {allAddresses.map((address, idx) => {
                return (
                  <EthAddressList
                    address={address}
                    handleChange={handleChange}
                    key={idx}
                  />
                );
              })}
            </ul>
          )}
        </div>
        <div className="bottomContent">
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
