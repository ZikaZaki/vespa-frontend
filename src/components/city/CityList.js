import axios from 'axios';
import React, { useState, useEffect } from 'react';
import avatar from '../../assets/images/avatar.jpg';

const CityList = (props) => {
  const cities = props.cities;

  return (
  /* CityList */
  <div className="p-2 h-full overflow-x-auto shadow-md bg-white rounded-br-md rounded-bl-md sm:rounded-br-lg sm:rounded-bl-lg">
    <div class="overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-300">
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
            <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span>{city.id}</span>
              </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
              <img className="w-10 h-10 rounded-full" src={city.image_url} alt="Jese image"/>
              <div className="pl-3">
                <div className="text-base font-semibold">{city.name}</div>
              </div>  
            </th>
            <td className="px-6 py-4">
              {city.description ? city.description : 'No description'}
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 hover:underline">Delete city</a>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default CityList;






// <div id="editUserModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
//   <div className="relative w-full h-full max-w-2xl md:h-auto">
//     {/* <!-- Modal content --> */}
//     <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//       {/* <!-- Modal header --> */}
//       <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//           Edit user
//         </h3>
//         <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
//           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
//         </button>
//       </div>
//       {/* <!-- Modal body --> */}
//       <div className="p-6 space-y-6">
//         <div className="grid grid-cols-6 gap-6">
//           <div className="col-span-6 sm:col-span-3">
//             <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
//             <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
//             <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
//             <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
//             <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
//             <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
//             <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
//             <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
//           </div>
//           <div className="col-span-6 sm:col-span-3">
//             <label for="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
//             <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
//           </div>
//         </div>
//       </div>
//       {/* <!-- Modal footer --> */}
//       <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
//       </div>
//     </form>
//   </div>
// </div>