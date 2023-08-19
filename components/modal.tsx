import { Dialog } from "@headlessui/react";
import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal = ({isOpen, onClose}: ModalProps) => {
  return(
    <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed inset-0 z-10 overflow-y-auto bg-green-400"
    >

  {/* Full-screen container to center the panel */}
  <div className="flex items-center justify-center min-h-screen p-4 bg-pink-500">
    {/* The actual dialog panel  */}
    <Dialog.Panel className="w-1/2 h-1/2 max-w-md mx-auto rounded-lg">
      <Dialog.Title className="text-yellow-800 bg-red-500">dasda your order.</Dialog.Title>
      <div className="bg-red-700">
              Test
      </div>
      {/* ... */}
    </Dialog.Panel>
  </div>
  </Dialog>
)
}

export default Modal