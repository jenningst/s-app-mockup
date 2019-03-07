import React from 'react';
import './styles/IndividualCourse.css';

const IndividualCourse = () => {
  return (
    <div className="course-page">
      <header>A Header Bar</header>
      <section className="course-content">
        <section className="main">
          <div className="sub-content">Main Content A</div>
          <div className="sub-content">Main Content B</div>
          <div className="sub-content">Main Content C</div>
          <div className="sub-content">Main Content D</div>
          <div className="sub-content">Main Content E</div>
          <div className="sub-content">Main Content F</div>
        </section>
        <aside className="overview-sidebar">
          <div className="sidebar-content">Aside Content A</div>
          <div className="sidebar-content">Aside Content B</div>
          <div className="sidebar-content">Aside Content C</div>
          <div className="sidebar-content">Aside Content D</div>
        </aside>
      </section>
    </div>
  );
};

export default IndividualCourse;