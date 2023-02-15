import React from 'react';
import avatar from '../../assets/images/avatar.jpg';


const CityGrid = (props) => {
  const cities = props.cities;

  return (
  /* CityGrid */
  <div className="flex items-center gap-5 py-4 flex-wrap">
    { cities && cities.map((city) => (
      <div class="max-w-screen-xsm bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="#">
          <img class="rounded-t-lg" src={city.image_url} alt="" />
        </a>
        <div class="p-4">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{city.name}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">{city.description}</p>
          <div className="flex justify-center items-center gap-2">
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-gray-800">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                strokeWidth={1.5}
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-gray-800">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                strokeWidth={1.5}
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </a>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg hover:bg-bg_secondary hover:text-red-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                strokeWidth={1.5}
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default CityGrid;


// <div className="relative p-2 overflow-x-auto shadow-md bg-white sm:rounded-br-lg sm:rounded-bl-lg">
//     {/* SearchBar with Grid & List Buttons */}
//     <div className="flex items-center justify-between p-3 bg-white shadow-md sm:rounded-lg">
//         <label for="table-search" className="sr-only">Search</label>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5 text-gray-500"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 fill-rule="evenodd"
//                 clip-rule="evenodd">
//               </path>
//             </svg>
//           </div>
//           <input
//             id="table-search-users"
//             type="text"
//             placeholder="Search for cities..."
//             className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
//         <div>
//           {/* <!-- Table-View Button --> */}
//           <button
//             id="gridViewButton"
//             type="button"
//             className="inline-flex items-center px-3 py-1.5 bg-bg_tertiary text-gray-500 font-medium text-sm border border-gray-300 rounded-bl-md rounded-tl-md hover:bg-bg_secondary hover:text-gray-600 focus:outline-none focus:bg-white focus:border-blue-600 focus:text-blue-600">
//             <svg
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               fill="none"
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
//             </svg>
//           </button>
//           {/* Grid-View Button */}
//           <button
//             id="gridViewButton"
//             type="button"
//             className="inline-flex items-center px-3 py-1.5 bg-bg_tertiary text-gray-500 font-medium text-sm border border-gray-300 rounded-br-md rounded-tr-md hover:bg-bg_secondary hover:text-gray-600 focus:outline-none focus:bg-white focus:border-blue-600 focus:text-blue-600">
//             <svg
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               fill="none"
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     <div className="relative p-2 overflow-x-auto shadow-md sm:rounded-lg">
//       <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//           <table className="w-full text-sm text-left text-gray-500 border-4 border-gray-700">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//               <tr>
//                 <th scope="col" className="p-4">
//                   <div className="flex items-center">
//                     <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                     <label for="checkbox-all-search" className="sr-only">checkbox</label>
//                   </div>
//                 </th>
//                   <th scope="col" className="px-6 py-3">
//                     Name
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Position
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Status
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Action
//                   </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                     <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
//                   </div>
//                 </td>
//                 <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
//                   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/>
//                   <div className="pl-3">
//                     <div className="text-base font-semibold">Neil Sims</div>
//                     <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
//                   </div>  
//                 </th>
//                 <td className="px-6 py-4">
//                   React Developer
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   {/* <!-- Modal toggle --> */}
//                   <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//               </tr>
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                     <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
//                   </div>
//                 </td>
//                 <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"/>
//                   <div className="pl-3">
//                     <div className="text-base font-semibold">Bonnie Green</div>
//                     <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
//                   </div>
//                 </th>
//                 <td className="px-6 py-4">
//                   Designer
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   {/* <!-- Modal toggle --> */}
//                   <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//               </tr>
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                     <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
//                   </div>
//                 </td>
//                 <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image"/>
//                   <div className="pl-3">
//                     <div className="text-base font-semibold">Jese Leos</div>
//                     <div className="font-normal text-gray-500">jese@flowbite.com</div>
//                   </div>
//                 </th>
//                 <td className="px-6 py-4">
//                   Vue JS Developer
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   {/* <!-- Modal toggle --> */}
//                   <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//               </tr>
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                     <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
//                   </div>
//                 </td>
//                 <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image"/>
//                   <div className="pl-3">
//                     <div className="text-base font-semibold">Thomas Lean</div>
//                     <div className="font-normal text-gray-500">thomes@flowbite.com</div>
//                   </div>
//                 </th>
//                 <td className="px-6 py-4">
//                   UI/UX Engineer
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   {/* <!-- Modal toggle --> */}
//                   <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//               </tr>
//               <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                     <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
//                   </div>
//                 </td>
//                 <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image"/>
//                   <div className="pl-3">
//                     <div className="text-base font-semibold">Leslie Livingston</div>
//                     <div className="font-normal text-gray-500">leslie@flowbite.com</div>
//                   </div>
//                 </th>
//                 <td className="px-6 py-4">
//                   SEO Specialist
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   {/* <!-- Modal toggle --> */}
//                   <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         {/* <!-- Edit user modal --> */}
//         <div id="editUserModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
//             <div className="relative w-full h-full max-w-2xl md:h-auto">
//                 {/* <!-- Modal content --> */}
//                 <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                     {/* <!-- Modal header --> */}
//                     <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
//                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                             Edit user
//                         </h3>
//                         <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
//                             <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
//                         </button>
//                     </div>
//                     {/* <!-- Modal body --> */}
//                     <div className="p-6 space-y-6">
//                         <div className="grid grid-cols-6 gap-6">
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
//                                 <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
//                                 <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
//                                 <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
//                                 <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
//                                 <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
//                                 <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
//                                 <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
//                             </div>
//                             <div className="col-span-6 sm:col-span-3">
//                                 <label for="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
//                                 <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!-- Modal footer --> */}
//                     <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
//                         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//   </div>
