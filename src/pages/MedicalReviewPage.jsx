import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Stepper from "./Stepper";
import BodyReview from "./BodyReview";

export default function MedicalReviewPage() {
  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "24px" }}>
        <Header />
        <Stepper />
        <BodyReview />
      </div>
    </div>
  );
}
