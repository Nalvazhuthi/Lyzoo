import React, { useState, useRef, useEffect } from "react";

interface DropDownProps {
  values: string[];
  placeholder?: string;
  value?: string;
  onChange: (event: { target: { value: string } }) => void;
}

const DropDown: React.FC<DropDownProps> = ({ values, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (val: string) => {
    setIsOpen(false);
    onChange({ target: { value: val } }); // mimic native event
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {value || placeholder || "Select an option"}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {values.map((val) => (
            <li
              key={val}
              className={`dropdown-item ${val === value ? "selected" : ""}`}
              onClick={() => handleSelect(val)}
            >
              {val}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default DropDown;
