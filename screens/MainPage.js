import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux'
import Circle from './components/Circle';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: '9 AM'},
        {id: 2, name: '10 AM'},
        {id: 3, name: '11 AM'},
        {id: 4, name: '12 PM'},
        {id: 5, name: '1 PM'},
        {id: 6, name: '2 PM'},
        {id: 7, name: '3 PM'},
        {id: 8, name: '4 PM'},
        {id: 9, name: '5 PM'},
      ],
      selectedId: null
    };
  }



  componentDidUpdate(nextProps, nextState) {
      let {testPracDetails} = this.props;
      console.log(testPracDetails)
    if (testPracDetails.id && this.state.selectedId !== testPracDetails.id) {
            this.setState({
                selectedId: testPracDetails.id
            })
      }
  }

  onPressSlot = (item) => {
    let {navigation} = this.props;
    navigation.navigate('Details', {id: item.id})
    this.setState({
        slotSelected: item.id
    })
  }

  

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.slotView, 
            this.state.selectedId == item.id
            ? {backgroundColor: '#FF4D4D'} 
            : {backgroundColor: '#f2f2f2'}]}
        onPress={() =>  this.onPressSlot(item)}
        >
        <Text>{item.name}</Text>
        {this.state.selectedId !== item.id
        ?
        (<Icon
              name="arrow-right"
              type="evilicons"
              size={25}
            />) 
            : (
             <Icon
              name="check"
              type="evilicons"
              color={'white'}
              size={25}
            />)
        }
        
      </TouchableOpacity>
    );
  };

  render() {
    let titleText = this.state.selectedId ? `You have selected Slot ${this.state.selectedId}!` : 'Choose your time slot!';
    return (
      <View style={styles.mainView}>
        <Text style={{margin: '5%', fontSize: 22}}>{titleText}</Text>
        <FlatList
          style={{width: '100%',}}
          data={this.state.data}
          extraData={this.state}
          renderItem={this.renderItem}
        />
        <Circle navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        backgroundColor: 'white',
    },
    slotView: {
        alignSelf: 'center',
        margin: '4.5%',
        width: '85%',
        borderRadius: 8,
        padding: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const mapStateToProps = (state) => ({
    testPracDetails: state.testPracDetails
})

export default connect(mapStateToProps)(MainPage);
