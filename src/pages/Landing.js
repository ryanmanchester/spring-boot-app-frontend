import backgroundImage from '../images/workplace.jpg'
import {Link} from 'react-router-dom'

export default function Landing() {
  return (

      <div className="card">

      <img src={backgroundImage} className="img-fluid opacity-50 card-img-top" />
      <div className="card-img-overlay position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center card-title">Welcome to Employee Directory</h1>
      <h4 className="text-center card-subtitle">Add new or update existing employees</h4>
      <Link className="btn btn-outline-secondary btn-lg mt-2" to={"/employees"}>View Employees</Link>
      </div>
      </div>
  )
}
