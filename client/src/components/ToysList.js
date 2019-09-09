import React from 'react'
import { ToysContext } from '../ContextApi/ToysContext'
import ToyThumb from './ToyThumb'

const ToysList = (props) => (
    <ToysContext.Consumer>
        {({ currentUserToys }) =>
        
            <div className="d-flex flex-wrap justify-content-around">
                {console.log(currentUserToys)}
                {currentUserToys.length !== 0 ? (
                    currentUserToys.map((toy, index) => {
                        return (
                            <div key={index}>
                                <ToyThumb
                                    toy = {toy}
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