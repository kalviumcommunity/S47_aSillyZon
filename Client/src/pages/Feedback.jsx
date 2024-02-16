import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feedback = () => {
  let [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  let [data, setData] = useState([]);
  let [selectedUser,setSelectedUser] = useState('')
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/update", { name, email, comments })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    async function fetchUsers() {
        try {
            const res = await axios.get('http://localhost:4000/users')
            setData(res.data)
            console.log(users)
        } catch (err) {
            console.log(err)
        }
    }
    fetchUsers()
}, [])


  const handleDelete = (item) => {
    axios.delete('http://localhost:4000/deleteUser/' + item._id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleSelectUser = (userId) => {
    setSelectedUser(userId)
    console.log(selectedUser)
}

  return (
    <div>
      <form onSubmit={Submit}>
        <h2>Write Feedback</h2>
        <div>
                <label>Select User: </label>
                <select onChange={(e) => handleSelectUser(e.target.value)}>
                    <option value="">All Users</option>
                    {data.map(user => (
                        <option key={user._id} value={user.name}>{user.name}</option>
                    ))}
                </select>
            </div>
        <div>
          <label>Name: </label>
          <input type="text" placeholder='eg: Hitman'
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email"
            placeholder='eg: pB8p1@example.com'
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Comments:</label>
          <input type="text"
            value={comments}
            placeholder='Bak dalo '
            onChange={(e) => setComments(e.target.value)} />
        </div>
        <button type='submit'>
          Submit
        </button>
      </form>

      {
        data
        .filter(item => !selectedUser || item.name === selectedUser)
        .map((item) => {
          return (
            <div className='main' key={item._id}>
              
              <h3>Name: {item.name}</h3>
              <h5>Email: {item.email}</h5>
              <h5>Comments: {item.comments}</h5>

              <button onClick={() => navigate(`/update/${item._id}`, { state: { item } })}>Edit</button>              
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Feedback;