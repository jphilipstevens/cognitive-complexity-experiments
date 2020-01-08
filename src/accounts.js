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
