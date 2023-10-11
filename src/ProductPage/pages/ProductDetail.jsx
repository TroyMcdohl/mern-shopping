import React from "react";
import ProductDetailPage from "../components/ProductDetailPage";
import useFetchGet from "../../hooks/useFetchGet";
import { useParams } from "react-router-dom";
import ErrorLoadingShow from "../../hooks/ErrorLoadingShow";

const ProductDetail = () => {
  const pid = useParams().pid;

  const { data, loading, error, errMsg, success } = useFetchGet(
    `http://localhost:8000/api/v1/products/${pid}`
  );

  return (
    <>
      <ErrorLoadingShow loading={loading} error={error} errMsg={errMsg} />
      <ProductDetailPage product={data} />
    </>
  );
};

export default ProductDetail;
