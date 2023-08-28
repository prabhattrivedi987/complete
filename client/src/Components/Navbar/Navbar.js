import React from 'react'

const Navbar= () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary container mt-5">
      <a class="navbar-brand" href="/all">
        ToDos
      </a>
      <div class="collapse navbar-collapse m-6" id="navbarNavDropdown ">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/create">
              ADD TODO
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/doing">
              DOING
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/done">
              DONE
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
