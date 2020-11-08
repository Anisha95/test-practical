import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
         firstName: props.navigation.getParam('id') === props.testPracDetails.id ? props.testPracDetails.firstName : '',
         lastName: props.navigation.getParam('id') === props.testPracDetails.id ? props.testPracDetails.lastName : '',
         phoneNumber: props.navigation.getParam('id') === props.testPracDetails.id ? props.testPracDetails.phoneNumber : '',
        };
      }

      onChangeText = (text, label) => {

        this.setState({ [label]: text });
    }


    onSubmit = () => {
        let data = {
            id: this.props.navigation.getParam('id'),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber
        }
        if (this.state.firstName) {
            this.props.dispatch({
                type: 'ADD_TEST',
                data
            })
        }
       
        this.props.navigation.goBack(null)
    }
  

    render() {

        let slotNumber = this.props.navigation.getParam('id');
        
         
        return (
            <View style={{justifyContent: 'center', margin: '8%', }}>
               <Text style={{fontSize: 22}}>Booking for Slot Number {slotNumber}</Text>
               <View style={{ paddingTop: '20%', padding: '8%'}}>
               <View style={{marginTop: '10%'}}>
                   <Text>First Name</Text>
                   <TextInput
                    style={styles.textView}
                    onChangeText={text => this.onChangeText(text, 'firstName')}
                    value={this.state.firstName}
                    />
               </View>
               <View style={{marginTop: '10%'}}>
                   <Text>Last Name</Text>
                   <TextInput
                   style={styles.textView}
                    onChangeText={text => this.onChangeText(text, 'lastName')}
                    value={this.state.lastName}
                    />
               </View>
               <View style={{marginTop: '10%'}}>
                   <Text>Phone Number</Text>
                   <TextInput
                   style={styles.textView}
                    onChangeText={text => this.onChangeText(text, 'phoneNumber')}
                    value={this.state.phoneNumber}
                    />
               </View>
               </View>
               <View style={{marginTop: '40%', flexDirection: 'row', justifyContent: 'space-evenly'}}>
               <TouchableOpacity style={styles.saveButtonStyle}
                   onPress={this.onSubmit}
                   >
                        <Text style={{color: 'white', letterSpacing: 2}}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButtonStyle}
                        onPress={() => this.props.navigation.goBack(null)}
                        >
                        <Text style={{color: 'white', letterSpacing: 2}}>CANCEL</Text>
                    </TouchableOpacity>
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textView: {
        height: 60, 
        borderColor: 'gray', 
        borderBottomWidth: 1,  
        width: '100%',
    },
    saveButtonStyle: {
        backgroundColor: '#800080', 
        padding: '3%', 
        width: '40%',
        alignItems: 'center'
    },
    cancelButtonStyle: {
        backgroundColor: 'grey', 
        padding: '3%', 
        width: '40%',
        marginRight: '4%',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => ({
    testPracDetails: state.testPracDetails
})

export default connect(mapStateToProps)(Details);