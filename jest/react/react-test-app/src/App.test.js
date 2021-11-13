import { fireEvent, render, screen } from "@testing-library/react";
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

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  //버튼 클릭
  fireEvent.click(plusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  //버튼 클릭
  fireEvent.click(minusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the +,- button from being pressed when th on/off button is clicked", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  const plusButtonElement = screen.getByTestId("plus-button");
  // const counterElement = screen.getByTestId("counter");

  const minusButtonElement = screen.getByTestId("minus-button");

  fireEvent.click(buttonElement);

  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
  //버튼 클릭
  // fireEvent.click(minusButtonElement);
  // expect(counterElement).toHaveTextContent("0");
});
