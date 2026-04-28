import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import StudentCorner from './pages/StudentCorner';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Notices from './pages/Notices';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="academics" element={<Academics />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="student-corner" element={<StudentCorner />} />
          <Route path="mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="notices" element={<Notices />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
