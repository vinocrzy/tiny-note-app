import React, { Component } from 'react';
import { View, TextInput, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { updateNotes } from '../redux/action/notes';

class AddNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      content: '',
      title: ''
    };
  }


  updateNote = () => {
    const { id, title, content } = this.state;
    if (title !== '') {
      this.props.dispatch(updateNotes({ id, title, content }))
      this.props.navigation.navigate('Home');
    }
  }


  componentDidMount = () => {
    this.props.navigation.setParams({ updateNote: this.updateNote })

    this.setState({
      id: this.props.navigation.state.params.id,
      content: this.props.navigation.state.params.content,
      title: this.props.navigation.state.params.title
    })
  }




  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="ADD TITLE..."
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
        />
        <TextInput underlineColorAndroid="transparent"
          placeholder="ADD NOTES..."
          onChangeText={(text) => this.setState({ content: text })}
          value={this.state.content}
          multiline={true} />

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
});