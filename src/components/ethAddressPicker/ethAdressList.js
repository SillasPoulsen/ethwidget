function EthAddressList({ address, handleChange, transferInfo }) {
  return (
    <>
      <li
        onClick={() => handleChange(address)}
        value={address.account}
        className={
          address.account === transferInfo.account ? "selected" : "ethAdress"
        }
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
