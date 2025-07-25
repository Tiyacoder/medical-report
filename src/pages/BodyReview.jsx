import React, { useState } from "react";
import LeftReviewPanel from "./LeftReviewPanel";
import RightReviewPanel from "./RightReviewPanel";
import BasicInfoPanel from "./BasicInfoPanel";
import AnatomicalInfoPanel from "./AnatomicalInfoPanel";

export default function BodyReview() {
  const [activeTab, setActiveTab] = useState("Body Condition");
  const [isFit, setIsFit] = useState(true);

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

      <div style={{ 
        display: "flex", 
        gap: "20px", 
        alignItems: "flex-start",
        flex: 1,
        padding: "0 12px 12px 12px",
        overflow: "hidden"
      }}>
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
              src={isFit ? "/images/body.png" : "/images/bodyimage.png"}
              alt="Body" 
              style={{ 
                width: "100%", 
                height: "100%",
                objectFit: "contain"
              }} 
            />
          </div>
          <div style={{ 
            display: "flex", 
            gap: "8px",
            border: "2px solid #009EFF",
            borderRadius: "6px",
            padding: "4px",
            marginTop: "-12px"
          }}>
            <button 
              onClick={() => setIsFit(true)}
              style={{
                flex: 1,
                background: isFit ? "#009EFF" : "white",
                color: isFit ? "white" : "#666",
                padding: "8px 12px",
                border: isFit ? "none" : "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "13px",
                cursor: "pointer"
              }}
            >
              Fit
            </button>
            <button 
              onClick={() => setIsFit(false)}
              style={{
                flex: 1,
                background: !isFit ? "#009EFF" : "white",
                color: !isFit ? "white" : "#666",
                padding: "8px 12px",
                border: !isFit ? "none" : "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "13px",
                cursor: "pointer"
              }}
            >
              Unfit
            </button>
          </div>
        </div>

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