"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ICar from "@/interfaces/ICar";
import Button from "@/components/ui/Button";
interface Props {
  car: ICar;
}
const CarDetailsModal = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <Button handleClick={onOpen} className="!py-3 w-full">
        View More
      </Button>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-10 " onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90vw] relative max-w-sm max-h-[90vh] transform overflow-hidden rounded-2xl bg-white    text-left align-middle shadow-xl transition-all  ">
                  <Dialog.Title
                    as="div"
                    className="w-full flex justify-end w-full   "
                  >
                    <Button
                      handleClick={onClose}
                      className="!px-1 absolute top-1 right-1 !py-1 rounded-full hover:!bg-red-400 group  !bg-light-bg outline-none dark:!bg-dark-bg"
                    >
                      <XMarkIcon className="w-6 h-6 text-title group-hover:text-white  " />
                    </Button>
                    <CarImags
                      images={["/hero.png", "/hero1.png", "/hero2.png"]}
                    />
                  </Dialog.Title>
                  <div className="  px-2.5 py-2.5">
                    <CarDetails car={car} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const CarImags = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-center animate-fadeIn bg-primary rounded-md  ">
        <Image
          alt="image"
          src={currentImage}
          width={200}
          height={200}
          className="hover:opacity-50 w-[200px] h-[140px]"
        />
      </div>
      <ul className="w-full flex justify-around">
        {images.map((image, idx) => (
          <li
            className={`hover:bg-primary rounded-md p-2 cursor-pointer ${
              currentImage === image && "bg-primary"
            }`}
            key={idx}
            onClick={() => setCurrentImage(image)}
          >
            <Image alt="image" src={image} width={90} height={90} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CarDetails = ({ car }: { car: ICar }) => {
  return (
    <div className="flex gap-2 flex-col font-medium text-title   text-sm">
      {Object.entries(car).map(([key, value], idx) => (
        <CarDetailItem key={idx} name={key} value={value} />
      ))}
    </div>
  );
};
const CarDetailItem = ({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) => {
  return (
    <div className="flex justify-between">
      <span className="capitalize font-bold">{name}</span>
      <span>{value}</span>
    </div>
  );
};
export default CarDetailsModal;