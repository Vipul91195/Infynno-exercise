import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";


export const fetchCardata = createAsyncThunk(
    "fetchData",
    async (filter, { getState }) => {
        const state = getState();
        const api_urlData = `https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=${(filter.car_type && filter.car_type.length > 0) ? filter.car_type.join(",") : state.autodigg.car_type.join(',')}&page=${filter.page}&radius=100&year=2011,2021&zip=&price_from=0&price_to=100000`;
        // console.log("fetchCardata", api_urlData);
        const res1 = await axios.get(api_urlData)
        const res2 = await axios.get(api_urlData + "&return=count");
        return { cars: res1.data, count: res2.data.count };
    }
)

export const autodiggSlice = createSlice({
    name: "autodigg",
    initialState: {
        isLoading: false,
        page: 1,
        car_type: ["Used Car"],
        cars: [],
        count: 0,
        body_type: {},
        exterior_color: {},
        interior_color: {},
        transmission: {},
        drivetrain: {},
        fuel_type: {},
        features: {},
        make: {},
        model: {}
    },
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload.cars
            state.count = action.payload.count
            state.body_type = action.payload.body_type
            state.exterior_color = action.payload.exterior_color
            state.interior_color = action.payload.interior_color
            state.transmission = action.payload.transmission
            state.drivetrain = action.payload.drivetrain
            state.fuel_type = action.payload.fuel_type
            state.features = action.payload.features
            state.make = action.payload.make
            state.model = action.payload.model
            state.car_type = action.payload.car_type ? action.payload.car_type : [];
        }
    },
    extraReducers: {

        [fetchCardata.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCardata.fulfilled]: (state, action) => {
            // console.log(action.payload, "heloo")
            state.isLoading = false;
            state.cars = action.payload.cars
            state.count = action.payload.count
        },
        [fetchCardata.rejected]: (state, action) => {
            state.isLoading = false;
        },
    }
});

export const { setCars } = autodiggSlice.actions;
export default autodiggSlice.reducer;  