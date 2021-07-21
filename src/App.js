import { Component } from 'react';   
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/serach-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      packages:[
        {
          name: 'Freemium Plan',
          id:'1'
        },
        {
          name:'Standard Plan',
          id:'2'
        },
        {
          name:'Premium Plan',
          id:'3'
        }
      ],
      users:[],
      searchField:''
    }

   
  }

  handleChange =(e)=>  {
    this.setState({searchField: e.target.value});
  };

  render(){

    const { users, searchField } = this.state;
    const filteredUser = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()))

    return( <div className="App">
      <SearchBox placeholder='Search User' handleChange ={this.handleChange} ></SearchBox>
      <CardList users = {filteredUser}> </CardList>
  </div>);   
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users :users}))
  }
}

export default App;
