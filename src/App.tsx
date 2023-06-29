import React, { Suspense } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import routes from './routes';
import Layout from './components/Layout';

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div className='loadingPage'>Loading...</div>} />
      <Router>
        <Layout>
          <Routes>
            {routes.map((page, key) => {
              return (<Route key={key} path={page.path} element={<page.component />} />)
            })}
          </Routes>
        </Layout>
      </Router>
    </React.Fragment>
  )
}

export default App
