import React, { useState } from "react";
import arrow from "../assets/arrow-svg.svg";

export default function AccordionList({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="list-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          id="collapse-icon"
          aria-expanded={isOpen}
          src={arrow}
          alt="arrow"
        />
      </div>
      <div className="list-item-container" aria-expanded={!isOpen}>
        {items.map((item, i) => (
          <div key={i} className="list-item">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
