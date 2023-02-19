import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CityForm = (props) => {
  const { showModal } = props;
  // Image File Name
  const [fileName, setFileName] = useState('No file chosen');

  function submitToAPI(data) {
    axios.post('http://localhost:3001/cities', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      alert('City created: ', response);
    }).catch((error) => {
      alert('Error creating city', error);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('city[name]', event.target.name.value);
    data.append('city[description]', event.target.description.value);
    data.append('city[image]', event.target.image.files[0]);
    submitToAPI(data);
    showModal('CLOSE');
  }

  return (
    <div className="px-6 py-6 lg:px-8">
      <h3 className="mb-4 text-2xl text-center font-medium text-gray-900">Create Location</h3>
      <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
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
            Brief description for the location.
          </p>
        </div>
        <div>
          <span className="block mb-2 text-sm font-medium text-gray-900">Photo</span>
          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 p-2 lg:p-4">
            <div className="space-y-1 text-center">
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
                  className="relative flex flex-col justify-center items-center cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
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

CityForm.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default CityForm;
