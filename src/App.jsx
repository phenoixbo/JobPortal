import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import JobApplyForm from './components/JobApplyForm';
import JobList from './components/JobList';
import "./styles/styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/jobapplyform-apply" element={<JobApplyForm />} />
      <Route path="/joblist" element={<JobList />} />
    </Routes>
  );
}

export default App;
