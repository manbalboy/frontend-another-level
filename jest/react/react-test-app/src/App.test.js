import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  // screen object 를 이용해서 원하는 엘레멘트에 접근 (접근할 떄 ID로)
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  // screen object 를 이용해서 원하는 엘레멘트에 접근 (접근할 떄 ID로)
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  // screen object 를 이용해서 원하는 엘레멘트에 접근 (접근할 떄 ID로)
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});
