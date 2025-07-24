import React from 'react';

const Header = () => {
  return (
    <header>
      <div style={{
        display: 'flex',
        padding: '2px 16px',
        alignItems: 'center',
        gap: '382px',
        alignSelf: 'stretch',
        background: '#FCFCFC',
        boxShadow: '0.833px 0px 0px 0px #F4F4F4 inset'
      }}>
        
        <div style={{
          display: 'flex',
          width: '357px',
          padding: '2px 8px',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.8333 9.16797C14.8333 12.3896 12.2217 15.0013 9 15.0013C5.77834 15.0013 3.16667 12.3896 3.16667 9.16797C3.16667 5.94631 5.77834 3.33464 9 3.33464C12.2217 3.33464 14.8333 5.94631 14.8333 9.16797ZM14.8599 13.8494C15.8863 12.5663 16.5 10.9388 16.5 9.16797C16.5 5.02583 13.1421 1.66797 9 1.66797C4.85786 1.66797 1.5 5.02583 1.5 9.16797C1.5 13.3101 4.85786 16.668 9 16.668C10.7708 16.668 12.3983 16.0542 13.6814 15.0279L15.9107 17.2572C16.2362 17.5827 16.7638 17.5827 17.0893 17.2572C17.4147 16.9318 17.4147 16.4042 17.0893 16.0787L14.8599 13.8494Z" fill="#6F767E"/>
          </svg>
          <input type="text" placeholder="Search or type" style={{border: 'none', outline: 'none', background: 'transparent'}} />
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '24px', marginLeft: 'auto'}}>
          <svg width="15" height="20" viewBox="0 0 15 20" fill="none">
            <path d="M7.5 0C3.35357 0 0 3.13 0 7C0 12.25 7.5 20 7.5 20C7.5 20 15 12.25 15 7C15 3.13 11.6464 0 7.5 0ZM2.14286 7C2.14286 4.24 4.54286 2 7.5 2C10.4571 2 12.8571 4.24 12.8571 7C12.8571 9.88 9.77143 14.19 7.5 16.88C5.27143 14.21 2.14286 9.85 2.14286 7Z" fill="#525966"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19.4444 0L19.2667 0.0333333L13.3333 2.33333L6.66667 0L0.4 2.11111C0.166667 2.18889 0 2.38889 0 2.64444V19.4444C0 19.7556 0.244444 20 0.555556 20L0.733333 19.9667L6.66667 17.6667L13.3333 20L19.6 17.8889C19.8333 17.8111 20 17.6111 20 17.3556V0.555556C20 0.244444 19.7556 0 19.4444 0ZM7.77778 2.74444L12.2222 4.3V17.2556L7.77778 15.7V2.74444ZM2.22222 3.84444L5.55556 2.72222V15.7222L2.22222 17.0111V3.84444ZM17.7778 16.1556L14.4444 17.2778V4.28889L17.7778 3V16.1556Z" fill="#525966"/>
          </svg>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M16.2 1.81818H15.3V0H13.5V1.81818H4.5V0H2.7V1.81818H1.8C0.81 1.81818 0 2.63636 0 3.63636V18.1818C0 19.1818 0.81 20 1.8 20H16.2C17.19 20 18 19.1818 18 18.1818V3.63636C18 2.63636 17.19 1.81818 16.2 1.81818ZM16.2 18.1818H1.8V8.18182H16.2V18.1818ZM16.2 6.36364H1.8V3.63636H16.2V6.36364Z" fill="#525966"/>
          </svg>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path d="M15.1111 11.8182V15.4545H13.2222V11.8182H15.1111ZM3.77778 11.8182V15.4545H2.83333C2.31389 15.4545 1.88889 15.0455 1.88889 14.5455V11.8182H3.77778ZM8.5 0C3.80611 0 0 3.66364 0 8.18182V14.5455C0 16.0545 1.26556 17.2727 2.83333 17.2727H5.66667V10H1.88889V8.18182C1.88889 4.66364 4.845 1.81818 8.5 1.81818C12.155 1.81818 15.1111 4.66364 15.1111 8.18182V10H11.3333V17.2727H15.1111V18.1818H8.5V20H14.1667C15.7344 20 17 18.7818 17 17.2727V8.18182C17 3.66364 13.1939 0 8.5 0Z" fill="#525966"/>
          </svg>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M9 20C10.2375 20 11.25 19.0769 11.25 17.9487H6.75C6.75 19.0769 7.7625 20 9 20ZM15.75 13.8462V8.71795C15.75 5.56923 13.9163 2.93333 10.6875 2.2359V1.53846C10.6875 0.68718 9.93375 0 9 0C8.06625 0 7.3125 0.68718 7.3125 1.53846V2.2359C4.095 2.93333 2.25 5.55897 2.25 8.71795V13.8462L0 15.8974V16.9231H18V15.8974L15.75 13.8462ZM13.5 14.8718H4.5V8.71795C4.5 6.17436 6.19875 4.10256 9 4.10256C11.8013 4.10256 13.5 6.17436 13.5 8.71795V14.8718Z" fill="#525966"/>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="20" fill="#FFBC99"/>
          </svg>
        </div>
      </div>

      <div style={{
        display: 'flex',
        padding: '2px 0px 2px 24px',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
      }}>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#7B809A"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.47125 4L5.53125 4.94L8.58458 8L5.53125 11.06L6.47125 12L10.4713 8L6.47125 4Z" fill="#7B809A"/>
          </svg>
          <span style={{color: '#7B809A'}}>Modules</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.47125 4L5.53125 4.94L8.58458 8L5.53125 11.06L6.47125 12L10.4713 8L6.47125 4Z" fill="#7B809A"/>
          </svg>
          <span style={{color: '#7B809A'}}>Medical management</span>
        </div>

        <div style={{
          background: '#0EA5E9',
          color: 'white',
          padding: '2px 12px',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          netzero
        </div>
      </div>
    </header>
  );
};

export default Header;