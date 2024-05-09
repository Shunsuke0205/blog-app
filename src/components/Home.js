import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { database, auth } from '../firebase';
import "./Home.css";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(database, "posts"));
      setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    console.log("delete");
    await deleteDoc(doc(database, "posts", id));
    window.location.reload();
  }

  return (
    <div className="homepage">
      {postList.map((post) => (
        <div key={post.id} className="postContents">
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">
            {post.postText}
          </div>
          <div className="nameAndDeleteButton">
            <h3>{post.author.username}</h3>
            {post.author.id === auth.currentUser?.uid && (
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home