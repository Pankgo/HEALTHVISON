import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/components/layout';
import Main from './pages/view/mainView';
import Review from './pages/view/review';
import MyProfile from './pages/view/myProfile';
import Recommend from './pages/view/recommend';
import Statistics from './pages/view/statistics';
import SignUp from './pages/view/signUp';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/review" element={<Review />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/MyProfile" element={<Navigate to="/profile" replace />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
