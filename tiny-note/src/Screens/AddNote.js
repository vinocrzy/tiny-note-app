import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { insertNotes } from '../redux/action/notes';
import Fab from '../Components/Fab';

class AddNote extends Component {

  constructor(props) {
    super(props);
    this.Categories = this.props.notes.dataCategory;
    this.state = {
      content: '',
      title: ''
    };
  }


  insertNote = () => {
    const { title, content } = this.state;
    if (title !== '') {
      this.props.dispatch(insertNotes({ title, content }))
      this.props.navigation.navigate('Home');
    }
  }

  componentDidMount = () => {
    this.props.navigation.setParams({ insertNote: this.insertNote })
    // this.setDefaultCategory();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.noteHolder}>
          <TextInput placeholder="ADD TITLE..."
            onChangeText={(text) => this.setState({ title: text })}
          />
          <TextInput underlineColorAndroid="transparent"
            placeholder="ADD NOTES..."
            onChangeText={(text) => this.setState({ content: text })}
            multiline={true} />
        </View>



        <Fab onClick={() => this.insertNote()} varient={true} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}


export default connect(mapStateToProps)(AddNote)

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  noteHolder: {
    marginTop: 2,
    paddingBottom: 100
  },
});