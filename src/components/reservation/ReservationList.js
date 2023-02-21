import React from 'react';
import PropTypes from 'prop-types';

const ReservationList = (props) => {
  const { reservations, handleDialog } = props;

  return (
  /* ReservationList */
    <div className="p-2 h-full overflow-x-auto shadow-md bg-white rounded-br-md rounded-bl-md sm:rounded-br-lg sm:rounded-bl-lg">
      <div className="overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-300">
        <table className="w-full table-fixed text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-bg_tertiary">
            <tr>
              <th scope="col" className="px-6 py-3 w-4">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                MOTORCYCLE
              </th>
              <th scope="col" className="px-6 py-3">
                CITY
              </th>
              <th scope="col" className="px-6 py-3">
                RESERVE DATE
              </th>
              <th scope="col" className="px-6 py-3">
                RETURNING DATE
              </th>
              <th scope="col" className="text-center px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            { reservations && reservations.map((reservation) => (
              <tr key={reservation.id} className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                    {reservation.id}
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <div className="text-base font-semibold">{reservation.motorcycle}</div>
                </th>
                <td className="px-6 py-4">
                  <div className="text-base font-semibold">{reservation.city}</div>
                </td>
                <td className="px-6 py-4">
                   {reservation.reserve_date}
                </td>
                <td className="px-6 py-4">
                   {reservation.returning_date}
                </td>
              <td className="px-6 py-4">
                {/* <!-- View, Edit & Delete Dialogue toggle --> */}
                <button
                  value={reservation.id}
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-gray-800"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 pointer-events-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button
                  value={reservation.id}
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-gray-800"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 pointer-events-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
                <button
                  value={reservation.id}
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-red-600"
                  onClick={() => handleDialog(
                    `Are you sure you want to delete the ${reservation.motorcycle} reservation?`,
                    true,
                    reservation.id,
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

ReservationList.propTypes = {
  reservations: PropTypes.instanceOf(Array).isRequired,
  handleDialog: PropTypes.func.isRequired,
};

export default ReservationList;
