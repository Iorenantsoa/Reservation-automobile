import React, { useRef, useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const myNavBarRef = useRef()
  const [isFixed , setIsFixed] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState();
  const [navbarTop, setNavbarTop] = useState();

  useLayoutEffect(()=>{
    const height = myNavBarRef.current.offsetHeight
    const top = myNavBarRef.current.offsetTop
    setNavbarHeight(height)
    setNavbarTop(top)
  },[navbarTop]) 
 
  
  const handleFixe = ()=>{
    let topValue =   navbarTop 
      if ( topValue <= window.scrollY && !isFixed){
          setIsFixed(true) 
        }else if ( topValue > window.scrollY && isFixed){
          setIsFixed(false) 
      }
  }

  window.addEventListener('scroll' , handleFixe)

  const fake = isFixed && <div style={{'height':navbarHeight}}></div> 

  

  const classforNavbar = isFixed ? "navbar navbar-expand-lg bg-body-tertiary  shadow navbar-container navbarFixed" : "navbar navbar-expand-lg bg-body-tertiary  shadow navbar-container " 
  const classforlogoNavbar = isFixed ? "fs-2 logo me-5 ms-5 navbarFixedColor" : "fs-2 logo me-5 ms-5 "
  const classforLinkNavbar = isFixed ? "nav-link NavLink navbarFixedColor " : "nav-link NavLink "
  return (
    <>
      {fake }
      <nav ref={myNavBarRef} className={classforNavbar} style={{ minHeight: "12vh" , transition : "0.5s"}}>
        <div className="container ">
          <h1 className={classforlogoNavbar}> {"<"}GasyCar{"/>"} </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navLink-list ml-3" >
              <NavLink className={classforLinkNavbar} aria-current="page" to="Accueil/">ACCUEIL</NavLink>
              <NavLink className={classforLinkNavbar} to="NavettePremium/">NAVETTE PREMIUM</NavLink>
              <NavLink className={classforLinkNavbar} to="ServicesLocation/">SERVICES DE LOCATION</NavLink>
              <NavLink className={classforLinkNavbar} to="Blog/">BLOG</NavLink>
              <NavLink className={classforLinkNavbar} to="Contact/">CONTACT</NavLink>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default React.memo(Navbar) 