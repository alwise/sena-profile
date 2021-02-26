import React from 'react';
import './App.scss';
import ProfessionalSummary from './views/professional-summary';
import Education from './views/education'
import Experience from './views/experience';
import ProjectsAndTools from './views/technologies-social-media';
function App() {
  return (
    <div>
      <ProfessionalSummary></ProfessionalSummary>
      
       <Education></Education>
       <hr/>
       <Experience></Experience>
       <hr/>
       <ProjectsAndTools/>
       <hr/>
       <footer>
           <p>Alwise Studio Inc. &copy; {new Date().getFullYear()}</p>
       </footer>
    </div>
  );
}

export default App;
