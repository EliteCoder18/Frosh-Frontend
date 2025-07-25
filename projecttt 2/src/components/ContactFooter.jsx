import React from 'react';
import froshLogo from '../assets/logo.svg';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: 'black',
      color: 'white',
      padding: '60px 0', // Change top & bottom padding to adjust height
      width: '100%', // Full width
      boxSizing: 'border-box',
    },
    footerContent: {
      maxWidth: '100%', // Limit width of content
      margin: '0 auto',   // Center horizontally
      padding: '0 20px',  // Left-right padding for spacing on small screens
    },
    footerHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid white',
      paddingTop: '20px',
      flexWrap: 'wrap',
    },
    footerHeading: {
      fontSize: '40px',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    socialIcons: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    socialIconImg: {
      width: '58px',
      height: '58px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
    },
    footerBottom: {
      textAlign: 'center',
      marginTop: '20px',
    },
    froshLogo: {
      width: '220px',
  height: '220px',
  display: 'block',
  margin: '-40px auto -80px auto'
     
    },
    copyright: {
      margin: '10',
      fontSize: '24px',
    },
    topBorder: {
      borderBottom: '10px solid white',
      marginBottom: '20px',
    },
  };

  const enlargeOnHover = (e) => (e.currentTarget.style.transform = 'scale(1.5)');
  const resetScale = (e) => (e.currentTarget.style.transform = 'scale(1)');

  return (
    <footer style={styles.footer}>
      <div style={{ ...styles.footerContent, ...styles.topBorder }}></div>
      <div style={{ ...styles.footerContent, ...styles.footerHeader }}>
        <h2 style={styles.footerHeading}>Contact Us</h2>
        <div style={styles.socialIcons}>
          <a href="https://www.instagram.com/froshtiet">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
              alt="Instagram"
              style={styles.socialIconImg}
              onMouseEnter={enlargeOnHover}
              onMouseLeave={resetScale}
            />
          </a>
          <a href="https://www.linkedin.com/company/frosh-tiet/ ">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              style={{ ...styles.socialIconImg, width: '70px' }}
              onMouseEnter={enlargeOnHover}
              onMouseLeave={resetScale}
            />
          </a>
          <a href="https://www.youtube.com/@FroshTIET">
            <img
              src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF"
              alt="YouTube"
              style={{ ...styles.socialIconImg, width: '70px', height: '75px' }}
              onMouseEnter={enlargeOnHover}
              onMouseLeave={resetScale}
            />
          </a>
          <a href="mailto:frosh@thapar.edu">
            <img
              src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF"
              alt="Gmail"
              style={{ ...styles.socialIconImg, width: '78px', height: '60px' }}
              onMouseEnter={enlargeOnHover}
              onMouseLeave={resetScale}
            />
          </a>
        </div>
      </div>

      <div style={{ ...styles.footerContent, ...styles.footerBottom }}>
        <img src={froshLogo} alt="Frosh 2025 Logo" style={styles.froshLogo} />
        <p style={styles.copyright}>
          All rights reserved. Copyright @ Frosh TIET
        </p>
      </div>
    </footer>
  );
}

export default Footer;
