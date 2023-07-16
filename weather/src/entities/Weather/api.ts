import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import QueryString from "qs";
import { CONFIG } from "../../shared/config";
import { IWeatherGeoData } from './types';


export const weatherGeoApi = createApi({
    reducerPath: 'weatherGeoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.openweathermap.org/geo/1.0/'
    }),
    endpoints(builder) {
        return {
            getByCity: builder.query<IWeatherGeoData[], string>({
                query: (city) => ({
                    url: 'direct?' + QueryString.stringify({
                        q: city,
                        limit: 5,
                        appid: CONFIG.WEATHER.API_KEY
                    }),
                    method: 'GET'
                })
            })
        }
    },
})

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5/'
    }),
    endpoints(builder) {
        return {
            getWeatherByGeo: builder.query<IWeatherGeoData[], {
                lat: IWeatherGeoData['lat']
                lon: IWeatherGeoData['lon']
            }>({
                query: ({
                    lat,
                    lon
                }) => ({
                    url: 'weather?' + QueryString.stringify({
                        lat: lat,
                        lon: lon,
                        appid: CONFIG.WEATHER.API_KEY
                    }),
                    method: 'GET'
                })
            })
        }
    },
})

export const { useGetByCityQuery } = weatherGeoApi
export const { useGetWeatherByGeoQuery } = weatherApi