import React from "react";
import ListTask from "./components/ListTask";
import Addtask from "./components/Addtask";
import "./App.css";
import { motion } from "framer-motion";
const App = () => {
  return (
      <div className="App">
          <motion.h1 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 0.5 }} whileHover={{ scale: 1.1 }} >
            <span role="img" aria-label="list"> {" "} 📝 TODO List{" "} </span>
          </motion.h1>
          <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1 }}>
            <Addtask />
            <ListTask />
          </motion.div>
    </div>
  );
};

export default App;
