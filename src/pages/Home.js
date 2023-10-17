import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function Home() {
  const [users, setUsers ] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =  async() => {
    const result = await axios.get("http://localhost:8090/users");
    setUsers(result.data);
  };
  const {id} = useParams();
 const deleteUser = async (id) => {
   alert(`You are deleting a user`)
   await axios.delete(`http://localhost:8090/user/${id}`);
     loadUsers();
 }

  return (
    <div className='container'>
      <div className='py-5'>
      <table className="table table-bordered table-striped shadow p-3 mb-5 bg-white rounded">
        <thead className="table-info">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) =>
              <tr>
                <th scope="row" key={index}>{++index}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-outline-dark mx-2" to={`/view-user/${user.id}`} >View</Link>
                  <Link className ="btn btn-outline-secondary mx-2" to={`/edit-user/${user.id}`}>Edit</Link>
                  <button className="btn btn-outline-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
              )
            }
            </tbody>
        </table>
      </div>
    </div>
  )
}
