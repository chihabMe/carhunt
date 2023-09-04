"use client";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";
const makes = [
  { name: "tesla", id: "1" },
  { name: "toyota", id: "2" },
  { name: "mazzda", id: "3" },
];
interface ICar {
  name: string;
}
const MakeList = () => {
  const [selected, setSelected] = useState(makes[0]);

  const [make, setMake] = useState("");

  () => {};

  const filterMakes =
    make === ""
      ? makes
      : makes.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(make.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <div className=" relative w-40">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1 ">
          <Combobox.Input
            className="w-full   outline-none   bg-transparent border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            onChange={(event) => setMake(event.target.value)}
            displayValue={({ name }: { name: string }) => name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setMake("")}
        >
          <Combobox.Options className="absolute mt-1 py-2 px-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {makes.length === 0 && make !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-title">
                Nothing found.
              </div>
            ) : (
              filterMakes.map((item) => (
                <Combobox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-default rounded-md  select-none py-2 pl-10 pr-4 ${
                      active ? " bg-primary text-white" : "text-title"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};
export default MakeList;
