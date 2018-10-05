import React, { Component } from "react";
import { connect } from "react-redux";
import {  addToFavorite, deleteFromFavorite } from "../actions";
import MyCollection from "../components/MyCollectoin";
import "../App.css";

class App extends Component {
    render() {


        return (
            <div className="App">

                    <MyCollection
                        title="My List"
                        list={this.props.mylist}
                        method={this.props.deleteFromFavorite}
                        buttonName="Remove"
                    />

                    <MyCollection
                        title="Recommand"
                        list={this.props.recommendations}
                        method={this.props.addToFavorite}
                        buttonName="Add"
                    />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    mylist: state.mylist,
    recommendations: state.recommendations
});


export default connect(mapStateToProps, {addToFavorite,deleteFromFavorite})(App);
