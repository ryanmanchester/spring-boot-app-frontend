import {useState, useEffect} from 'react'
import axios from 'axios'


export default function Home() {
  const [users, setUsers ] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =  async() => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };


  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table table-striped table-hover table-bordered">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>
  </tr>
</thead>
<tbody>
  {
    users.map(user =>
      <tr>
        <th scope="row" key={user.id}>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    )
  }
</tbody>
</table>
      </div>
    </div>
  )
}
