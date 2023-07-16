import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, weatherGeoApi } from "../../entities/Weather/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { weatherSlice } from "../../entities/Weather/model";

export const weatherStore = configureStore({
    reducer: {
        [weatherGeoApi.reducerPath]: weatherGeoApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        weatherSlice: weatherSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(weatherGeoApi.middleware).concat(weatherApi.middleware)
})

setupListeners(weatherStore.dispatch)