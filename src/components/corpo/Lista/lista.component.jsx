import React from 'react';

function CLista(props) {
    const {palavras} =
    props
    
    let listada = palavras.map((palavra,index)=>{
        return <li id={palavra} key={index} className='listed'>{palavra}</li>
    })
    return ( 
        <ul id='list'>
            {listada}
        </ul>
     );
}

export default CLista;
