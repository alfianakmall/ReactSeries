import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import CardProducts from "../Fragments/CardProducts";
import { getProducts } from "../services/products.service";
import useLogin from "../Hooks/useLogin";
import TableCart from "../Fragments/tableCart";
import Navbar from "../Layouts/Navbar";
import { DarkMode } from "../context/darkmode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar></Navbar>
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header images={product.image} id={product.id} />
                <CardProducts.Body title={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer price={product.price} id={product.id} />
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2 ml-5">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
