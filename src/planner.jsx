import React, {useState, useEffect} from "react";
import Header from "./NavBar";

import "./planner.css";

const Planner = () => {
    const [phonenumber, setPhonenumber] = useState('');
    const [mealCount, setMealCount] = useState('');
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {phonenumber: phonenumber, mealCount: mealCount}
        let response = await (await fetch(`/api/updatePlanData/${currentUser}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })).text(); 
        console.log(response);

    }

    const getData = async () => {
        let response = await(
            await fetch(`https://food-scheduler2000.herokuapp.com/api/getPlanData/${currentUser}` , {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })
          ).json();
          setPhonenumber(response.phonenumber);
          setMealCount(response.mealCount);
    }
    
    useEffect(() => {
        getData();
    },[])


    return(
        <>
            <Header/>
            <h1>Meal Planner</h1>
            <h2>Current settings are shown below. Texts are sent around 12PM every Sunday!</h2>
            <div className="plannerform">
                
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <label>Phone Number</label>
                        <br/>
                        <input type="text" name="user" placeholder="Phone Number" value={phonenumber || ""} onChange={e => setPhonenumber(e.target.value)}/>
                        <br/>
                        <label>Meal Count</label>
                        <br/>
                        <input type="text" name="pw" placeholder="Meal Count" value={mealCount|| ""} onChange={e => setMealCount(e.target.value)}/>
                        
                    </div>

                    <div className="button-section-login">
                        <button className="button submit" type="submit">Update</button>
                    </div>
            </form>
            
        </div>
        
    </>
    )
}

export default Planner;