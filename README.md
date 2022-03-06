# EthWidget

Live version: 
https://thirsty-hypatia-785a38.netlify.app/

## Getting Started

Useful scripts:

```"scripts":
   "start": "react-scripts start",
   "build": "react-scripts build",
   "test": "jest",
   "eject": "react-scripts eject"
```

Since the app is using an API from Ether scan you would have to create a .env file and add your API Credentials.

## Description

The Eth widget is a front-end app to send Eth, either between your own accounts or else where.

## Components

- **Eth widget:** This is the stateful component, that is keeping the state across all the components. This is also where the state is initated by an API call to EtherScan.
- **Eth address picker** - this the component that makes sure you can click an address and it will be added to the state, so you don't have to copy the address to the next step.
- **Eth address list :** this the list of eth addresses and account balance, this component is rendered iside of Eth address list.
- **Eth Transfer:** This is the compnent that is making the transaction possible. It's a controlled from, with some basic form validation, to make sure, you have sufficent funds.
- **Eth Success:** This is the component that loads and show the successfull transaction. Also it loads the graphics with a slight delay.

**Test**

I've added a jest test to the function of the transaction, the function updateAllAddresses. I havent worked with automated testing before, but this experience has made it certain that I wanna dive into it even further.

## React Router Routes

| Path            | Component        | Permissions | Behavior                                      |
| --------------- | ---------------- | ----------- | --------------------------------------------- |
| `/`             | ethAddressPicker | Public      | Choose the address you want to transfer from. |
| `/send`         | ethTransfer      | Public      | Send eth to own accounts or somewhere else.   |
| `/send/success` | ethSuccess       | Public      | Information about your most recent transfer.  |

###
