import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ShowMoreBtn from './index';

describe('ShowMoreBtn', () => {
  const onPress = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = render(<ShowMoreBtn wrapperStyle={{}} onPress={onPress} />);
    expect(getByTestId('show-more')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<ShowMoreBtn wrapperStyle={{}} onPress={onPress} />);
    fireEvent.press(getByText('Show more'));
    expect(onPress).toHaveBeenCalled();
  });
});