import Type from "../Type";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import OrderPage from "../OrderPage";

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

describe("total price of goods and options", () => {
  test("프로덕트 update", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total Price:", { exact: false });
    expect(total).toHaveTextContent("0");
    //아메리카 여행 상품 한개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    expect(total).toHaveTextContent("1000");
  });
  test("옵션 update", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price:", { exact: false });
    expect(total).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("500");
  });
  test("총합", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total Price:", { exact: false });

    expect(total).toHaveTextContent("0");
    //아메리카 여행 상품 한개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);

    expect(total).toHaveTextContent("1500");
    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("1000");
    userEvent.type(americaInput, "4");
    expect(total).toHaveTextContent("4000");
  });
});
