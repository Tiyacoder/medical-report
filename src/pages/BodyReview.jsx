import React, { useState } from "react";
import LeftReviewPanel from "./LeftReviewPanel";
import RightReviewPanel from "./RightReviewPanel";
import BasicInfoPanel from "./BasicInfoPanel";
import AnatomicalInfoPanel from "./AnatomicalInfoPanel";

export default function BodyReview() {
  const [activeTab, setActiveTab] = useState("Body Condition");

  const tabs = [
    { id: "Basic Information", label: "Basic Information", completed: true },
    { id: "Anatomical Information", label: "Anatomical Information", completed: true },
    { id: "Body Condition", label: "Body Condition", completed: false },
  ];

  const renderPanels = () => {
    switch (activeTab) {
      case "Basic Information":
        return <BasicInfoPanel />;
      case "Anatomical Information":
        return <AnatomicalInfoPanel />;
      case "Body Condition":
      default:
        return (
          <>
            <LeftReviewPanel />
            <RightReviewPanel />
          </>
        );
    }
  };

  return (
    <div style={{ 
      backgroundColor: "#f8f9fa", 
      borderRadius: "8px",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      <h1 style={{ 
        fontSize: "18px", 
        fontWeight: "bold", 
        margin: "12px 0 8px 24px", 
        color: "#333"
      }}>
        Review
      </h1>

      {/* Tabs */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f8f9fa",
        marginBottom: "12px"
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === tab.id ? "#e6f3ff" : "transparent",
              fontSize: "13px",
              color: activeTab === tab.id ? "#007acc" : "#666",
              borderBottom: activeTab === tab.id ? "2px solid #007acc" : "2px solid transparent"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        alignItems: "flex-start",
        flex: 1,
        padding: "0 12px 12px 12px",
        overflow: "hidden"
      }}>
        {/* Static image and buttons */}
        <div style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between"
        }}>
          <div style={{ 
            flex: 1, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            minHeight: 0,
            marginBottom: "8px"
          }}>
            <img 
              src="/images/body.png" 
              alt="Body" 
              style={{ 
                width: "100%", 
                height: "100%",
                objectFit: "contain"
              }} 
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button style={{
              flex: 1,
              background: "#009EFF",
              color: "white",
              padding: "8px 12px",
              border: "none",
              borderRadius: "4px",
              fontSize: "13px"
            }}>
              Fit
            </button>
            <button style={{
              flex: 1,
              background: "white",
              color: "#666",
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "13px"
            }}>
              Unfit
            </button>
          </div>
        </div>

        {/* Changing content */}
        <div style={{ 
          display: "flex", 
          gap: "16px", 
          flex: 1,
          height: "100%",
          overflow: "hidden"
        }}>
          {renderPanels()}
        </div>
      </div>
    </div>
  );
}