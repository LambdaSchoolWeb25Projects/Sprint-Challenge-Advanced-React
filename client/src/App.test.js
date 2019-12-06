import React from 'react';
import * as rtl from '@testing-library/react';
import Card from './components/Card';
import App from './App';

test('world cup heading displayed', () => {
  const wrapper = rtl.render(
    <App />
  );
  const heading = wrapper.getByText(/Women's World Cup Players/i)
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toMatch(/Women's World Cup Players/i);
});

test('display player in Card component', () => {
  const { getByText } = rtl.render(<Card />)
  const hasPlayer = getByText(/Player/i);
  expect(hasPlayer).toBeInTheDocument();
});

test('renders without crashing', () => {
  const wrapper = rtl.render(
    <App />
  );
});


