// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const CityList = (props) => {
  const { cities } = props;

  return (
  /* CityList */
    <div className="p-2 h-full overflow-x-auto shadow-md bg-white rounded-br-md rounded-bl-md sm:rounded-br-lg sm:rounded-bl-lg">
      <div className="overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-300">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-bg_tertiary">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            { cities && cities.map((city) => (
              <tr key={city.id} className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <span>{city.id}</span>
                  </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img className="w-10 h-10 rounded-full" src={city.image_url} alt={city.name} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{city.name}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {city.description ? city.description : 'No description'}
                </td>
                <td className="px-6 py-4">
                  {/* <!-- Modal toggle --> */}
                  <a href="##" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 hover:underline">Delete city</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.instanceOf(Array).isRequired,
};

export default CityList;
