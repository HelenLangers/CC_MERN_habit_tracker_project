
import "./Counter.css"

const Counter = ({entries}) => {

    const numberOfEntries = entries.length
    
    
    return(
        <div className="counter-container">
       <h3> You have cooked </h3>
       <h3 className="number-of-meals">{numberOfEntries}</h3>
       <h3>delicious meals!</h3>
        </div>
    )
};

export default Counter;