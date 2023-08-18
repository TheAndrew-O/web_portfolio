import { Dialog } from "@headlessui/react";
import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

type ModalProps = {
    isOpen: boolean;
    imgId: string;
    onClose: () => void;
};

const Modal = ({isOpen, imgId, onClose}: ModalProps) => {
    return(
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-50"
        >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-10/12 h-1/2 rounded bg-gradient-to-b from-black to-transparent border-2 border-slate-800">
          <Dialog.Title>Complete your order. {imgId.toString()}</Dialog.Title>
          <div>
            <img
                  className="rounded-lg object-cover"
                  width={400}
                  height={400}
                  src="/autopark.png"
                  />
          </div>
          {/* ... */}
        </Dialog.Panel>
      </div>
      </Dialog>
    )
}

export default Modal