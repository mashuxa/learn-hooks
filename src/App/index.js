import React, {useState} from 'react';
import {FaHome, FaHashtag, FaCalendarAlt, FaClock, FaMapMarkedAlt, FaSearch} from 'react-icons/fa';
import './styles.scss';

export default (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const selectedClass = (num) => {
    return currentStep === num ? 'navigation__item--selected' : ''
  };

  return (
    <div className="app">
      <header className="app__header">
        header
      </header>
      <nav className="app__navigation navigation">
        <FaHome className={`${props.data} navigation__item ${selectedClass(0)}`} onClick={setCurrentStep.bind(null, 0)} />
        <FaHashtag className={`${props.data} navigation__item ${selectedClass(1)}`} onClick={setCurrentStep.bind(null, 1)} />
        <FaCalendarAlt className={`navigation__item ${selectedClass(2)}`} onClick={setCurrentStep.bind(null, 2)} />
        <FaClock className={`navigation__item ${selectedClass(3)}`} onClick={setCurrentStep.bind(null, 3)} />
        <FaMapMarkedAlt className={`navigation__item ${selectedClass(4)}`} onClick={setCurrentStep.bind(null, 4)} />
        <FaSearch className={`navigation__item ${selectedClass(5)}`} onClick={setCurrentStep.bind(null, 5)} />
      </nav>
      <main className="app__main">
        main
      </main>
      <footer className="app__footer">
        footer
      </footer>

    </div>
  );
};
