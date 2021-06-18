import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, } from '../Redux';
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Addtask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const handleClick = () => {
        if (task !=="") {
            // id: Math.floor(Math.random()*1000)
            dispatch(addTask({ id: new Date().getTime(),description: task, isDone: false  }));
            setTask('');
        }
        else alert('Ouups. ¿ , WHERE IS THE TASK 😵‍💫!!!');
        }
    const handleChange=(e)=>{
        setTask(e.target.value);
   // console.log(e.target.value)
        }

    return (
        <div className="addTodos">
            <input type='text'
                placeholder='enter a new task...'
                value={task}
                onChange={handleChange} className="todo-input"/>
                <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="add-btn"
            onClick={handleClick} >
        <GoPlus />
        </motion.button>
        <br />

        </div>
    );
}

export default Addtask

            