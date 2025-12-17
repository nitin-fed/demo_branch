export const fetchPosts = posts => {
    return {
        type: 'FETCH_POSTS',
        posts: posts
    };
};

export const initPosts = () => {
    const fetchPromise = fetch(this.url);
    fetchPromise
    .then(res => res.json())
    .then(data => {    
        fetchPosts(data)
    })
}

/*


export const initPosts = () => {
  
    // console.log('counter')
     return dispatch => {
       const url = `http://jsonplaceholder.typicode.com/posts`;
       //const url = 'http://react-practice-2bc39.firebaseio.com/Posts'
       axios
         .get(url)
         .then(response => {
           dispatch(fetchPosts(response.data));
         })
         .catch(error => {
           //dispatch(fetchPosts(postData));
           dispatch(fetchPostsFails(error));
         });
     };
   };
   
   */