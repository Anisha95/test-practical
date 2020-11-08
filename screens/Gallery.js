import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header, Icon} from 'react-native-elements';


export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageGallery: [
                {
                    id: 1, 
                    url: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_505175324_2000131020009280246_158016.jpg'
                },
                {
                    id: 2, 
                    url: 'https://www.eatwell.co.nz/images/articles/Louise-Thomson-happy-people-4.jpg?width=603&height=339&mode=crop'
                },
                {
                    id: 3,
                    url: 'https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy-1024x768.jpeg'
                },
                {
                    id: 4,
                    url: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555383134/shape/mentalfloss/happyhead.jpg'
                },
                {
                    id: 5,
                    url: 'https://cdn.lifehack.org/wp-content/uploads/2015/06/Geniuenly-Happy-People.jpg'
                },
                {
                    id: 6,
                    url: 'https://www.pinclipart.com/picdir/middle/549-5498506_happy-person-png-transparent-images-happy-black-woman.png'
                },
                {
                    id: 7,
                    url: 'https://sites.psu.edu/siowfa14/wp-content/uploads/sites/13467/2014/12/happy.jpg'
                },
                {
                    id: 8,
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjNdulSigWq_0xEbCc7QdyITz6I1jIIK6Jww&usqp=CAU'
                },
                {
                    id: 9,
                    url: 'https://us.123rf.com/450wm/mimagephotography/mimagephotography1502/mimagephotography150200196/36347667-close-up-portrait-of-a-happy-young-african-american-man-laughing-against-gray-background.jpg'
                },
                {
                    id: 10,
                    url: 'https://thumbs.dreamstime.com/b/gorgeous-happy-person-stands-poses-camera-holds-hand-fist-have-joy-excited-isolated-gorgeous-130188313.jpg'
                },
                {
                    id: 11,
                    url: 'https://www.chatelaine.com/wp-content/uploads/2011/07/6f6b55ae4973a3c48f6013c11f23.jpeg'
                }, 
                {
                    id: 12,
                    url: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/8/4/1/85841_serotonin_shutterstock_92466964_300.jpg'
                }
            ]
        };
      }

      renderItemGallery = (item, index, length) => {
            return (
                <Animatable.View style={{alignItems: 'center'}}
                    animation='zoomIn'
                    delay={index * 500}
                >
                    <Image 
                    source={{uri: item.url}}
                    style={{
                        height: 150,
                        width: 135,
                        resizeMode: 'contain',
                        borderWidth: 1
                    }}
                    />
                </Animatable.View>
            );
      }



    render() {
        let {imageGallery} = this.state;
        return (

            <View style={{flex: 1}}>
                <Header
                      containerStyle={{
                        backgroundColor: '#777777',
                        height: 125
                      }}
                      leftComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack(null)}
                        >
                              <Icon
                        name="arrow-left"
                        type="evilicons"
                        color={'white'}
                        size={40}
                      />
                        </TouchableOpacity>
                      }
                      centerComponent={{ text: 'Gallery', style: { color: '#fff', fontSize: 22} }}
                />
                <FlatList
                    data={imageGallery}
                    numColumns={3}
                    renderItem={({item, index}) => this.renderItemGallery(item, index, imageGallery.length)}
                />
            </View>
        );
    }
}