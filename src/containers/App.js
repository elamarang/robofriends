import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';
import './App.css';
import './App.scss';

const mapStateToProps = state => {
    return{
        searchField : state.searchRobots.searchField,
        isPending : state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        OnSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        OnRequestRobots: () => dispatch(requestRobots()) 
    }
}

class App extends Component{
    componentDidMount(){
        this.props.OnRequestRobots();
    }

    render(){
        const {searchField, OnSearchChange,robots,isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending?
         <h1 className='f1 tc'>Loading...</h1>:
                     <div className='tc'>
                    <h1 className='f1'>robofriends</h1>
                    <SearchBox searchChange={OnSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>                 
                </div>           
           
        }
        
    }   


export default connect(mapStateToProps, mapDispatchToProps)(App);