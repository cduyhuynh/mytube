import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Share from 'components/Share';
import Feed from 'components/Feed';

export default (
  <Router>
    <Routes>
      <Route path='/' exact element=<Layout content={<Feed />}/> />
      <Route path='/share' exact element=<Layout content={<Share />}/> />
    </Routes>
  </Router>
);