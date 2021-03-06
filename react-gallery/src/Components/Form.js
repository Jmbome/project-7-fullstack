
import React, { Component } from 'react';
import { withRouter,BrowserRouter} from 'react-router-dom';
import { matchPath } from "react-router";
import '../css/index.css';



 class Form extends Component {
  
  state = {
    query: ''
  }
  //sets component's state to search field value
  onSearchChange = e => {
    this.setState({ query: e.target.value });
  }
  
  
  //submit handler; renders output on clicking submit button
  handleSubmit = e => {
    e.preventDefault();
    
     //defines URL by referencinf form's input
    let query = this.query.value;
    

    //runs search using query data
    this.props.onSearch(this.query.value);

    //Adds new path to History 
    const match = matchPath(`/${query}`, {
      path: `/search/${query}`,
      exact: true,
      strict: false
    });
    this.props.history.push(match);
    e.currentTarget.reset();
  }


  
    render(){
    return (
      <BrowserRouter>
      <div>
       <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search" onChange={this.onSearchChange} ref={ (input) => this.query = input } required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
      </div>
      </BrowserRouter>
    );
  }
 
}
export default withRouter(Form);