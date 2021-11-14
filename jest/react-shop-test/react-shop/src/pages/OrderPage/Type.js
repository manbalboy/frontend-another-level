import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import { OrderContext } from "../../contexts/OrderContext";
function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const [orderDatas, updateItemCounts] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  const ItemComponents = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCounts(itemName, newItemCount, orderType)
      }
    />
  ));
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const label = orderType === "options" ? "옵션 " : "";

  return (
    <>
      <h2>주문종류</h2>
      <p>하나의 가격</p>
      <p>
        {label}총 가격 : {orderDatas.totals[orderType]}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
