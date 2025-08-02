import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import Loader from './Loader';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data)

  if (isFetching) return <Loader />;

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2.5">Global Crypto Stats</h2>
      <div className="h-1.5 w-58 mx-auto bg-gradient-to-r from-[#070236] via-[#474598] to-[#2b37b1] rounded-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mt-5 ">
        <div className="bg-white p-4 rounded-xl shadow hover:scale-103 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total Cryptocurrencies</h3>
          <p>{globalStats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:scale-103 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total Exchanges</h3>
          <p>{millify(globalStats.totalExchanges)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:scale-103 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total Market Cap</h3>
          <p>${millify(globalStats.totalMarketCap)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:scale-103 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total 24h Volume</h3>
          <p>${millify(globalStats.total24hVolume)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:scale-103 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total Markets</h3>
          <p>{millify(globalStats.totalMarkets)}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 mb-5">
        <h2 className="text-2xl sm:text-3xl font-bold">Top 10 Cryptos In The World</h2>
        <Link to="/currencies" className="text-blue-600 hover:underline">Show more</Link>
      </div>
      <Cryptocurrencies simplified />

      
    </div>
  );
};

export default Homepage;
