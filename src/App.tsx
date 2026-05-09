/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Where from "./pages/Where";
import Accommodation from "./pages/Accommodation";
import ThingsToDo from "./pages/ThingsToDo";
import EventDetails from "./pages/EventDetails";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="where" element={<Where />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="things-to-do" element={<ThingsToDo />} />
          <Route path="event-details" element={<EventDetails />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
