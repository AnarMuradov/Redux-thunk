import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "./productSlice";

export function Products() {
  const { value, isLoading, error } = useSelector(
    (state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>error</h2>
      ) : (
        value.map((x) => (
          <li onClick={() => dispatch(getAllProducts())}>{x.name}</li>
        ))
      )}
    </ul>
  );
}
