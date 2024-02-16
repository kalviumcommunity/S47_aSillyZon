import React, { useEffect, useState } from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateFeedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const location = useLocation();
    const item = location.state.item;
    const navigate = useNavigate();

    useEffect(() => {
        setName(item.name);
        setEmail(item.email);
        setComments(item.comments);
    }, [item]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4000/updateUser/' + item._id, {
            name,
            email,
            comments
        })
            .then(res => {
                console.log(res);
                navigate('/feedback')
                
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form >
                <h2>Write Feedback</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" placeholder='eg: Hitman' value={name}
                        onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder='eg: pB8p1@example.com' value={email}
                        onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Comments:</label>
                    <input type="text" placeholder='Bak dalo ' value={comments}
                        onChange={handleCommentsChange} />
                </div>
                <button type='submit' onClick={Update}>
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateFeedback;