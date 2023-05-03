import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";

const MealCard = (props) => {
    const navigate = useNavigate();
    const {meal, needReload, user} = props;
    const [isShown, setIsShown] = useState(false);
   
    const handleClick = (e) => {
        e.preventDefault();
        setIsShown(!isShown);
    }

    const remove = (id) => {
        let removed = {_id: id, username:user};
        fetch('/api/remove', {
            method: 'POST',
            body: JSON.stringify(removed),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .catch(error => console.error(error));
        needReload();
    }

    const update = (meal) => {
        navigate('/update', {state: meal});
    }

    return(
            <div className="card">
                <button onClick={handleClick}>{meal.name}</button>
                {isShown && 
                <>
                    <div className="card-list">
                        <ul> 
                            {meal.ingredients.map((ingredient,i) => {
                                return (
                                <ul>
                                    <li>{ingredient.Amount} of {ingredient.IngredientName}</li>
                                </ul>
                            )
                            })}
                        </ul>
                    </div>
                    <button onClick = {() => update(meal)} className="special">Update</button>
                    <button onClick={() => remove(meal._id)} className = "special">Remove</button>
                </>
                }
            
            </div>
    
    )
}

export default MealCard;