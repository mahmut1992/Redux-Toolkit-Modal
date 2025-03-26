import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((store) => store.modal);
  const { data, keyword } = useSelector((store) => store.data || { data: [] });
  const location = useLocation();
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  let loc = location?.search.split("=")[1];
  useEffect(() => {
    if (!loc) {
      setProductInfo({ name: "", price: "", url: "" });
    }
  }, [modal]);
  useEffect(() => {
    if (loc) {
      let foundProduct = data.find((i) => i.id == loc);
      if (foundProduct) {
        setProductInfo(foundProduct);
      }
      if (!loc) {
      }
    }
  }, [loc, data]);
  const onChangeFunc = (e, type) => {
    if (type == "url" && e.target.files.length > 0) {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const dispatch = useDispatch();

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };
  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };
  const filtredItems = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  const contentModal = () => {
    return (
      <>
        <Input
          value={productInfo?.name}
          type={"text"}
          placeholder={"Ürün ekle"}
          name={"name"}
          id={"name"}
          onChange={(e) => onChangeFunc(e, "name")}
        />
        <Input
          value={productInfo?.price}
          type={"text"}
          placeholder={"Fiyat ekle"}
          name={"price"}
          id={"price"}
          onChange={(e) => onChangeFunc(e, "price")}
        />
        <Input
          type={"file"}
          placeholder={"Resim seç"}
          name={"url"}
          id={"url"}
          onChange={(e) => onChangeFunc(e, "url")}
        />
        <Button
          btnText={loc ? "ürün Güncelle" : "Ürün oluştur"}
          onClick={loc ? buttonUpdateFunc : buttonFunc}
        />
      </>
    );
  };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-[100px] ">
        {filtredItems.length > 0 ? (
          filtredItems.map((item, key) => <ProductCard key={key} item={item} />)
        ) : (
          <div className="text-center w-full text-gray-500 mt-5">
            Henüz ürün yok
          </div>
        )}
      </div>

      {modal && (
        <Modal
          content={contentModal()}
          title={loc ? "ürün Güncelle" : "Ürün oluştur"}
        />
      )}
    </div>
  );
};

export default Product;
