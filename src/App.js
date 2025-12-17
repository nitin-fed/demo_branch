import React from 'react'
import Posts  from './Posts/Posts'
import './app.css'
import * as actions from './Action/actions'

import { connect } from 'react-redux'

const App = ({username, data, onFetchPosts}) => {
  return(
    <div className="container">
      <header>Application Name</header>
      <div>Navigation</div>
      <section>
        <div>Left Pane</div>
        <div>
          <Posts posts={data} onLoad={onFetchPosts} />
        </div>
      </section>
      <footer></footer>
       <p>Username: {username}</p>
    </div>
   
  )
}

const stateProps = (state) => {
  return {
    username: state.username,
    data: state.data
  }
}

const dispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.initPosts()),
  }
}

export default connect(stateProps, dispatchToProps )(App);



/*
class App extends Component{
  constructor(){
    super();
    this.state ={
      data: [],
      postBody: null
    }

    this.handleInput = function(e){
      this.setState({
        ...this.state,
        postBody:  e.target.value
      })
    }

    this.url = 'http://jsonplaceholder.typicode.com/posts/'

    this.addPost = () => {
     
      const postData = {
        body: this.state.postBody,
        id: 101
      }
      fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    }
  }

  componentDidMount(){
    const fetchPromise = fetch(this.url);
    fetchPromise
    .then(res => res.json())
    .then(data => {    
      this.setState({
        ...this.state,
        data: data
      })
    })
    
  }

  shouldComponentUpdate(){
  return true
  }


  render(){
    const list =  this.state.data.map((number) =>
    <li key={number.id}>
      <span className='srno'>{number.id}</span> <span>{number.body}</span>
    </li>
  );

  
    return(
      <div>
        <h1>Nitin Sharma</h1>
        <input type='text' onChange={ (e) => this.handleInput(e)} />
        <button onClick={this.addPost}>Add</button>        
        <hr />
        <ul>
          {list}
        </ul>
      </div>     
    )
  }
}

*/
