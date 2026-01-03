import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders StudyFlow AI title in the header', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  const heading = within(header).getByRole('heading', { name: /StudyFlow AI/i, level: 2 });
  expect(heading).toBeInTheDocument();
});
