import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTask } from "../Redux";
import Task from "./Task";
import { AnimatePresence, motion } from "framer-motion";


const ListTask = () => {

    const todos = useSelector((state) => state.listItem);
    const filter = useSelector((state) => state.filterItem);
    const [filtertext, setFiltertext] = useState(filter);
    const dispatch = useDispatch();
    const handleFilterAll = () => { dispatch(filterTask(filtertext)); setFiltertext("all"); };
    const handleFilterDone = () => { dispatch(filterTask(filtertext)); setFiltertext("completed"); };
    const handleFilternotDone = () => { dispatch(filterTask(filtertext)); setFiltertext("incompleted"); };
    const Toggle = () => filtertext === "completed" ? todos.filter((el) => el.isDone === true) : filtertext === "incompleted" ? todos.filter((el) => el.isDone === false) : todos;
    /* {
        if(filtertext === "all"){ return todos}
        else if (filtertext === "completed"){return todos.filter(el=>el.isDone === true)}
        else if (filtertext === "incompleted"){return todos.filter(el=>el.isDone === false)}
    } */

    const tab = Toggle();

    return (
    <>
    <div className="displaytodos">
        <div className="buttons">
            <motion.button whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} onClick={handleFilterAll} > {" "} ALL </motion.button> 
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleFilterDone} > {" "} COMPLETED </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleFilternotDone}> {" "} INCOMPLETED{" "} </motion.button>
        </div>
        <AnimatePresence> {tab.map((todo,index) => ( <div key={index}> <Task task={todo} /></div> ))} </AnimatePresence>
    </div>
    </>
);
};

export default ListTask;
