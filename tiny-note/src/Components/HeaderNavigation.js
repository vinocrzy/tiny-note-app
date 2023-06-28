import React, { Component } from 'react';
import { Image, Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortAmountDownAlt, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';



class HeaderMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _ModalVisible: false,
            notes: []
        };
    }

    setModalVisibility = (bool) => {
        this.setState({ _ModalVisible: bool });
    }

    HomeNavigation() {
        return (
            <View style={styles.headerContainer}>

                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text style={styles.headerTitle}>Tiny Note</Text>
                </View>


            </View>
        );
    }

    AddNoteNavigation() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.leftHeader}>
                    <FontAwesomeIcon icon={faArrowLeft} size={19} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text style={styles.headerTitle}>ADD NOTE</Text>
                </View>
                <TouchableOpacity onPress={this.props.navigation.getParam('insertNote')} style={styles.rightHeader}>
                    <FontAwesomeIcon icon={faCheck} color={"#2ED1A2"} size={22} />
                </TouchableOpacity>
            </View>
        );
    }

    EditNoteNavigation() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.leftHeader}>
                    <FontAwesomeIcon icon={faArrowLeft} size={19} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text style={styles.headerTitle}>EDIT NOTE</Text>
                </View>
                <TouchableOpacity onPress={this.props.navigation.getParam('updateNote')} style={styles.rightHeader}>
                    <FontAwesomeIcon icon={faCheck} color={"#2ED1A2"} size={22} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            this.props.screen == 'Home' ? this.HomeNavigation() :
                this.props.screen == 'AddNote' ? this.AddNoteNavigation() :
                    this.props.screen == 'EditNote' ? this.EditNoteNavigation() : null
        )
    }
}
export default HeaderMenu;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        alignItems: 'center'
    },
    leftHeader: {
        left: 10,
        padding: 5
    },
    headerTitle: {
        color: '#000',

    },
    rightHeader: {
        right: 10,
        padding: 5
    },
});