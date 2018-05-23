import React, {Component } from 'react';
import {connect} from 'react-redux';
import Result from '../components/result';
import Search from '../components/search';
import {fetchUsers} from "../store/actions";

class Users extends Component {
    constructor(){
        super();
        this.state = {
            searchText: '', 
            users: [], 
            isFetching: false
        }
    }

    componentDidMount = () => {
        this.props.dispatch(fetchUsers(''));
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props !== nextProps) {
            this.setState({ users: nextProps.userStore.users, isFetching: nextProps.userStore.isFetching });
        }
    }

    onChange = (e) => {
        this.setState({searchText: e.target.value});
        this.props.dispatch(fetchUsers(e.target.value));
    }

    render = () =>
        <div>
            <p style={(this.state.isFetching) ? {display: 'block'} : {display: 'none'}}>Fetching!</p>
            <Search onChange={this.onChange} />
            <Result content={this.state.users}/>
        </div>
}

const mapStateToProps = (store) => {
    return {
      userStore: store.appReducer.users
    };
  };
  
export default connect(mapStateToProps)(Users);


