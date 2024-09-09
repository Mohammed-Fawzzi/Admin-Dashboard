import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Ui/Main";
import Content from "./Ui/Content";
import Profile from "./Components/Profile/Profile";
import Stats from "./Components/Stats/Stats";
import Team from "./Components/Team/Team";
import Event from "./Components/Event/Event";
import LineChartLabel from "./Components/Charts/LineChartLabel";

const App = () => {
  // Initialize dark mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Open & Close Toggle
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  // Open & Close Menu
  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className={`${darkMode && "dark"} font-Quicksand`}>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <Main>
          <Content>
            <Stats darkMode={darkMode} />
            <div className="flex flex-col gap-3 lg:flex-row">
              <Team />
              <Event />
            </div>
          </Content>
          <Profile darkMode={darkMode} />
        </Main>
        
        <LineChartLabel />
      </div>
    </>
  );
};

export default App;
