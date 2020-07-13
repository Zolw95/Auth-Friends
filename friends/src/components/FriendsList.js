import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: '',
    age: '',
    email: '',
  });

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log({ err }));
  };

  const onChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', newFriend)
      .then((res) => {
        setFriends(res.data);
      });
  };

  return (
    <div>
      <h2>Add a Friend</h2>
      <form onSubmit={addNewFriend}>
        <input
          type='text'
          name='name'
          placeholder='Friends Name'
          onChange={onChange}
        />
        <input
          type='text'
          name='age'
          placeholder='Friends Age'
          onChange={onChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Friends Email'
          onChange={onChange}
        />
        <button>Add New Friend</button>
      </form>
      <div>
        {friends.length >= 0 &&
          friends.map((friend) => (
            <ul>
              <li>{friend.name}</li>
            </ul>
          ))}
      </div>
      {console.log('friends:', friends)}
    </div>
  );
};

export default FriendsList;
