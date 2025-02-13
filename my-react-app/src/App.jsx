import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Fetch data once on mount

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default App