import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
const Authentication = () => {
  return (
    <div>
      <Grid container>
        {/* 12 layers in grid */}
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img
            className="h-full w-full"
            src="https://i.pinimg.com/564x/ba/f3/3b/baf33bd4e2999f8ddd77678b2b5c1aba.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <div className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">Social Pradise</h1>
                <p className="text-center text-sm w-[70]">
                  Connecting lives, Sharing memories.
                </p>
              </div>
              {/* <Login/> */}
              {/* <Register/> */}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
