import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        age: '',
        email: ''
      };
    }
    handleChange = e => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      });
    }
    submitHandler = e => {
        const { name, age, email } = this.state;
        this.props.addNewFriend({ name, age, email });
        this.setState({ name: '', age: '', email: '' });
    };
    render(){
        return(
          <form onSubmit={this.submitHandler}>
              <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
    
                <input
                  type='text'
                  name='age'
                  placeholder='Age'
                  onChange={this.handleChange}
                  value={this.state.age}
                />
    
                <input
                  type='text'
                  name='email'
                  placeholder='E-mail'
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              <button type='submit'>Add Friend </button>
          </form>
        )
      }
}
    const mapStateToProps = state => {
        return{
          addNewFriend: state.addNewFriend
        }
      }
export default connect(mapStateToProps, { addFriend })(FriendForm)