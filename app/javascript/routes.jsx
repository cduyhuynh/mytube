import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Share from 'components/Share';

export default (
  <Router>
    <Routes>
      <Route path='/' exact element=<Layout /> />
      <Route path='/share' exact element=<Layout content={<Share />}/> />
    </Routes>
  </Router>
);