import {Routes, Route} from "react-router-dom";
import AllMeetUpsPage from "./components/pages/AllMeetUps";
import NewMeetUpPage from "./components/pages/NewMeetUps";
import Fav from "./components/pages/Fav";
import MainNavigation from "./components/layout/Main1Navigation";

function App() {
  return (
      <div>
          <MainNavigation />
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} exact />
          <Route path="/all" element={<AllMeetUpsPage />} exact />
          <Route path="/new" element={<NewMeetUpPage />} />
          <Route path="/fav" element={<Fav/>} />
        </Routes>


  </div>
  );
}

export default App;
