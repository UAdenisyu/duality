import { render } from '@testing-library/react-native';
import { observer } from 'mobx-react-lite';
import TotalBalance from './index';

jest.mock('../../mobx/appStoreContext', () => ({
  useDualityStore: () => ({
    totalBalance: 100,
    setTotalBalance: jest.fn(),
    // add any other methods or properties you need here
  }),
}));

describe('TotalBalance', () => {
  it('renders total balance', () => {
    const { getByText } = render(<TotalBalance />);

    const totalBalanceComponent = getByText('Total balance:');
    expect(totalBalanceComponent).toBeDefined();
  });
});