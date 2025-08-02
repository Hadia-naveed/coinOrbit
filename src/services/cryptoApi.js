import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CRYPTO_API_URL,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-host', import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST);
      headers.set('x-rapidapi-key', import.meta.env.VITE_RAPIDAPI_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        `coin/${coinId}/history?timeperiod=${timeperiod}`,//query endpoints with customs
    }),
    getExchanges: builder.query({
      query: () => '/exchanges',//simple query endpoint 
    }),
  }),
});

// ✅ Add this part to export the auto-generated hooks
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;


