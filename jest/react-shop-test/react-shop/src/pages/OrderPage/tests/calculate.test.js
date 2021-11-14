import Type from "../Type";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

test("update product's total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("총 가격 :", { exact: false });

  expect(productsTotal).toHaveTextContent("0");

  //아메리카 여행 상품 한개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1");

  expect(productsTotal).toHaveTextContent("1000");
});

test("update option's total when options change", async () => {
  render(<Type orderType="options" />);

  const optionTotal = screen.getByText("옵션 총 가격 :", { exact: false });
  // console.log(optionTotal);

  expect(optionTotal).toHaveTextContent("0");

  const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });

  userEvent.click(insuranceCheckbox);
  expect(optionTotal).toHaveTextContent("500");

  const dinnerCheckbox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });

  userEvent.click(dinnerCheckbox);
  expect(optionTotal).toHaveTextContent("1000");

  userEvent.click(dinnerCheckbox);
  expect(optionTotal).not.toHaveTextContent("1000");
});
