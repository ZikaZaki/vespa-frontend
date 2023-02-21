import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReservationGrid = (props) => {
  const { reservations, handleDialog } = props;
  const navigate = useNavigate();

  const fetchReservationDetails = async (event, reservation) => {
    event.preventDefault();
    navigate(`/reservations/${reservation.id}`, { state: { reservation } });
  };

  return (
  /* reservationsGrid */
    <div className="flex justify-center md:justify-start items-center gap-5 py-4 flex-wrap">
      { reservations && reservations.map((reservation) => (
        <div key={reservation.id} className="max-w-screen-xsm bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="##">
            <img className="rounded-t-lg" src={reservation.image_url} alt="" />
          </a>
          <div className="p-4">
            <a href="##">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{reservation.motorcycle}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              {reservation.city}
            </p>
            <div className="flex justify-center items-center gap-2">
              <Link
                to={`/reservations/${reservation.id}`}
                onClick={(e) => fetchReservationDetails(e, reservation)}
              >
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
              </Link>
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
                  `Are you sure you want to delete ${reservation.motorcycle}?`,
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ReservationGrid.propTypes = {
  reservations: PropTypes.instanceOf(Array).isRequired,
  handleDialog: PropTypes.func.isRequired,
};

export default ReservationGrid;
