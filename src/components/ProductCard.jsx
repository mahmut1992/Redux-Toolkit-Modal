import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateFunc = () => {
    // dispatch(updateDataFunc(item));
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${item.id}`);
  };
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded">
      <img className="w-full  rounded-md" src={item?.url} alt="" />
      <div className="absolute left-0 bottom-[-10] bg-indigo-600 text-white w-full px-2 rounded-lg">
        <div>{item?.name} </div>
        <div>{item?.price} ₺ </div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2"
      >
        <BsThreeDots className="cursor-pointer" size={24} color="black" />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white mt-12 rounded-md p-2">
          <div
            onClick={() => dispatch(deleteDataFunc(item.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCard;
