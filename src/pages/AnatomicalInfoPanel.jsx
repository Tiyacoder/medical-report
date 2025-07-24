import React, { useState, Suspense, lazy } from "react"; 

const componentMap = {
  Neurological: lazy(() => import("./Neurological")),
  Hearing: lazy(() => import("./Hearing")),
  Vision: lazy(() => import("./Vision")),
  Chest: lazy(() => import("./Chest")),
  Heart: lazy(() => import("./Heart")),
  NervousSystem: lazy(() => import("./NervousSystem")),
  Abdomen: lazy(() => import("./Abdomen")),
  Lungs: lazy(() => import("./Lungs")),
};

export default function AnatomicalInfoPanel() {
  const [selectedTab, setSelectedTab] = useState("Neurological");
  const SelectedComponent = componentMap[selectedTab];

  return (
    <div>
      <div style={{ 
        display: "flex", 
        marginBottom: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "8px"
      }}>
        {Object.keys(componentMap).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              display: "flex",
              height: "30px",
              padding: "8px 18px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1",
              backgroundColor: selectedTab === tab ? "#ffffff" : "transparent",
              color: selectedTab === tab ? "#333" : "#666",
              border: "none",
              borderRight: "1px solid #B7C8E5",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: selectedTab === tab ? "500" : "400",
              boxShadow: selectedTab === tab ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              if (selectedTab !== tab) {
                e.target.style.backgroundColor = "#e8f4fd";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTab !== tab) {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            {tab === "NervousSystem" ? "Nervous System" : tab}
          </button>
        ))}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <SelectedComponent />
      </Suspense>
    </div>
  );
}