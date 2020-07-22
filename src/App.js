import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [getter (get the state), setter (change the state)] = useState(initialState)
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState();

  // every time my component is rendered my useEffect is called
  // useEffect(() => {
  //   console.log("hello");
  // });

  // useEffect is called only once, because it has an empty dependency array
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`
      );
      console.log("Posts", response.data);

      setPosts(response.data); // will set only 5 posts
      // setPosts([...posts, ...response.data]); // adds the new posts to the ones we had before
    }

    fetchData();

    console.log("USE EFFECT GOT RUN");
    // by adding count to the dependency array, our useEffect gets run again
    // every time a value in the dependency array changes, useEffect gets run again
  }, []);

  function increaseCount() {
    setCount(count + 1);
  }

  console.log("POSTS IN RENDER", posts);
  // [{}, {}] -> React Component, React Component

  // if (posts === undefined) {
  //   return "Loading";
  // }

  return (
    <div className="App">
      <header className="App-header">
        {posts === undefined
          ? "Loading"
          : posts.map((post) => {
              // return <div>{post}</div>; // not allowed, object cannot be interpolated
              return (
                // add a key, to make React's life easier, it can more easily compare what changed
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              );
            })}
        {count}
        <button onClick={increaseCount}>+</button>
      </header>
    </div>
  );
}

export default App;
