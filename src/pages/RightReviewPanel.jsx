import React from 'react';

const RightReviewPanel = () => {
  return (
    <div style={{ 
      width: '356px', 
      padding: '20px', 
      fontFamily: 'Roboto, sans-serif',
      border: '1px solid #B7C8E580',
      borderRadius: '6px'
    }}>
      <div style={{
        border: '1px solid #B7C8E580',
        borderRadius: '6px',
        padding: '16px',
        marginBottom: '24px'
      }}>
        <h2 style={{
          color: '#1E1E1E',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '16px',
          marginBottom: '16px',
          margin: '0 0 16px 0'
        }}>
          Special Remarks
        </h2>

        <div style={{ marginBottom: '12px' }}>
          <div style={{
            color: '#7A8699',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            marginBottom: '4px'
          }}>
            Re-Examination Requirement
          </div>
          <div style={{
            color: '#09A2E3',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '20px'
          }}>
            Yes
          </div>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <div style={{
            color: '#7A8699',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            marginBottom: '4px'
          }}>
            Physician Specialist Opinion Required
          </div>
          <div style={{
            color: '#09A2E3',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '20px'
          }}>
            Yes
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{
            color: '#7A8699',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            marginBottom: '4px'
          }}>
            Permitted for Duties
          </div>
          <div style={{
            color: '#09A2E3',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '20px'
          }}>
            Yes
          </div>
        </div>

        <div style={{
          borderRadius: '6px',
          background: 'rgba(9, 162, 227, 0.10)',
          padding: '12px',
          marginBottom: '12px'
        }}>
          <div style={{
            color: '#1E1E1E',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '8px'
          }}>
            Is Suffering From
          </div>
          <div style={{
            color: '#818181',
            fontSize: '12px',
            fontWeight: 400,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
          </div>
        </div>

        <div style={{
          borderRadius: '6px',
          background: '#09A2E3',
          padding: '12px',
          marginBottom: '0'
        }}>
          <div style={{
            color: '#FFF',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '8px'
          }}>
            Repeat Examination After
          </div>
          <div style={{
            color: '#FFF',
            fontSize: '12px',
            fontWeight: 400
          }}>
            Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis. ipsu...
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        padding: '12px',
        alignItems: 'center',
        gap: '16px',
        borderRadius: '6px',
        border: '1px solid #B7C8E5',
        background: '#FDFDFE',
        marginBottom: '24px'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM5 19H19V7H5V19ZM12 17C10.6333 17 9.41267 16.629 8.338 15.887C7.26267 15.1457 6.48333 14.1833 6 13C6.48333 11.8167 7.26267 10.8543 8.338 10.113C9.41267 9.371 10.6333 9 12 9C13.3667 9 14.5877 9.371 15.663 10.113C16.7377 10.8543 17.5167 11.8167 18 13C17.5167 14.1833 16.7377 15.1457 15.663 15.887C14.5877 16.629 13.3667 17 12 17ZM12 15.5C12.9333 15.5 13.7833 15.279 14.55 14.837C15.3167 14.3957 15.9167 13.7833 16.35 13C15.9167 12.2167 15.3167 11.604 14.55 11.162C13.7833 10.7207 12.9333 10.5 12 10.5C11.0667 10.5 10.2167 10.7207 9.45 11.162C8.68333 11.604 8.08333 12.2167 7.65 13C8.08333 13.7833 8.68333 14.3957 9.45 14.837C10.2167 15.279 11.0667 15.5 12 15.5ZM12 14.5C11.5833 14.5 11.2293 14.354 10.938 14.062C10.646 13.7707 10.5 13.4167 10.5 13C10.5 12.5833 10.646 12.2293 10.938 11.938C11.2293 11.646 11.5833 11.5 12 11.5C12.4167 11.5 12.7707 11.646 13.062 11.938C13.354 12.2293 13.5 12.5833 13.5 13C13.5 13.4167 13.354 13.7707 13.062 14.062C12.7707 14.354 12.4167 14.5 12 14.5Z" fill="#09A2E3"/>
        </svg>
        <div style={{
          color: '#000',
          fontSize: '16px',
          fontWeight: 600
        }}>
          Other Details
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '12px', width: '356px' }}>
        <button style={{
          display: 'flex',
          padding: '10px 32px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          flex: '1 0 0',
          borderRadius: '30px',
          border: '3px solid #09A2E3',
          background: 'transparent',
          color: '#09A2E3',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.422px',
          cursor: 'pointer'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clipPath="url(#clip0_60_27095)">
              <path d="M12.5 4L13.91 5.41L8.33 11H20.5V13H8.33L13.91 18.59L12.5 20L4.5 12L12.5 4Z" fill="#09A2E3"/>
            </g>
            <defs>
              <clipPath id="clip0_60_27095">
                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24.5 0)"/>
              </clipPath>
            </defs>
          </svg>
          Back
        </button>
        <button style={{
          display: 'flex',
          padding: '14px 32px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          flex: '1 0 0',
          borderRadius: '30px',
          background: '#09A2E3',
          border: 'none',
          color: '#FFF',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.422px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RightReviewPanel;