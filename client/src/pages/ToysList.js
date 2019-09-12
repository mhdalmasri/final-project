import React from 'react'
import { ToysContext } from '../ContextApi/ToysContext'
import ToyThumb from '../components/ToyThumb'
import AddToy from "../components/AddToy"

const divStyle = {
    width: "15rem"
  };
const ToysList = (props) => (
    <ToysContext.Consumer>
        {({ currentUserToys }) =>
        
            <div className="d-flex flex-wrap justify-content-around">
                {console.log(currentUserToys)}
                <div className="card m-2" style={divStyle}>
    <img src="" className="card-img-top" alt="img" />
    <div className="card-body">
    
       <AddToy/>
    </div>
  </div>
               
                {currentUserToys.length !== 0 ? (
                    currentUserToys.map((toy, index) => {
                        return (
                            <div key={index}>
                                <ToyThumb
                                    toy = {toy}
                                    page="ToysList"
                                />
                            </div>
                        );
                    })
                ) : (
                        <div className="mt-5 bold"> No results are found, Sorry 😞 </div>
                    )}
            </div>
        }
    </ToysContext.Consumer>

)

export default ToysList