import React from 'react';

const Vision = () => {
  const styles = {
    container: {
      display: 'flex',
      gap: '16px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      padding: '18px'
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#333'
    },
    earSection: {
      display: 'flex',
      gap: '8px',
      marginBottom: '12px'
    },
    leftEar: {
      backgroundColor: '#e3f2fd',
      padding: '7px',
      borderRadius: '5px',
      flex: 1
    },
    rightEar: {
      backgroundColor: '#2196f3',
      color: 'white',
      padding: '7px',
      borderRadius: '5px',
      flex: 1
    },
    earTitle: {
      fontSize: '12px',
      fontWeight: '600',
      marginBottom: '5px'
    },
    earText: {
      fontSize: '10px',
      opacity: 0.7,
      lineHeight: '1.25'
    },
    organicDisease: {
      backgroundColor: '#e3f2fd',
      padding: '7px',
      borderRadius: '5px'
    },
    squintRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    squintLabel: {
      fontSize: '14px',
      fontWeight: '500'
    },
    buttonGroup: {
      display: 'flex'
    },
    yesBtn: {
      backgroundColor: '#2196f3',
      color: 'white',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '4px 0 0 4px',
      fontSize: '12px',
      fontWeight: '600'
    },
    noBtn: {
      backgroundColor: '#f5f5f5',
      color: '#333',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '0 4px 4px 0',
      fontSize: '12px',
      fontWeight: '600'
    },
    remarks: {
      backgroundColor: '#e3f2fd',
      padding: '16px',
      borderRadius: '6px'
    },
    visionGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px'
    },
    visionSection: {
      marginBottom: '16px'
    },
    visionSectionTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#666',
      marginBottom: '8px'
    },
    eyeData: {
      textAlign: 'center'
    },
    eyeLabel: {
      fontSize: '12px',
      color: '#666',
      marginBottom: '4px'
    },
    eyeValue: {
      fontSize: '14px',
      color: '#2196f3',
      fontWeight: '600'
    },
    reportHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    menuIcon: {
      color: '#2196f3',
      fontSize: '18px'
    },
    pdfItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f8f9fa',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      padding: '12px',
      marginBottom: '8px'
    },
    pdfContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    pdfIcon: {
      width: '32px',
      height: '40px',
      backgroundColor: '#d32f2f',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'bold'
    },
    pdfDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    pdfName: {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '4px'
    },
    pdfSize: {
      fontSize: '12px',
      color: '#666'
    },
    deleteIcon: {
      color: '#d32f2f',
      fontSize: '18px'
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '16px'
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#ccc'
    },
    activeDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#2196f3'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Vision Condition</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px', flex: 1}}>
              <div style={styles.leftEar}>
                <h4 style={styles.earTitle}>Left Ear</h4>
                <p style={styles.earText}>Lorem ipsum dolor sit amet amet amet amet met amet consectetur...</p>
              </div>
              <div style={styles.rightEar}>
                <h4 style={styles.earTitle}>Right Ear</h4>
                <p style={styles.earText}>Lorem ipsum dolor sit amet amet amet amet met amet consectetur...</p>
              </div>
            </div>
            <div style={{...styles.organicDisease, flex: 1}}>
              <h4 style={styles.earTitle}>Any Organic Disease of Eye</h4>
              <p style={styles.earText}>Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.</p>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Squint</h3>
          <div style={styles.squintRow}>
            <span style={styles.squintLabel}>Test for Squint Performed</span>
            <div style={styles.buttonGroup}>
              <button style={styles.yesBtn}>Yes</button>
              <button style={styles.noBtn}>No</button>
            </div>
          </div>
          <div style={styles.remarks}>
            <h4 style={styles.earTitle}>Remarks</h4>
            <p style={styles.earText}>Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.</p>
          </div>
        </div>
      </div>

      <div style={styles.rightColumn}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Vision Check</h3>
          <div style={styles.visionSection}>
            <h4 style={styles.visionSectionTitle}>Distant Vision</h4>
            <div style={styles.visionGrid}>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Left Eye</div>
                <div style={styles.eyeValue}>-1D</div>
              </div>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Right Eye</div>
                <div style={styles.eyeValue}>2.5D</div>
              </div>
            </div>
          </div>
          <div style={styles.visionSection}>
            <h4 style={styles.visionSectionTitle}>Near Vision</h4>
            <div style={styles.visionGrid}>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Left Eye</div>
                <div style={styles.eyeValue}>-1D</div>
              </div>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Right Eye</div>
                <div style={styles.eyeValue}>2.5D</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.reportHeader}>
            <h3 style={styles.cardTitle}>Vision Report</h3>
            <div style={styles.menuIcon}>☰</div>
          </div>
          <div style={styles.pdfItem}>
            <div style={styles.pdfContent}>
              <div style={styles.pdfIcon}>PDF</div>
              <div style={styles.pdfDetails}>
                <div style={styles.pdfName}>Name-evidence.pdf</div>
                <div style={styles.pdfSize}>PDF document - 13.7 MB</div>
              </div>
            </div>
            <div style={styles.deleteIcon}>🗑</div>
          </div>
          <div style={styles.pdfItem}>
            <div style={styles.pdfContent}>
              <div style={styles.pdfIcon}>PDF</div>
              <div style={styles.pdfDetails}>
                <div style={styles.pdfName}>Name-evidence.pdf</div>
                <div style={styles.pdfSize}>PDF document - 13.7 MB</div>
              </div>
            </div>
            <div style={styles.deleteIcon}>🗑</div>
          </div>
          <div style={styles.dots}>
            <div style={styles.activeDot}></div>
            <div style={styles.dot}></div>
            <div style={styles.dot}></div>
            <div style={styles.dot}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;