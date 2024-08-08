import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const ErrorModal = ({ modalVisible, setModalVisible, errorType }) => {
    let errorMessage;

    switch (errorType) {
        case 'nullTitle':
            errorMessage = 'Title field can not be null';
            break;
        case 'nullRoom':
            errorMessage = 'Room field can not be null';
            break;
        case 'nullDay':
            errorMessage = 'Day field can not be null';
            break;
        case 'nullTime':
            errorMessage = 'Time field can not be null';
            break;
        default:
            errorMessage = 'ERROR :(';
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{errorMessage}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default ErrorModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
