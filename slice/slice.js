import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

// const intialState = {
//     cars: [],
// }


const api_urlData = "https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&price_from=0&price_to=100000";

export const fetchCardata = createAsyncThunk(
    "fetchData",
    async () => {
        console.log("fetchCardata");
        const res = await axios.get(api_urlData)
        return res;
    }

)

export const autodiggSlice = createSlice({
    name: "autodigg",
    initialState: {
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
            // console.log(action.payload, "slkd");
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
        [HYDRATE]: (state, action) => {
            // console.log(action.payload, "hyd");
            return { ...state, ...action.payload.autodigg };


        },

        extraReducers: {

            [fetchCardata.fulfilled]: (state, action) => {
                console.log(action.payload, "heloo")
                // state.cars = action.payload
            },
            // [fetchCardata.pending]: (state, action) => {
            //     state.cars = "loading..."
            // },
            // [fetchCardata.rejected]: (state, action) => {
            //     state.cars = "try again"
            // },

        }
    }
});

export const { setCars } = autodiggSlice.actions;
export default autodiggSlice.reducer;  