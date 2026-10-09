import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ShopLanding from './pages/ShopLanding';

function ShopFlow() {
  const [entered, setEntered] = useState(false);
  return entered ? <div>Existing shop</div> : <ShopLanding onEnter={() => setEntered(true)} />;
}

test.each(['Enter shop', 'ENTER SHOP'])('opens the shop using %s without navigation', (buttonName) => {
  const originalUrl = window.location.href;
  render(<ShopFlow />);
  expect(screen.getByAltText('Kitchen')).toBeInTheDocument();
  expect(screen.queryByText('Existing shop')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: new RegExp('^' + buttonName) }));
  expect(screen.getByText('Existing shop')).toBeInTheDocument();
  expect(screen.queryByAltText('Kitchen')).not.toBeInTheDocument();
  expect(window.location.href).toBe(originalUrl);
});
