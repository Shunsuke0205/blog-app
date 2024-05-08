import React from 'react';
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post your note.</h1>
        <div className="inputPost">
          <div>title</div>
          <input type="text" placeholder="write your awesome title here" />
        </div>
        <div className="inputPost">
          <div>Post</div>
          <textarea placeholder="write your fantastic post here"></textarea>
        </div>
        <button className="postButton">Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;