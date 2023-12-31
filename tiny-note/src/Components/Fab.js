import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

export default class Fab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onClick()} style={this.props?.varient ? styles.fabAdd : styles?.fab}>
        {
          this.props?.varient ? (
            <FontAwesomeIcon icon={faCheck} size={20} />
          ) : (
            <FontAwesomeIcon icon={faPlus} size={20} />
          )
        }

      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: '#FFF',
    borderRadius: 30,
    elevation: 2,
    color: '#000'
  },
  fabAdd: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: '#00FF00',
    borderRadius: 30,
    elevation: 2,
    color: '#000'
  },

});