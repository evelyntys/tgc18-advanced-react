import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostPage(props){
    const [activePostId, setActivePostId] = useState("");
    const [post, setPost] = useState('');
    // useEffect has 2 arguments
    // 1st argument: the function to call when any of the dependencies change
    // 2nd argument: an array of dependencies
    // cannot use async function for useEffect


    // replicate ComponentDidMount
    useEffect(()=>{
        console.log('first')
        // const fetchPost = async () => {
        //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/55');
        //     setPost(response.data)
        // }
        // fetchPost();
    }, []);  // <-- empty array means the useEffect only activates once

    useEffect(() => {
        const fetchPost = async (postId) => {
            if (postId>0){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
            setPost(response.data)
            }
        }
        fetchPost(activePostId)}, [activePostId]);
    
    return (
        <React.Fragment>
            <h1>posts</h1>
            <input type='text' name='activePostId' value={activePostId} onChange={(e) => {
                setActivePostId(e.target.value)
            }}/>
            {
                post? <React.Fragment>
                    <div>
                    <h1>id: {post.id}</h1>
                    <h1>title: {post.title}</h1>
                    <p>{post.body}</p>
                    </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
}