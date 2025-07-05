//src/components/PostList.tsx
import { useEffect, useState } from "react";
import { getPosts } from "../getPosts";

export const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        async function loadPosts() {
            const data = await getPosts();
            setPosts(data);
        }

        loadPosts();
    })
    return(
        <>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}