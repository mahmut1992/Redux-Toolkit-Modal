import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content, btnText, onClick }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-xl">{title}</div>
          <GrClose size={24} onClick={() => dispatch(modalFunc())} />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
