import React from "react";
import { connect } from "react-redux";
import  FriendList  from "../components/FriendList";
import { fetchFriends } from '../store/actions';

class FriendListView extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.fetchFriends();

  }