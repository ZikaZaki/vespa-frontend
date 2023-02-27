import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ComboBox from '../ComboBox';

const ReservationForm = (props) => {
  const { 
    showModal,
    user,
    motorcycles,
    cities
   } = props;
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedMotorcycle, setSelectedMotorcycle] = useState(motorcycles[0]);

  function submitToAPI(data) {
    axios.post('http://localhost:3001/reservations', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('reservation[reserve_date]', event.target.reserve_date.value);
    data.append('reservation[returning_date]', event.target.returning_date.value);
    data.append('reservation[city_id]', selectedCity.id);
    data.append('reservation[motorcycle_id]', selectedMotorcycle.id);
    data.append('reservation[user_id]', user.id);
    // data.append('reservation[notes]', event.target.notes.value);
    submitToAPI(data);
    showModal('CLOSE');
  }

  return (
    <div className="p-4 md:p-6 transition-all duration-300">
      <h3 className="mb-6 text-2xl text-center font-medium text-gray-900">Create Reservation</h3>
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col justify-center items-center w-full ">
          <div className="flex w-full flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-2">
              <label
                htmlFor="reserve_date"
                className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-600"
              >
                Reserve Date
                <input
                  type="date"
                  name="reserve_date"
                  id="reserve_date"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                  required
                />
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-2">
              <label
                htmlFor="returning_date"
                className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900"
              >
                Returning Date
                <input
                  type="date"
                  name="returning_date"
                  id="returning_date"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="w-full  px-3 mb-2">
          <ComboBox
            items={cities}
            selected={selectedCity}
            setSelected={setSelectedCity}
            label="Location"
            name="city_id"
            queryField="name"
            displayField="name"
            imageField="image_url"
            placeholder="Choose a city"
          />
        </div>
        <div className="w-full  px-3 mb-2">
          <ComboBox
            items={motorcycles}
            selected={selectedMotorcycle}
            setSelected={setSelectedMotorcycle}
            label="Motorcycle"
            name="motorcycle_id"
            queryField="name"
            displayField="name"
            imageField="image_url"
            placeholder="Choose a motorcycle"
          />
        </div>
        <div className="w-full  px-3 mb-2">
          <label htmlFor="notes" className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900">
            Notes
            <textarea
              id="notes"
              name="notes"
              placeholder="additional notes about the reservation...."
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5"
              rows={3}
              defaultValue=""
            />
          </label>
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

ReservationForm.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default ReservationForm;
