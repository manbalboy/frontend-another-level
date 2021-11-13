import SummaryPage from "../SummaryPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("체크박스 와 버튼", () => {
  render(<SummaryPage />);
  //체크박스
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  //체크박스 초기값 확인
  expect(checkbox.checked).toEqual(false);

  //confirm disabled 확인
  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton.disabled).toBeTruthy();

  //check
  userEvent.click(checkbox);

  //able
  expect(confirmButton.disabled).not.toBeTruthy();
});
