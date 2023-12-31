import { Dialog } from "@headlessui/react";
import { useRef } from "react";

export function Modall({ onClose = () => {}, children }) {
    let overlayRef = useRef();
  
    return (
      <Dialog
        static
        open={true}
        onClose={onClose}
        initialFocus={overlayRef}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <Dialog.Overlay
          ref={overlayRef}
          className="fixed inset-0 bg-gray-800/60"
        />
        <div className="relative flex items-center justify-center w-1/3 h-1/3">
          {children}
        </div>
      </Dialog>
    );
  }