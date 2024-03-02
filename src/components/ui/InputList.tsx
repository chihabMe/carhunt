"use client";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import type IMake from "@/interfaces/IMake";
interface Props {
  items: string[];
  selected: string;
  setItem: (item: string) => void;
}
const MakeList = (props: Props) => {
  const [query, setQuery] = useState("");
  const filterMakes = query === "" ? props.items : props.items.filter(
    (item) =>
      item
        ?.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, "")),
  );

  return (
    <div className=" relative w-48 ">
      <Combobox value={props.selected} onChange={props.setItem}>
        <div className="relative mt-1 ">
          <label className="hidden" htmlFor="query_input" />
          <Combobox.Input
            id="query_input"
            className="w-full    outline-none   bg-transparent border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(item: string) => item}
          />
          <Combobox.Button
            aria-label="toggle the menu"
            className="absolute inset-y-0 right-0 flex items-center pr-2"
          >
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
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 py-2 px-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {props.items.length === 0 && query !== ""
              ? (
                <div className="relative cursor-default select-none py-2 px-2 text-title">
                  Nothing found.
                </div>
              )
              : (
                filterMakes.map((item, idx) => (
                  <Combobox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative capitalize cursor-default rounded-md  select-none py-2 pl-10 pr-4 ${
                        active ? " bg-primary text-white" : "text-title"
                      }`}
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected
                          ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )
                          : null}
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
