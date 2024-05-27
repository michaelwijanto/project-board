"use client";
import { useModalStore } from "@/store/ModalStore";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

function Modal() {
  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  return (
    <>
      {/* Use the `Transition` component at the root level */}
      <Transition show={isOpen}>
        <Dialog onClose={() => closeModal} className="relative z-50">
          {/*
            Use one `TransitionChild` to apply one transition
            to the backdrop...
          */}
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </TransitionChild>

          {/*
            ...and another `TransitionChild` to apply a separate
            transition to the contents.
          */}
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
                <DialogTitle className="text-lg font-bold">
                  Deactivate account
                </DialogTitle>
                <Description>
                  This will permanently deactivate your account
                </Description>
                <p>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => closeModal}>Cancel</button>
                  <button onClick={() => closeModal}>Deactivate</button>
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
