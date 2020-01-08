import { v4 } from 'uuid';

export const accounts = new Array(10).fill(null).map(() => ({
  id: v4(),
  amounts: [{
    type: 'available',
    value: Math.random() * 10000 + 1,
    currency: 'CAD',
  },
  {
    type: 'total',
    value: Math.random() * 10000 + 1,
    currency: 'CAD',
  },
  {
    type: 'hold',
    value: Math.random() * 10000 + 1,
    currency: 'CAD',
  }],
  name: v4(),
}));

export const reduce = () => accounts.reduce((obj, item) => {
    obj[item.id] = {
      name: item.name,
      amount: item.amounts.reduce((aObj, aItem) => {
        aObj[aItem.type] = {
          value: aItem.value,
          currency: aItem.currency
        }
      }, {}),
    };
    return obj;
  }, {});


export const reduceSwitchAmount = () => accounts.reduce((obj, item) => {
    obj[item.id] = {
      name: item.name
    };

    switch (item.name) {
      case 'chq':
        obj[item.id].amount = item.amounts.find((a) => a.type === "available")
        break;
      case 'sav':
            obj[item.id].amount = item.amounts.find((a) => a.type === "total")
            break;
      default:
          obj[item.id].amount = item.amounts.find((a) => a.type === "hold")
        break;
    }

    return obj;
  }, {});

export const iterate = () => {
  const obj = {};
  for (const item of accounts) {
    obj[item.id] = {
      name: item.name
    };
    switch (item.name) {
      case 'chq':
        obj[item.id].amount = item.amounts.find((a) => a.type === "available")
        break;
      case 'sav':
            obj[item.id].amount = item.amounts.find((a) => a.type === "total")
            break;
      default:
          obj[item.id].amount = item.amounts.find((a) => a.type === "hold")
        break;
    }
  }
};
