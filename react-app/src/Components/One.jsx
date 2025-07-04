import { useState } from "react";

function One(){
const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      backgroundColor: isDark ? "black" : "white", 
      color: isDark ? "white" : "black", 
      height: "100vh", 
      padding: "20px" 
    }}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setIsDark(!isDark)}>
        Change Theme
      </button>
    </div>
  );
     
}

export default One