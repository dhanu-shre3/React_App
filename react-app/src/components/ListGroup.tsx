import { MouseEvent } from "react";
import { Fragment } from "react";
function ListGoup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    //Event handling
    const handleClick = (event: MouseEvent) => console.log(event);
 

  return (
    <Fragment>
        <h1>List</h1> 
         {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
           {items.map((item, index) => (
            <li 
               className= "list-group-item" 
               key={item} 
               onClick={handleClick}
               >
                {item}
            </li>
            
            ))}
        
        </ul>
    </Fragment>
  );
}

export default ListGoup;
