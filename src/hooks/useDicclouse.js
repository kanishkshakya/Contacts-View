import { useState } from "react";

const useDicclouse = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return { isOpen, onClose, onOpen };
};

export default useDicclouse;
