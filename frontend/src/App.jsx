import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Status from './Status';
import UploadFile from './pages/UploadFiles';
function App() {

  return (
    <div>
      <UploadFile />
      <Status />
    </div>
  );
}

export default App;
