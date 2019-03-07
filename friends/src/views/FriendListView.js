import React from "react";
import { connect } from "react-redux";
import  FriendList  from "../components/FriendList";
import { fetchFriends } from '../actions';

class FriendListView extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.fetchFriends();
  }
  render(){
    return(
    <div>
      {this.props.isFetching ? <h1> Loading .... List </h1>: <h2> My Friends List </h2>}
      <FriendList friends ={this.props.friends} />
    </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state.friends)
  return{
    friends: state.friends,
    isFetching: state.fetching
  }
}

export default connect( mapStateToProps, { fetchFriends } )(FriendListView);