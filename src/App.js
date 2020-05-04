import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from "./components/post/post.js";

const App = () => {


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [perPageNum, setPerPageNum] = useState(10)

  useEffect(() => {
    const requestPosts = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3001/posts', {})
      console.log(response)
      setPosts(response.data)
      setLoading(false)
    }
    requestPosts();
  }, [])


  return (
    <div className="App">
      <h1>app</h1>
      <Posts loading={loading} posts={posts} />
    </div>
  );
}

export default App;
