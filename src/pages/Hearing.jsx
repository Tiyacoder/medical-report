import React from 'react';

const Hearing = () => {
  const pdfIcon = (
    <svg width="39" height="50" viewBox="0 0 39 50" fill="none">
      <path d="M31.7344 18.7855L21.2356 8.4344C21.101 8.326 20.9335 8.26506 20.7598 8.26124H8.48258C8.29907 8.26055 8.11688 8.29182 7.94438 8.35359L7.47638 8.81535C7.408 8.98194 7.36972 9.15906 7.36328 9.33868V41.0577C7.36972 41.2374 7.408 41.4145 7.47638 41.5811L7.94438 42.0428C8.11445 42.1107 8.29532 42.1485 8.47868 42.1544H30.8062C30.9909 42.149 31.1731 42.1112 31.3444 42.0428L31.8124 41.5811C31.879 41.414 31.9172 41.2371 31.9255 41.0577V19.255C31.9172 19.0817 31.8499 18.9163 31.7344 18.7855ZM31.2118 41.2155L30.97 41.4579C30.9165 41.4726 30.8616 41.4817 30.8062 41.4849H8.48258C8.42717 41.4817 8.37225 41.4726 8.31878 41.4579L8.07308 41.2155C8.06118 41.1636 8.05336 41.1109 8.04968 41.0577V9.33868C8.05336 9.28558 8.06118 9.23283 8.07308 9.18091L8.33438 8.93849C8.38785 8.92379 8.44277 8.91476 8.49818 8.91155H20.4673V19.532H31.2391V41.0577C31.2357 41.1111 31.2266 41.164 31.2118 41.2155Z" fill="#D32F2F"/>
      <path d="M19.3974 29.9142H18.7539V33.5736H19.4091C19.6569 33.5867 19.9048 33.5483 20.1366 33.4608C20.3684 33.3733 20.5789 33.2387 20.7546 33.0657C21.0937 32.6859 21.2674 32.1896 21.2382 31.6843C21.2515 31.4464 21.2155 31.2084 21.1323 30.9848C21.0492 30.7611 20.9206 30.5566 20.7546 30.3836C20.5716 30.2199 20.3573 30.094 20.1242 30.0134C19.8911 29.9327 19.6439 29.899 19.3974 29.9142Z" fill="#D32F2F"/>
      <path d="M31.0912 26.543H8.1982C8.11374 26.542 8.02991 26.5576 7.95162 26.5889C7.87334 26.6202 7.80216 26.6666 7.74225 26.7253C7.68234 26.7841 7.63489 26.854 7.60269 26.9311C7.57049 27.0081 7.55418 27.0907 7.5547 27.1741V36.3054C7.55418 36.3884 7.57037 36.4707 7.60233 36.5475C7.63429 36.6243 7.68138 36.6941 7.74088 36.7528C7.80038 36.8115 7.87109 36.8579 7.94892 36.8895C8.02676 36.921 8.11016 36.937 8.1943 36.9365H31.0873C31.1721 36.938 31.2563 36.9228 31.3351 36.8917C31.4138 36.8607 31.4855 36.8144 31.5458 36.7555C31.6061 36.6967 31.6539 36.6266 31.6864 36.5493C31.7188 36.472 31.7352 36.3891 31.7347 36.3054V27.1741C31.7352 27.0907 31.7189 27.0081 31.6867 26.9311C31.6545 26.854 31.6071 26.7841 31.5472 26.7253C31.4872 26.6666 31.4161 26.6202 31.3378 26.5889C31.2595 26.5576 31.1757 26.542 31.0912 26.543Z" fill="#D32F2F"/>
    </svg>
  );

  const deleteIcon = (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M7 21.9502C6.45 21.9502 5.97933 21.7545 5.588 21.3632C5.196 20.9712 5 20.5002 5 19.9502V6.9502H4V4.9502H9V3.9502H15V4.9502H20V6.9502H19V19.9502C19 20.5002 18.8043 20.9712 18.413 21.3632C18.021 21.7545 17.55 21.9502 17 21.9502H7ZM17 6.9502H7V19.9502H17V6.9502ZM9 17.9502H11V8.9502H9V17.9502ZM13 17.9502H15V8.9502H13V17.9502Z" fill="#D11A2A"/>
    </svg>
  );

  const infoIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#09A2E3"/>
    </svg>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Roboto, sans-serif' }}>
      {/* Top Row - Ear Conduction and Bone Conduction */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        {/* Ear Conduction */}
        <div style={{
          display: 'flex',
          padding: '12px',
          flexDirection: 'column',
          gap: '8px',
          flex: '1',
          borderRadius: '6px',
          border: '1px solid rgba(183, 200, 229, 0.50)',
          background: '#FFF'
        }}>
          <div style={{
            color: '#1E1E1E',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px'
          }}>
            Ear Conduction
          </div>
          <div style={{
            height: '78px',
            borderRadius: '6px',
            background: 'rgba(9, 162, 227, 0.10)',
            padding: '12px'
          }}>
            <div style={{
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              Left Ear
            </div>
            <div style={{
              color: '#818181',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400'
            }}>
              Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
            </div>
          </div>
          <div style={{
            height: '78px',
            borderRadius: '6px',
            background: '#09A2E3',
            padding: '12px'
          }}>
            <div style={{
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              Right Ear
            </div>
            <div style={{
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400'
            }}>
              Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
            </div>
          </div>
        </div>

        {/* Bone Conduction */}
        <div style={{
          display: 'flex',
          padding: '12px',
          flexDirection: 'column',
          gap: '8px',
          flex: '1',
          borderRadius: '6px',
          border: '1px solid rgba(183, 200, 229, 0.50)',
          background: '#FFF'
        }}>
          <div style={{
            color: '#1E1E1E',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px'
          }}>
            Bone Conduction
          </div>
          <div style={{
            height: '78px',
            borderRadius: '6px',
            background: 'rgba(9, 162, 227, 0.10)',
            padding: '12px'
          }}>
            <div style={{
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              Left Ear
            </div>
            <div style={{
              color: '#818181',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400'
            }}>
              Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
            </div>
          </div>
          <div style={{
            height: '78px',
            borderRadius: '6px',
            background: '#09A2E3',
            padding: '12px'
          }}>
            <div style={{
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              Right Ear
            </div>
            <div style={{
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400'
            }}>
              Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Hearing Findings and Audiometry Report */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Hearing Findings */}
        <div style={{
          display: 'flex',
          padding: '12px',
          flexDirection: 'column',
          gap: '8px',
          flex: '1.3',
          borderRadius: '6px',
          border: '1px solid rgba(183, 200, 229, 0.50)',
          background: '#FFF'
        }}>
          <div style={{
            color: '#1E1E1E',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px'
          }}>
            Hearing Findings
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1.5 }}>
              <div style={{
                borderRadius: '6px',
                background: 'rgba(9, 162, 227, 0.10)',
                padding: '16px',
                height: '80px'
              }}>
                <div style={{
                  color: '#1E1E1E',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Left Ear
                </div>
                <div style={{
                  color: '#818181',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '1.4'
                }}>
                  Lorem ipsum dolor sit amet amet amet am. lorem proin enim pretium nisi quis.
                </div>
              </div>
              <div style={{
                borderRadius: '6px',
                background: '#09A2E3',
                padding: '16px',
                height: '80px'
              }}>
                <div style={{
                  color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Left Ear
                </div>
                <div style={{
                  color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '1.4'
                }}>
                  Lorem ipsum dolor sit amet amet amet am. lorem proin enim pretium nisi quis.
                </div>
              </div>
            </div>
            <div style={{
              borderRadius: '6px',
              background: 'rgba(9, 162, 227, 0.10)',
              padding: '16px',
              flex: 1,
              height: '172px'
            }}>
              <div style={{
                color: '#1E1E1E',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Any Organic Disease
              </div>
              <div style={{
                color: '#818181',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1.5'
              }}>
                Lorem ipsum dolor sit amet amet amet amet. lorem proin enim pretium nisi quis. Lorem ipsum dolor sit amet amet amet amet met amet consectetur. 
              </div>
            </div>
          </div>
        </div>

        {/* Audiometry Report */}
        <div style={{
          flex: '0.8',
          maxWidth: '350px',
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid rgba(183, 200, 229, 0.50)',
          background: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '220px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <div style={{
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Audiometry Report
            </div>
            {infoIcon}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'auto' }}>
            <div style={{
              display: 'flex',
              padding: '8px 16px',
              alignItems: 'center',
              gap: '12px',
              borderRadius: '6px',
              border: '1px solid #B7C8E5',
              background: '#F6F8FA'
            }}>
              <div style={{ width: '32px', height: '40px', flexShrink: 0 }}>
                {pdfIcon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  color: '#1E1E1E',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}>
                  Name-evidence.pdf
                </div>
                <div style={{
                  color: '#7A8699',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}>
                  PDF document - 13.7 MB
                </div>
              </div>
              <div style={{ cursor: 'pointer' }}>
                {deleteIcon}
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              padding: '8px 16px',
              alignItems: 'center',
              gap: '12px',
              borderRadius: '6px',
              border: '1px solid #B7C8E5',
              background: '#F6F8FA'
            }}>
              <div style={{ width: '32px', height: '40px', flexShrink: 0 }}>
                {pdfIcon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  color: '#1E1E1E',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}>
                  Name-evidence.pdf
                </div>
                <div style={{
                  color: '#7A8699',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}>
                  PDF document - 13.7 MB
                </div>
              </div>
              <div style={{ cursor: 'pointer' }}>
                {deleteIcon}
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: 'auto',
            paddingTop: '20px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#09A2E3'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#E0E0E0'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#E0E0E0'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#E0E0E0'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hearing;