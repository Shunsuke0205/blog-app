import React, { useState } from 'react';
import "./CreatePost.css";
import { addDoc, collection } from 'firebase/firestore';
import { auth, database } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    console.log(auth);
    await addDoc(collection(database, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post your note.</h1>
        <div className="inputPost">
          <div>title</div>
          <input 
            type="text" 
            placeholder="write your awesome title here" 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Post</div>
          <textarea 
            placeholder="write your fantastic post here"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;