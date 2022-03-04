function EthAddressList({ address, handleChange }) {
  return (
    <>
      <li
        onClick={() => handleChange(address)}
        value={address.account}
        className={"ethAdress"}
      >
        <div className="address-container">
          <p className="ethAdress" value={address.account} name="ethAdress">
            {address.account}
          </p>
          <p key={address.account}>
            <b>{address.balance} ETH</b>
          </p>
        </div>
        <hr></hr>
      </li>
    </>
  );
}

export default EthAddressList;
