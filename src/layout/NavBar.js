import React, {Component} from 'react'

export default function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Spring Boot Application</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <button type="button" className="btn btn-outline-dark">Add User</button>
  </div>
</nav>
    </div>
  )
}
