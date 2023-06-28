import React, { Component } from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, View } from 'react-native';


import { connect } from 'react-redux';

import { deleteNotes } from '../redux/action/notes';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    deleteNote(id) {
        if (id !== undefined) {
            this.props.dispatch(deleteNotes(id))
        }
        this.props.navigation.navigate('Home');
    }
    deleteHandler(item) {
        Alert.alert(
            'Are you sure you want to delete this note ?',
            'This note will be deleted immediately, you can\'t undo this action.',
            [
                { text: 'Cancel', onPress: () => console.log('delete canceled') },
                { text: 'OK', onPress: () => this.deleteNote(item.id) },
            ],
            { cancelable: false },
        );
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('EditNote', this.props.data) }}
                onLongPress={() => { this.deleteHandler(this.props.data) }}
                style={styles.card}>

                <Text numberOfLines={1} style={styles.title}>{this.props.data.title}</Text>
                <Text numberOfLines={4} style={styles.note}>{this.props.data.content}</Text>

            </TouchableOpacity>
        )
    }
};


const mapStateToProps = state => {
    return {
        notes: state?.notes
    }
}


export default connect(mapStateToProps)(Card);


const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        backgroundColor: '#66CCCC',
        elevation: 10,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        borderRadius: 5,
        margin: 20,
        padding: 20,
        width: 138,
        height: 136,
        color: '#fff',
    },
    create: {
        fontSize: 11,
        alignSelf: 'flex-end',
        color: '#fff',
        right: -10,
        top: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        top: 10,
        left: 10,
    },
    category: {
        color: '#FFFBFB',
        fontSize: 10,
        top: 8,
        left: 10
    },
    note: {
        color: '#fff',
        fontSize: 12,
        top: 10,
        left: 10
    }
});