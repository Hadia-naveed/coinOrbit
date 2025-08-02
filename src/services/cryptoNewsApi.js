// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const createRequest = (url) => ({ url });

// export const newsApi = createApi({
//   reducerPath: 'newsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_NEWSAPI_URL,
//     prepareHeaders: (headers) => {
//       headers.set('X-BingApis-SDK', 'true');
//       headers.set('x-rapidapi-host', import.meta.env.VITE_NEWSAPI_HOST);
//       headers.set('x-rapidapi-key', import.meta.env.VITE_RAPIDAPI_KEY);
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) =>
//         createRequest(
//           `/news?q=${encodeURIComponent(newsCategory)}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
//         ),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = newsApi;
