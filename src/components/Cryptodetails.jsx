import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../services/cryptoApi';
import { AiOutlineDollarCircle, AiOutlineThunderbolt, AiOutlineTrophy, AiOutlineFund, AiOutlineExclamationCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineBolt } from 'react-icons/md';
import LineChart from './LineChart';
import Loader from './Loader';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data: cryptoDetailsData, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
console.log(cryptoDetailsData)
  const cryptoDetails = cryptoDetailsData?.data?.coin;

  if (isFetching) return <Loader />;
  if (!cryptoDetails) return <div className="text-red-500 p-4">No data available for this coin.</div>;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${millify(cryptoDetails.price)}`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: 'Rank',
      value: cryptoDetails.rank,
      icon: <AiOutlineFund />,
    },
    {
      title: '24h Volume',
      value: `$ ${millify(cryptoDetails.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: 'Market Cap',
      value: `$ ${millify(cryptoDetails.marketCap)}`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: 'All-time-high (daily avg.)',
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails.numberOfExchanges,
      icon: <MdOutlineBolt />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? <AiOutlineCheckCircle /> : <AiOutlineExclamationCircle />,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(cryptoDetails.supply.total)}`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(cryptoDetails.supply.circulating)}`,
      icon: <AiOutlineDollarCircle />,
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </h2>
        <p className="text-gray-600">
          {cryptoDetails.name} live price in US dollars. View value statistics, market cap, and supply.
        </p>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Select Time Period</label>
        <select
          value={timeperiod}
          onChange={(e) => setTimeperiod(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
      </div>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Value Statistics</h3>
          <p className="text-gray-600 mb-4">
            An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.
          </p>
          <div className="space-y-4">
            {stats.map(({ icon, title, value }) => (
              <div key={title} className="flex items-center justify-between bg-white p-4 rounded shadow hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 text-blue-600 text-lg">{icon} <span className="text-gray-800">{title}</span></div>
                <span className="text-gray-900 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Other Stats Info</h3>
          <p className="text-gray-600 mb-4">
            An overview showing some additional stats of {cryptoDetails.name}, including supply and exchanges.
          </p>
          <div className="space-y-4">
            {genericStats.map(({ icon, title, value }) => (
              <div key={title} className="flex items-center justify-between bg-white p-4 rounded shadow hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 text-blue-600 text-lg">{icon} <span className="text-gray-800">{title}</span></div>
                <span className="text-gray-900 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">What is {cryptoDetails.name}?</h3>
        <div className="prose max-w-none text-gray-700">
          {cryptoDetails.description ? HTMLReactParser(cryptoDetails.description) : 'No description available.'}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{cryptoDetails.name} Links</h3>
        <div className="space-y-4">
          {cryptoDetails.links?.map((link) => (
            <div key={link.name + link.url} className="flex justify-between items-center bg-white p-4 rounded shadow hover:scale-105 transition-transform duration-300">
              <span className="text-gray-800 font-medium">{link.type}</span>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline break-words"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
