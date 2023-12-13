import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Doctors = lazy(() => import("../pages/Doctors/Doctors"));
const MRList = lazy(() => import("../pages/MRList/MRList"));
const Report = lazy(() => import("../pages/Report/Report"));
const Visit =lazy(()=>import("../pages/Dashboard/Visit"))
const DoctorsDOB =lazy(()=>import("../pages/Dashboard/DoctorsDOB"))
const OldVisits =lazy(()=>import("../pages/Dashboard/OldVisits"))
const DocotorsDateOfAnniversary =lazy(()=>import("../pages/Dashboard/DocotorsDateOfAnniversary"))

const CustomRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/DoctorsDob" element={<DoctorsDOB />} />
        <Route exact path="/OldVisits" element={<OldVisits />} />
        <Route exact path="/DocotorsDateOfAnniversary" element={<DocotorsDateOfAnniversary />} />
        <Route exact path="/visit" element={<Visit />} />
        <Route exact path="/Doctors" element={<Doctors />} />
        <Route exact path="/MRList" element={<MRList />} />
        <Route exact path="/Reports" element={<Report />} />
      </Routes>
    </Suspense>
  );
};

export default CustomRoutes;
