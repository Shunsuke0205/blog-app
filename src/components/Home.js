import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { database } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(database, "posts"));
      setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="homepage">
      {postList.map((post) => {
        return (
          <div key={post.id} className="postContents" >
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.username}</h3>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Home