import React, { useState } from 'react'
import TodoCreate from './TodoCreate'
import Todolist from './Todolist'

const Todo = () => {

    const [getData, setData] = useState( [{
        id : 1,
        nama :'wandy',
        ucapan : 'selamat'
    }]);
    
    const dataCreate = (x) => {
        setData(getData.concat(x))
        console.log(getData)
    }

    return (
        <div>
            <h1>Todo list</h1>
            <TodoCreate onCreate={dataCreate} />
            <Todolist propsData={getData}/>

        </div>
    )
}

export default Todo
