import React,{Component} from 'react';
import logo from './logo.svg';
/* [F] change this to bootstrat and cover css
import './App.css';
*/
import './bootstrap.css';
import './blog.css';

import Table from './Table.js'
import Form from './Form.js'

/* [F] change this default app to my app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends Component{

  state = {
        posts: []
    };

     componentDidMount() {
        const url = "http://fazriaziz.com/wp-json/wp/v2/posts";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    posts: result
                })
            });
    }

    removePost = index => {
        const { posts } = this.state;
    
        this.setState({
            posts: posts.filter((data, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = data => {
        this.setState({posts: [...this.state.posts, data]});
    }

  render(){

    const { posts } = this.state;
    return(
      <div class="blog-header">
        <h2 >Fazriaziz.com's Post List</h2>
        <p>Below Post list are retrieve from <a href="https://fazriaziz.com" target="_blank">https://fazriaziz.com</a> using ReactJS and API. It binding automatically when the page is open. Total about 10 Posting items.</p>
        <p>Add new post and delete item in Table are not connected to Fazriaziz</p>
        <br></br>
        
        <p>
        <h4>Add Post Form</h4>
                <Form handleSubmit={this.handleSubmit} />
        </p>
        <br></br>
        <h4>Table</h4>
        <p>
          <Table postData={posts}
                    removePost={this.removePost} />

        </p>
      </div>


      );
  }
}

export default App;
