import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Modal from './Modal';
import Accordion from './Accordion';
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Nav from "./Nav";

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <h1>Header</h1>
      </Header>
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
      <Container>
        <h2>
          Super Cool
        </h2>
        <button onClick={() => setToggle(true)}>Toggle</button>
        {/* <input 
          type="range" 
          min="-100" 
          max="100" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}/> */}

          <Modal isToggled={isToggled} setToggle={setToggle}>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} />
            </Card>
          </Modal>
          <Accordion />
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
