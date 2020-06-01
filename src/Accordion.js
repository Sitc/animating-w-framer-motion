import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  open: {
    opacity: 1, 
    height: "auto"
  },
  closed: {
    opacity: 0, 
    height: 0 
  },
}

const Accordion = () => {

  const [isToggled, setIsToggled] = useState(false)

  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}> The Header</h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: "hidden"}}
            initial="closed" 
            animate="open"
            exit="closed"
          >
          <p>
            I'm baby quinoa hoodie photo booth, pickled meditation fanny pack jianbing tofu bitters tbh fixie pour-over 90's coloring book. 
            Fixie intelligentsia banh mi four dollar toast thundercats distillery succulents try-hard. Tbh VHS vegan, 
            lyft narwhal celiac green juice before they sold out pour-over kombucha roof party jean shorts. 
            Banh mi truffaut listicle activated charcoal try-hard cardigan vape wayfarers master cleanse. 
            Literally affogato brunch chillwave. 
            Intelligentsia air plant kale chips fanny pack flannel wayfarers tousled VHS gochujang put a bird on it keytar man braid.
            Distillery craft beer four dollar toast, prism twee glossier poutine kickstarter blue bottle gluten-free. 
            Salvia tote bag deep v cornhole slow-carb cold-pressed. Palo santo semiotics yr taiyaki distillery hexagon chartreuse street art blog activated charcoal typewriter etsy edison bulb. 
            Williamsburg trust fund fingerstache mumblecore pop-up adaptogen forage, 
            meditation knausgaard crucifix farm-to-table stumptown. Mustache taiyaki pork belly, cred vape kickstarter DIY intelligentsia offal photo booth gochujang copper mug kitsch tbh VHS. 
            Roof party keffiyeh etsy affogato cold-pressed jianbing freegan cliche hoodie poke bushwick authentic fixie intelligentsia.
          </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default Accordion