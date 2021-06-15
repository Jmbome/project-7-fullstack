import React from 'react';
import '../css/index.css';

const Nav=()=> {
  return (
    <div>
      <nav class="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;