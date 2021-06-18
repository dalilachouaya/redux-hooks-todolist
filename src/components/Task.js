import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { motion } from "framer-motion";
import { deleteTask, editTask ,completeTask} from '../Redux'


const Task = ({task }) => {
    const [edit,setEdit]=  useState(task.description);
    const dispatch=useDispatch();
    const handleRemove=(e)=>{
        e.preventDefault() ;
        dispatch(deleteTask(task.id));
    }

    const handleClick=(e)=>{
        e.preventDefault();
        dispatch(editTask({id:task.id,description:edit}));
        setEdit('');
        //console.log(edit);
    }

    const handleChange = (e)=>{
            setEdit(e.target.value);
    }
    const handleDone=()=>{
        dispatch(completeTask(task.id));
    }

    return (
        <motion.li
        initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
        animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
        whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
        }}
        exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
        }}
        key={task.id}
        className="card"
    >
        <textarea
        onChange={handleChange}
        defaultValue={task.description}
        type='text' style={{textDecoration : task.isDone ? "line-through" : "none" ,color: task.isDone ?"red" : "black"}}
        />
        <div className="btns">
        <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
        > 🖊️ </motion.button>

        <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={handleDone}
            >
            
            { task.isDone ? " ✔️": " ❌"}
        </motion.button>
        
        <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "red" }}
            onClick={handleRemove}
        > 🗑️ </motion.button>{" "}
        
        </div>
        {task.isDone && <span className="completed">done</span>}

        </motion.li>

    )
}

export default Task
