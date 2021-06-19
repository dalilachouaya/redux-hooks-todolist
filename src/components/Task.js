import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { deleteTask, editTask, completeTask } from "../Redux";
import { OverlayTrigger, Popover} from "react-bootstrap";
import { AiOutlineEdit,AiOutlineClose } from "react-icons/ai";

const Task = ({ task }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edit, setEdit] = useState(task.description);
    const dispatch = useDispatch();
    const handleRemove = (e) => {
    e.preventDefault();
    dispatch(deleteTask(task.id));
    };

    const handleClick = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, description: edit }));
    setShow(false)
    setEdit("");
    //console.log(edit);
    };

    const handleChange = (e) => {
    setEdit(e.target.value);
    };

    const handleDone = () => {
    dispatch(completeTask(task.id));
    };

                /****************popover *****************/
    const popover = (
        <Popover id="popover-basic" style={{ backgroundImage : "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"}}>
        <Popover.Content style={{height:"3rem"}}>
        <AiOutlineClose onClick={handleClose} size="1.5rem" color="red" />
        </Popover.Content>
        <Popover.Title as="h3" style={{ backgroundImage : "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)" ,height:"4rem"}}><input onChange={handleChange} defaultValue={task.description} type="text" /> <AiOutlineEdit onClick={handleClick} size="1.5rem" color="blue" /></Popover.Title>
        </Popover>

    );
    
                /************x***************x************/

return (
    <>
    <motion.li
        initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
        animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
        whileHover={{scale: 0.9,transition: { type: "spring", duration: 0.1 },}}
        exit={{x: "-60vw",scale: [1, 0],transition: { duration: 0.5 },backgroundColor: "rgba(255,0,0,1)",}}
        key={task.id} className="card">
        <textarea  readOnly="readonly" type="text" value={task.description} style={{textDecoration: task.isDone ? "line-through" : "none",color: task.isDone ? "red" : "black",}}/> 

        <div className="btns">
            <OverlayTrigger trigger="click" placement="right" overlay={ popover} show={show} onHide={handleClose}>
                <motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} onClick={handleShow} >{" "}
                    <span role="img" aria-label="edit">  🖊️ </span>{" "}
                </motion.button>
            </OverlayTrigger>

                <motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} style={{ color: "green" }} onClick={handleDone} >
                    {task.isDone ? " ✔️" : " ❌"} 
                </motion.button>
                <motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} style={{ color: "red" }} onClick={handleRemove}>{" "}
                    <span role="img" aria-label="delete">🗑️</span>{" "}
                </motion.button>{" "}
        </div>
        {task.isDone && <span className="completed">done</span>}
    </motion.li>

    </>
);
};

export default Task;

