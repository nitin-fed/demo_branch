import React from 'react';

const Post = ({posts}) => {
    
    return(
        <React.Fragment>
            {posts.map( (post, index) => {
                return(
                    <React.Fragment key={index}>
                    <span>{post.name}</span>
                    <span> {post.lastName}</span>
                    </React.Fragment>
                )
            } )}
        </React.Fragment>
    )
}

export default Post