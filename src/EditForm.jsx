import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import "./form.css";
import Header from './NavBar';

const EditForm = () => {
    
    let meal = useLocation();
    meal = meal.state;
    const navigate = useNavigate();
    const [formIngredients, setFormIngredients] = useState(meal);

    const handleName =  (e) => {
        let newFormValues = {...formIngredients};
        newFormValues['name'] = e.target.value;
        setFormIngredients(newFormValues);
    }

    const handleIngredient = (i, e) => {
        let newFormValues = {...formIngredients};
        newFormValues.ingredients[i].IngredientName = e.target.value;
        setFormIngredients(newFormValues);
    }
    
    const handleAmount = (i, e) => {
        let newFormValues = {...formIngredients};
        newFormValues.ingredients[i].Amount[0] = e.target.value;
        setFormIngredients(newFormValues);
    }

    const handleUnit = (i, e) => {
        let newFormValues = {...formIngredients};
        newFormValues.ingredients[i].Amount[1] = e.target.value;
        setFormIngredients(newFormValues);
    }
    
    const addFormFields = () => {
        let newFormValues = {...formIngredients}
        newFormValues.ingredients.push({"IngredientName" : "", "Amount": ['','']})
        setFormIngredients(newFormValues);
      }
    
    const removeFormFields = (i) => {
        let newFormValues = {...formIngredients};
        newFormValues.ingredients.splice(i, 1);
        setFormIngredients(newFormValues)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        let newFormValues = {...formIngredients}
        newFormValues['username'] = JSON.parse(localStorage.getItem('user'));;

        await fetch('https://food-scheduler2000.herokuapp.com/api/updateMeal', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFormValues)
          }).then((response) => response.text()).then(response => {console.log(response);})
        navigate('/Home'); 
    }

    return(
        <>
            <Header/>
            <h1>Update Meal</h1>
            <div className="center">
                <form  onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Meal Name" value = {formIngredients.name} onChange={e => handleName(e)}/>
                    {meal.ingredients.map((element, index) => (
                    <div key={index}>
                        <input type="text" name="ingredient" placeholder="Ingredient" value={element.IngredientName || ""} onChange={e => handleIngredient(index, e)} />
                        <input type="number" name="amount" pattern="[0-9]*" value={element.Amount[0] || ""} placeholder="Amount" onChange={e => handleAmount(index, e)} />
                        <select type="text" name="unit" value={element.Amount[1] || ""} onChange={e => handleUnit(index, e)}>
                            <option value ="lb">lb</option>
                            <option value ='tsp'>tsp</option>
                            <option value ='tbl'>tbl</option>
                            <option value ='floz'>floz</option>
                            <option value ='cup'>cup</option>
                            <option value ='quart'>quart</option>
                            <option value = 'tbs'>tbs</option>
                            <option value =''></option>
                        </select>
                        <button type="button"  className="remove" onClick={() => removeFormFields(index)}>Remove</button> 
                    </div>
                    ))}
                    <div className="button-section">
                        <button className="button add" type="button" onClick={() => addFormFields()}>Add Ingredient</button>
                        <button className="button submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            
    </>
    )
}

export default EditForm;