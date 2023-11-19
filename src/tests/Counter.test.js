import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const headerMessage = screen.getByText(/Counter/i);
  expect(headerMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId("count");
  expect(countElement).toBeInTheDocument();

  expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  const countElement = screen.getByTestId("count");
  const decrementButton = screen.getByText("+");

  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe("1");
});

test('clicking - decrements the count', async () => {
  const countElement = screen.getByTestId("count");
  const decrementButton = screen.getByText("-");

  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe("-1");
});
