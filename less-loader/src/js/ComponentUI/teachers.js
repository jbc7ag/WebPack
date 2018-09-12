import React from 'react'
import '../../css/teacher.styl'


function Teachers (props){

    return (
            <li className="Teacher">
                {props.name}
                <a href={"https://twitter.com/"+props.twitter}> {props.twitter} </a>       
                
            </li>
       )
}

export default Teachers