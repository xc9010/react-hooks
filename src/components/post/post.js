import React from "react";

const Posts = ({ posts, loading }) => {
    if(loading) {
        return 'Loading'
    }

    return (
        <ul>
            {
                posts.map(v => (
                    <li key={v.id}>
                        <h3>{v.title}</h3>
                        <p>{v.content}</p>
                        <p>作者：{v.author}</p>
                        <p>发表时间：{v.time}</p>
                        <p>{v.like}</p>
                    </li>
                ))
            }
        </ul>
    )
}
export default Posts