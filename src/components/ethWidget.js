import axios from "axios";
import EthAddressPicker from "./ethAddressPicker/ethAddressPicker";
import EthTransfer from "./erhTransfer.js/ethTransfer";
import EthSuccess from "./ethSuccess";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function EthWidget() {
  const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
  const endpoint = `https://api.etherscan.io/api?module=account&action=balancemulti&address=0x9d3b2805b5317dace816abcd7b859fc3d05e2868,0xbfcc986ca6e6729c1d191cc0179ef060b87a7c42,0x9De33BeE1353E65fE86Cc274F86Ade0439021576&tag=latest&apikey=`;

  const [allAddresses, setAllAddress] = useState([]);
  const [transferInfo, setTransferInfo] = useState({
    account: "",
    transferTo: "",
    balance: 0,
    amount: "",
  });

  function handleChange(prop) {
    setTransferInfo({
      account: prop.account,
      transferTo: "",
      balance: prop.balance,
      amount: "",
    });
  }

  const updateAllAddresses = (obj) => {
    const transferAmount = obj.transferAmount;
    const to = obj.to;
    const transferAddress = obj.address;
    const newBalance = obj.newBalance;
    const addressArr = [...allAddresses];

    //To set your account to the new balance after transfer and
    //to check if the address you transfer to is your own account
    addressArr.map((address) => {
      if (address.account === transferAddress) {
        address.balance = newBalance;
      }
      if (address.account === to) {
        address.balance = transferAmount + address.balance;
      }
      return address;
    });

    setTransferInfo({
      account: transferAddress,
      transferTo: to,
      balance: newBalance,
      amount: transferAmount,
    });
    return setAllAddress(addressArr);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(endpoint + apiKey);
        const allData = result.data.result;

        allData.map((result) => {
          const number = result.balance / Math.pow(10, 18);
          result.balance = Number(number.toFixed(6));
          return allData;
        });

        setAllAddress(allData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [apiKey, endpoint]);

  return (
    <Router>
      <div className="components">
        <Routes>
          <Route
            path="/"
            element={
              <EthAddressPicker
                allAddresses={allAddresses}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="/send"
            element={
              <EthTransfer
                transferInfo={transferInfo}
                updateAllAddresses={updateAllAddresses}
              />
            }
          />
          <Route
            path="/send/success"
            element={<EthSuccess transferInfo={transferInfo} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default EthWidget;
