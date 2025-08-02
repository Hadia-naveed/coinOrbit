// import React from 'react';
// import millify from 'millify';
// import HTMLReactParser from 'html-react-parser';
// import { FaChartLine } from 'react-icons/fa'; // Using React Icons
// import { useGetExchangesQuery } from '../services/cryptoApi';
// import Loader from './Loader';

// const Exchanges = () => {
//   const { data, isFetching } = useGetExchangesQuery();
//   const exchangesList = data?.data?.exchanges;

//   if (isFetching) return <Loader />;

//   return (
//     <div className="p-4">
//       <h1></h1>
//       <div className="space-y-4 mt-4">

//         {/* 
//         // Original commented block using Ant Design Typography and Avatar
//         {exchangesList.map((exchange) => (
//           <div key={exchange.uuid} className="border rounded-lg shadow-sm bg-white">
//             <button
//               type="button"
//               className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
//             >
//               <div className="grid grid-cols-4 w-full text-left items-center">
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold">{exchange.rank}.</span>
//                   <img src={exchange.iconUrl} alt={exchange.name} className="w-6 h-6 rounded-full" />
//                   <span className="font-medium">{exchange.name}</span>
//                 </div>
//                 <div>${millify(exchange.volume)}</div>
//                 <div>{millify(exchange.numberOfMarkets)}</div>
//                 <div>{millify(exchange.marketShare)}%</div>
//               </div>
//             </button>
//             <div className="px-4 pb-4">
//               {HTMLReactParser(exchange.description || '')}
//             </div>
//           </div>
//         ))} 
//         */}

//         {/* ✅ Updated functional version using only React Icons */}
//         {exchangesList?.map((exchange, index) => (
//           <div key={`${exchange.uuid}-${index}`} className="border rounded-lg shadow-sm bg-white">
//             <button
//               type="button"
//               className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
//             >
//               <div className="grid grid-cols-4 w-full text-left items-center">
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold">{exchange.rank}.</span>
//                   <img
//                     src={exchange.iconUrl}
//                     alt={exchange.name}
//                     className="w-6 h-6 rounded-full"
//                   />
//                   <span className="font-medium flex items-center gap-1">
//                     <FaChartLine className="text-blue-500" />
//                     {exchange.name}
//                   </span>
//                 </div>
//                 <div>${millify(exchange.volume)}</div>
//                 <div>{millify(exchange.numberOfMarkets)}</div>
//                 <div>{millify(exchange.marketShare)}%</div>
//               </div>
//             </button>
//             <div className="px-4 pb-4 text-sm text-gray-600">
//               {HTMLReactParser(exchange.description || '')}
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Exchanges;
