const initialState = {
    username: 'nitin',
    name: 'Nitin',
    data: [
        {
            name:  'nitin',
            lastName: 'Sharma'
        }
    ]  
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS': 
            return{
                ...state,
                posts: action.posts
            }

        default : {
            return {
                ...state
            }
        }
    }
}

export default reducer