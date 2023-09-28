import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Spring Boot Application</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link type="button" className="btn btn-outline-dark" to="/add-user">Add User</Link>
  </div>
</nav>
    </div>
  )
}
