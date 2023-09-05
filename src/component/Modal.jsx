import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" ">
          <div className=" relative m-auto z-50 min-h-[300px] max-w-[400px]  bg-slate-50 p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className=" self-end text-2xl"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className=" backdrop-blur top-0 h-screen w-screen absolute z-40"
          />
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
