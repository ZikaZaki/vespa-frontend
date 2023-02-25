import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MotorcycleForm = (props) => {
  const { showModal } = props;
  // Image File Name
  const [fileName, setFileName] = useState('No file chosen');

  function submitToAPI(data) {
    axios.post('http://localhost:3001/motorcycles', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('motorcycle[model_no]', event.target.model_no.value);
    data.append('motorcycle[name]', event.target.name.value);
    data.append('motorcycle[finance_fee]', event.target.finance_fee.value);
    data.append('motorcycle[purchase_fee]', event.target.purchase_fee.value);
    data.append('motorcycle[production_date]', event.target.production_date.value);
    data.append('motorcycle[description]', event.target.description.value);
    data.append('motorcycle[image]', event.target.image.files[0]);
    submitToAPI(data);
    showModal('CLOSE');
  }

  return (
    <div className="p-4 md:p-6">
      <h3 className="mb-4 text-2xl text-center font-medium text-gray-900">Create Bike</h3>
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-3/5 ">
            <div className="w-full px-3 mb-2">
              <label
                htmlFor="model_no"
                className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900"
              >
                Model No
                <input
                  type="text"
                  name="model_no"
                  id="model_no"
                  placeholder="example (e.g. 2021-001)"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                  required
                />
              </label>
            </div>
            <div className="w-full px-3 mb-2">
              <label
                htmlFor="production_date"
                className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900"
              >
                Production Date
                <input
                  type="date"
                  name="production_date"
                  id="production_date"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                  required
                />
              </label>
            </div>
          </div>
          <div className="w-2/5 md:w-2/5 px-3 mb-2">
            <label
              htmlFor="image"
              className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900"
            >
              Photo
              <div className="flex justify-center mt-1 normal-case rounded-md border-2 border-dashed border-gray-300 p-2 lg:p-4">
                <div className="text-center cursor-pointer">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col text-sm text-gray-600">
                    <label
                      htmlFor="image"
                      className="flex flex-col justify-center items-center cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <span className="normal-case">{fileName}</span>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={({ target: { files } }) => {
                          setFileName(files[0].name);
                        }}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="w-full px-3 mb-2">
          <label
            htmlFor="name"
            className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900 mt-0"
          >
            Model Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="example (e.g. Honda CB500X)"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
              required
            />
          </label>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-2">
            <label
              htmlFor="finance_fee"
              className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900"
            >
              Finance Fee
              <input
                type="number"
                name="finance_fee"
                id="finance_fee"
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                required
              />
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-2">
            <label
              htmlFor="purchase_fee"
              className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900"
            >
              Purchase Fee
              <input
                type="number"
                name="purchase_fee"
                id="purchase_fee"
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                required
              />
            </label>
          </div>
        </div>

        <div className="w-full  px-3 mb-2">
          <label htmlFor="description" className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="description"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
              rows={3}
              defaultValue=""
            />
          </label>
          <p className="mt-2 text-sm text-gray-500">
            Brief description for the bike.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-8 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center border px-4 py-2 w-full md:w-1/3 rounded-lg text-sm font-medium text-center text-dark_limerick border-dark_limerick bg-white shadow-sm hover:text-white hover:bg-very_dark_limerick"
          >
            Save
          </button>
          <button
            type="button"
            className="inline-flex justify-center border px-4 py-2 w-full md:w-1/3 rounded-lg text-sm font-medium text-center text-red-700 border-red-700 bg-white shadow-sm hover:text-white hover:bg-red-700"
            onClick={() => showModal('CLOSE')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

MotorcycleForm.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default MotorcycleForm;
