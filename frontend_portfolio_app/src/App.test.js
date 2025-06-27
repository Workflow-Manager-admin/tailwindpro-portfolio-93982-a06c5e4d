import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sathish portfolio branding', () => {
  render(<App />);
  const navBrand = screen.getByText(/Sathish/i);
  expect(navBrand).toBeInTheDocument();
});
