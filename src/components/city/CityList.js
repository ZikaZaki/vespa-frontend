import React from 'react';
import PropTypes from 'prop-types';

const CityList = (props) => {
  const { cities, handleDialog } = props;
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
                  {/* <!-- Delete Dialogue toggle --> */}
                  <button
                    value={city.id}
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-red-600"
                    onClick={() => handleDialog(
                      `Are you sure you want to delete ${city.name}?`,
                      true,
                      city.id,
                      '',
                    )}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6 pointer-events-none"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
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
  handleDialog: PropTypes.func.isRequired,
};

export default CityList;
