import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'


const ComboBox = (props) => {
  const {
    items,
    selected,
    setSelected,
    displayField,
    queryField,
    label,
    name,
    placeholder,
    imageField,
    // className,
    ...rest
  } = props;

  const [query, setQuery] = useState('');

  const filteredItems = 
    items.length > 0 && query === ''
      ? items
      : items.filter((item) =>
          item[queryField]
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="flex w-full">
      <Combobox value={selected} onChange={setSelected} >
        <div className="relative w-full">
          <label
            htmlFor={name}
            className="block uppercase mb-2 tracking-wide text-sm font-medium text-gray-900"
          >
            {label}
            <div className="relative mt-1 w-full p-[1px] cursor-default overflow-hidden">
              <Combobox.Input
                id={name}
                name={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                displayValue={selected ? (selected) => selected[displayField] : ''}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center justify-center py-1 px-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 drop-shadow-lg ring-black ring-opacity-10 focus:outline-none sm:text-sm">
                {filteredItems.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 normal-case text-gray-600">
                    Nothing found...
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <Combobox.Option
                      key={item.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div
                            className={`flex justify-start items-center gap-2 w-full truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            <img 
                              src={item[imageField]} 
                              className="inline-flex w-10 h-10 rounded-full" 
                              alt="item-image"
                            />
                            {item[displayField]}
                          </div>
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </label>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
