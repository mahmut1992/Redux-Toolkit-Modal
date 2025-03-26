import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-2xl">Ract App</div>
      <div className="flex items-center gap-5">
        <div>
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            name=""
            id=""
          >
            <option value="no" selected disabled>
              Seçiniz
            </option>
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <div>
          <input
            className="outline-none"
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            type="text"
            placeholder="Arama yapınız..."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 h-10 rounded-full w-10 flex items-center justify-center"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
