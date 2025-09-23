"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faCompass, faHome, faStore, faGear, faBrain, faUser } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

function MyComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    toggleVisibility();
    toggleSidebar();
  };

  return (
    <div className={`aside ${expanded ? "expanded" : ""}`}>
      <button className="btn-principal" onClick={handleClick}>
        <FontAwesomeIcon className="icone-btn" icon={faCompass} />
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            className="ul-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="a-item" href="/">
                <FontAwesomeIcon className="icones" icon={faHome} /> Início
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="a-item" href="/about">
                <FontAwesomeIcon className="icones" icon={faUser} /> sobre
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="a-item" href="/skills">
                <FontAwesomeIcon className="icones" icon={faBrain} /> cursos
              </Link>
            </motion.li>
             <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="a-item" href="/projetos">
                <FontAwesomeIcon className="icones" icon={faBrain} /> projetos
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MyComponent;
