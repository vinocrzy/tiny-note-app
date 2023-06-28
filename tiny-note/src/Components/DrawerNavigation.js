import React, { Component } from 'react';
import { Alert, StyleSheet, Modal, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';



import { connect } from 'react-redux';




class DrawerNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _ModalVisible: false,
        };
    }



    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.headerText}>
                    Shaloom Razade
                </Text>


            </View>
        )
    }
}

// map state to props to referring data in store
const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(DrawerNavigation)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 86,
        height: 86,
        borderRadius: 85 / 2,
        marginTop: 35,
        left: 70
    },
    headerText: {
        width: 143,
        height: 22,
        left: 51,
        marginTop: 20,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 23,
        color: '#000000'
    },
    list: {
        marginTop: 20,
    },
    listItem: {
        height: 50,
        flexDirection: 'row',
    },
    listIcon: {
        left: 15,
        width: 20,
        height: 20
    },
    listText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 17,
        color: '#000000',
        lineHeight: 23,

        left: 20

    },
})