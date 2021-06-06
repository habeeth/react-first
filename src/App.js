import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NumberList from './NumberList';
import Pagination from './Pagination';

function App() {
  const [name, setName] = useState([]);
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [previousPagrUrl, setpreviousPageUrl] = useState();
  const [nextPageUrl, setnextPageUrl] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        console.log("res.data.", res.data);
        setloading(false);
        setpreviousPageUrl(res.data.previous);
        setnextPageUrl(res.data.next);
        setName(res.data.results.map(i => { return i.name }))
      })
    return () => {
      cancel()
    }
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setcurrentPageUrl(previousPagrUrl)
  }

  return (
    <>
      <NumberList namess={name} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={previousPagrUrl ? gotoPrevPage : null}
      />
    </>
  );
}



export default App;
