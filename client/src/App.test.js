import React from 'react';
import * as rtl from '@testing-library/react';
import Card from './components/Card';
import Sheroes from './components/Sheroes';
import App from './App';

test('world cup heading displayed', () => {
  const wrapper = rtl.render(<App />);
  const heading = wrapper.getByText(/Women's World Cup Players/i);
  expect(heading.textContent).toMatch(/Women's World Cup Players/i);
});

test('sheroes heading displayed', () => {
  const wrapper = rtl.render(<Sheroes />);
  const heading = wrapper.getByText(/Sheroes/i);
  expect(heading.textContent).toMatch(/Sheroes/i);
});

test('app renders without crashing', () => {
  const wrapper = rtl.render(
    <App />
  );
});





