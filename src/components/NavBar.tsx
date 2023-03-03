import {Navbar, Container, Nav} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
 

// const logo = require('../assets/images/logo.PNG')
const logo = require('../assets/images/portfolio-logo1.png')

const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateLink = (value: string) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/abel-muema-9b1140216/" target='_blank'><TfiLinkedin /></a>
                <a href="https://github.com/abel254" target='_blank'><BsGithub/></a>
                <a href="https://twitter.com/abel26053879" target='_blank'><FaTwitter /></a>
            </div>
            <button className="vvd" ><a href="#newsletter">Let's Connect</a></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar