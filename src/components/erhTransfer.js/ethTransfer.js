import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EthAdressPicker({ transferInfo, updateAllAddresses }) {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    from: transferInfo.account,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.amount || values.to === "") {
      setErrorMessage("please fill out all the fields ");
      return;
    }

    if (Number(values.amount) > Number(transferInfo.balance)) {
      setErrorMessage("insufficient funds");
      return;
    }

    const newBalance = transferInfo.balance - values.amount;
    const transferAmount = Number(values.amount);
    const address = transferInfo.account;
    const to = values.to;

    const updatedEthAddress = { address, newBalance, transferAmount, to };

    updateAllAddresses(updatedEthAddress);

    navigate("/send/success");
  }

  return (
    <>
      <div className="container">
        <div className="content-box">
          <div className="top-content">
            <p>Please fill form to send ETH</p>
          </div>
          <div className="mainContent">
            <form>
              <label>
                From:
                <input
                  type="text"
                  name="from"
                  onChange={handleChange}
                  value={values.from}
                />
              </label>
              <label>
                to:
                <input
                  type="text"
                  name="to"
                  placeholder="Destination Address"
                  onChange={handleChange}
                />
              </label>
              <label>
                Amount:
                <input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  placeholder="Ethereum amount"
                />
              </label>
            </form>
            {errorMessage && <p className="error"> {errorMessage} </p>}
            <div className="button-end">
              <button className="submit" type="submit" onClick={handleSubmit}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}

export default EthAdressPicker;
