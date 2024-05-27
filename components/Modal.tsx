"use client";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import TaskRadioGroup from "./TaskRadioGroup";
import { useRef } from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/solid";

function Modal() {
  const imagePickerRef = useRef<HTMLInputElement>(null);
  const [newTaskInput, setNewTaskInput, setImage, image] = useBoardStore(
    (state) => [
      state.newTaskInput,
      state.setNewTaskInput,
      state.setImage,
      state.image,
    ]
  );
  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  return (
    <>
      {/* Use the `Transition` component at the root level */}
      <Transition appear show={isOpen}>
        <Dialog as="form" className="relative z-10 " onClose={() => closeModal}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <DialogPanel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl  
                bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 pb-2"
                  >
                    Add a Task
                  </DialogTitle>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={newTaskInput}
                      onChange={(e) => setNewTaskInput(e.target.value)}
                      placeholder="Enter a task here..."
                      className="w-full border border-gray-300 rounded-md outline-none p-5"
                    />
                  </div>

                  <TaskRadioGroup />

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        imagePickerRef.current?.click();
                      }}
                      className="w-full bborder border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2
                    focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <PhotoIcon className="h-6 w-6 mr-2 inline-block" />
                      Upload Image
                    </button>
                    {image && (
                      <Image
                        src={URL.createObjectURL(image)}
                        alt="Uplaoded Image"
                        width={200}
                        height={200}
                        className="w-full h-44 object-cover mt-2 filter hover:grayscale transition-all
                        duration-150 cursor-not-allowed"
                        onClick={() => {
                          setImage(null);
                        }}
                      />
                    )}
                    <input
                      type="file"
                      ref={imagePickerRef}
                      hidden
                      onChange={(e) => {
                        if (!e.target.files![0].type.startsWith("image/"))
                          return;
                        setImage(e.target.files![0]);
                      }}
                    />
                  </div>

                  <div>
                    <button></button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
