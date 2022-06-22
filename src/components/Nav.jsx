import React from 'react';
import { StyledNav } from './styles/Nav.styled';
import chess from '../assets/chess-solid.svg';


function Nav() {
  return (
    <>
        <StyledNav>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <div className='ms-5'>
                            <img src={chess} alt="chess" />
                            <span>Top Games in Each Genre & Latest News</span>
                        </div>
                        
                        <ul className="navbar-nav me-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </StyledNav>
    </>
  )
}

export default Nav