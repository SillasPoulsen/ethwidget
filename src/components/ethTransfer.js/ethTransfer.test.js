const allAddresses = [
  {
    account: "0x9d3b2805b5317dace816abcd7b859fc3d05e2868",
    balance: "3.080599",
  },
  {
    account: "0xbfcc986ca6e6729c1d191cc0179ef060b87a7c42",
    balance: "5.096774",
  },
  {
    account: "0x9De33BeE1353E65fE86Cc274F86Ade0439021576",
    balance: "0.129202",
  },
];

const obj = {
  address: "0xbfcc986ca6e6729c1d191cc0179ef060b87a7c42",
  newBalance: 3.096774,
  to: "0x9d3b2805b5317dace816abcd7b859fc3d05e2868",
  transferAmount: "2",
};
const output = [
  {
    account: "0x9d3b2805b5317dace816abcd7b859fc3d05e2868",
    balance: 5.080598999999999,
  },
  {
    account: "0xbfcc986ca6e6729c1d191cc0179ef060b87a7c42",
    balance: 3.096774,
  },
  {
    account: "0x9De33BeE1353E65fE86Cc274F86Ade0439021576",
    balance: "0.129202",
  },
];

const updateAllAddresses = (obj) => {
  const transferAmount = obj.transferAmount;
  const to = obj.to;
  const transferAddress = obj.address;
  const newBalance = obj.newBalance;
  const addressArr = [...allAddresses];

  addressArr.forEach((address) => {
    if (address.account === transferAddress) {
      address.balance = Number(newBalance);
    }
    if (address.account === to) {
      address.balance = Number(transferAmount) + Number(address.balance);
    }
    return addressArr;
  });
  // eslint-disable-next-line no-unreachable
  return addressArr;
};

describe("Update array", () => {
  test("update the array with the new information from the obj", () => {
    expect(updateAllAddresses(obj)).toEqual(output);
  });
});
