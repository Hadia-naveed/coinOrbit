// import React, { useState } from 'react';
// import moment from 'moment';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import { useGetCryptosQuery } from '../services/cryptoApi';
// import Loader from './Loader';

// const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

// const News = ({ simplified }) => {
//   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
//   const { data } = useGetCryptosQuery(100);
//   const { data: cryptoNews } = useGetCryptoNewsQuery({
//     newsCategory,
//     count: simplified ? 6 : 12,
//   });

//   if (!cryptoNews?.value) return <Loader />;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {!simplified && (
//         <div className="col-span-full mb-4">
//           <select
//             className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setNewsCategory(e.target.value)}
//           >
//             <option value="Cryptocurrency">Cryptocurrency</option>
//             {data?.data?.coins?.map((currency) => (
//               <option key={currency.name} value={currency.name}>
//                 {currency.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {cryptoNews.value.map((news, i) => (
//         <div
//           key={i}
//           className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
//         >
//           <a
//             href={news.url}
//             target="_blank"
//             rel="noreferrer"
//             className="block p-4 h-full flex flex-col justify-between"
//           >
//             <div>
//               <div className="flex justify-between items-start mb-4">
//                 <h4 className="text-lg font-semibold mr-2">{news.name}</h4>
//                 <img
//                   src={news?.image?.thumbnail?.contentUrl || demoImage}
//                   alt="news"
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//               </div>

//               <p className="text-sm text-gray-700 mb-4">
//                 {news.description.length > 100
//                   ? `${news.description.substring(0, 100)}...`
//                   : news.description}
//               </p>
//             </div>

//             <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={
//                     news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
//                   }
//                   alt="provider"
//                   className="w-6 h-6 rounded-full"
//                 />
//                 <span>{news.provider[0]?.name}</span>
//               </div>
//               <span>{moment(news.datePublished).startOf('ss').fromNow()}</span>
//             </div>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default News;
