import React from 'react';
import { neonGreen } from '../layouts/variables';

const styles = {
  marginTop: "50px",
  marginLeft: "5vw"
}

const MainLogo = () => {
  return (
    <svg width="50px" height="50px" viewBox="0 0 182.33 182.33" style={ styles }><path fill="none" stroke={neonGreen} strokeMiterlimit="10" strokeWidth="7" d="M3.5 3.5h175.33v175.33H3.5z"/><path d="M95.7 170.86l35.56-79.7 35.68 79.7h-16.05l-19.63-43.83-19.5 43.83z" fill={neonGreen}/></svg>
  )
}

export default MainLogo

