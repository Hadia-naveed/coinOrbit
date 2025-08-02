import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const coins = cryptosList?.data?.coins || [];
    const filteredData = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);

  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div className="p-4 space-y-6">
      {!simplified && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}


      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cryptos?.map((currency) => (
          <Link
            key={currency.uuid}
            to={`/crypto/${currency.uuid}`}
            className="block bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-300 p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {currency.rank}. {currency.name}
              </h3>
              <img
                src={currency.iconUrl}
                alt={currency.name}
                className="w-8 h-8"
              />
            </div>
            <p className="text-gray-700">Price: {millify(currency.price)}</p>
            <p className="text-gray-700">
              Market Cap: {millify(currency.marketCap)}
            </p>
            <p className="text-gray-700">Daily Change: {currency.change}%</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
