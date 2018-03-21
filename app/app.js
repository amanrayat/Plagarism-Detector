import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';
import CourseTable from './components/CourseTable';
import Submission from './components/Submission';
import Login from './components/Login';
import Register from './components/Register';

ReactDOM.render(
  <div>
    <Navbar />
    <div className={'container p-y-5 '}>
      <hr/>
    </div>
    {/*<Submission />*/}
    {/*<Login/>*/}
    <Register />
  </div>
  , root);
