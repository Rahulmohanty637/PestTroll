import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "../src/Pages/Home.jsx";
import LoginPage from "../src/Pages/LoginPage.jsx";
import SignupPage from "../src/Pages/SignupPage.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PredictionPage from "./Pages/PredictionPage.jsx";
import DiseaseDetection from "./Components/DiseaseDetection.jsx";
import PesticidePrediction from "./Components/PesticidePrediction.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="diseasedetection" element={<DiseaseDetection/>} />
      <Route path="pesticideprediction" element={<PesticidePrediction/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
