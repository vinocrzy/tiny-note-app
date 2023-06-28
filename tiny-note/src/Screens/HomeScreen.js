import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, ActivityIndicator, View, TextInput, Modal } from 'react-native';

import _ from 'lodash';

import { connect } from 'react-redux';
import { getNotes } from '../redux/action/notes';

import Card from '../Components/Card';
import Fab from '../Components/Fab';
import axios from 'axios';


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _ModalVisible: false,
      notes: [],
    };
  }

  setModalVisibility = (bool) => {
    this.setState({ _ModalVisible: bool });
  }
  fetchData = () => {
    this.props.dispatch(getNotes());
    axios.get('http://localhost:3001/api/notes')
    console.log("data fetching");
  }

  componentDidMount = () => {
    this.fetchData();
  }
  componentWillUnmount() {
    // this.subs.forEach(sub => {
    //   sub.remove()
    // })
  }
  _onRefresh = () => {
    this.props.dispatch(getNotes());
  }
  _keyExtractor = (item, index) => item.id;

  render() {
    return (

      <View style={styles.container}>

        {
          this.props?.notes.isLoading ?
            <ActivityIndicator style={styles.activityIndicator} size="large" color="#000" /> :
            this.props?.notes.isError ?
              <Text>Error, please try again!</Text>
              : (
                <FlatList
                  style={styles.noteList}
                  data={this.props?.notes.data}
                  keyExtractor={this._keyExtractor}
                  numColumns='2'
                  onRefresh={this._onRefresh}
                  refreshing={this.props?.notes.isLoading}
                  renderItem={({ item }) => <Card navigation={this.props.navigation} data={item} />}


                />
              )
        }
        <Fab navigation={this.props.navigation} />

      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    notes: state?.notes
  }
}


export default connect(mapStateToProps)(HomeScreen)


const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    justifyContent: 'center',
    backgroundColor: '#FAFEFF',
    alignItems: 'center'
  },
  activityIndicator: {
    paddingTop: 300,
    position: 'absolute',
  },
  noteList: {
    marginTop: 70,
    paddingBottom: 100
  },


});