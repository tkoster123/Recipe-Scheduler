import React, {useEffect, useState} from 'react';
import MealCard from './Meal';
import Header from './NavBar'

function Home() {
  const [backendData, setBackendData] = useState();
  const [reload, setReload] = useState(false); //Updated when a meal is either added,updated, or deleted
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getData = async (user) => {
    console.log(user);
    let response = await(
      await fetch(`/api/${user}` , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).json();
    setBackendData(response);
  }

  const startReload = () => {
    setReload(!reload);
  }

  useEffect( () =>  {
    getData(currentUser);
  }, [reload]);
  
  return (
    <div>
        <Header/>
        <h1>Your Meals</h1>
        <div className='row'>
          {(typeof backendData === "undefined") ? (
            <p> Loading...</p>
            ) : (
              backendData.map((meal,i) => {
                return (
                <div className='column'>
                  <MealCard key = {i} meal = {meal} needReload = {startReload} user = {currentUser}/>
                </div>
              )})
            )}
          </div>
    </div>
    
    
  )

  
}

export default Home;