import React, {useState} from "react";
import "./form.css"
import Header from "./NavBar";

const MealForm = () => {
    const [formIngredients, setFormIngredients] = useState([{username: JSON.parse(localStorage.getItem('user'))},{name:''},{ingredient : "", amount : "", unit : ""}]);
    const [submittedForm, setSubmittedForm] = useState(false);
    

    const handleChange = (i, e) => {
        let newFormValues = [...formIngredients];
        newFormValues[i][e.target.name] = e.target.value;
        setFormIngredients(newFormValues);
      }
    
    const addFormFields = () => {
        setFormIngredients([...formIngredients, {ingredient: "", amount: "", unit: ""}])
      }
    
    const removeFormFields = (i) => {
        let newFormValues = [...formIngredients];
        newFormValues.splice(i, 1);
        setFormIngredients(newFormValues)
    }
    
    const handleSubmit = (event) => {
         event.preventDefault();
         fetch('/api/addmeal', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formIngredients)
          }).then(response => response.text()).then(response => {console.log(response);}) 
        setSubmittedForm(true);  
    }

    const handleName = (e) => {
        let newFormValues = [...formIngredients];
        newFormValues[0]['name'] = e.target.value;
        setFormIngredients(newFormValues)
    }

    return(
        <>
            <Header/>
            <div>
                <h1>Submit a New Meal</h1>
                <div className="center">
                    <form  onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Meal Name" onChange={e => handleName(e)}/>
                        
                        {formIngredients.map((element, index) => (
                            <div  key={index}>
                                <input type="text" name="ingredient" placeholder="Ingredient" value={element.ingredient || ""} onChange={e => handleChange(index, e)} />
                                <input type="number" name="amount" pattern="[0-9]*" placeholder="Amount" value={element.amount || ""} onChange={e => handleChange(index, e)} />
                                <select type="text" name="unit" value={element.unit || ""} onChange={e => handleChange(index, e)}>
                                    <option value ="lb">lb</option>
                                    <option value ='tsp'>tsp</option>
                                    <option value ='tbl'>tbl</option>
                                    <option value ='floz'>floz</option>
                                    <option value ='cup'>cup</option>
                                    <option value ='quart'>quart</option>
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
                
                {submittedForm && 
                    <p>Your meal has been added! Add another one or return to the homepage.</p>
                }
            </div>
            
    </>
    )
}

export default MealForm;