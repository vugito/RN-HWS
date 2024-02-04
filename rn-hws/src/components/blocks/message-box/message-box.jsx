import React, {useState} from 'react';
import styles from './styles';
import {View, Text, Pressable, Modal} from "react-native";
import {Image} from "expo-image";

const MessageBox = ({message}) => {

    const lastMessage = message.messages.length > 0 ? message.messages[message.messages.length - 1] : null;

    const [userInfoModalVisible, setUserInfoModalVisible] = useState(false);

    console.log(lastMessage);

    return (
        <>
            <View style={styles.container} key={message.id}>

                <View style={styles.centeredView}>
                    <Modal
                        visible={userInfoModalVisible}
                        animationType={"fade"}
                        transparent={true}
                        onRequestClose={() => {
                            console.log('Modal has been closed!')
                            setUserInfoModalVisible(!userInfoModalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalContainer}>
                                {/*<View style={styles.modalTop}>*/}
                                {/*    <Text style={{fontSize: 30, fontWeight: "bold"}}>About user</Text>*/}
                                {/*</View>*/}
                                <View style={styles.modalBody}>
                                    <Image style={styles.modalImg} source={message.profilePhoto}/>
                                    <Text style={[styles.username, {color: '#e8e8e8'}]}>{`@${message.username}`}</Text>
                                    <Text style={styles.personal}>{`${message.name} ${message.surname}`}</Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 2}}>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setUserInfoModalVisible(!userInfoModalVisible)}>
                                            <Image source={require('../../../../assets/icons/info-5DB075.png')} style={styles.icons}/>
                                            {/*<Text style={[styles.username, {color: '#5DB075', fontSize: 20}]}>i</Text>*/}
                                        </Pressable>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setUserInfoModalVisible(!userInfoModalVisible)}>
                                            <Image source={require('../../../../assets/icons/comment-5DB075.png')} style={styles.icons}/>

                                            {/*<Text style={[styles.username, {color: '#5DB075'}]}>i</Text>*/}
                                        </Pressable>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setUserInfoModalVisible(!userInfoModalVisible)}>
                                            <Image source={require('../../../../assets/icons/close-5DB075.png')} style={styles.icons}/>
                                            {/*<Text style={[styles.username, {color: '#5DB075', fontSize: 20, justifyContent: 'center'}]}>x</Text>*/}

                                        </Pressable>
                                    </View>

                                </View>
                            </View>
                        </View>

                    </Modal>
                </View>


                <Pressable style={styles.imgContainer} onPress={()=> setUserInfoModalVisible(true)}>
                    <Image source={message.profilePhoto} style={styles.img}/>
                </Pressable>
                <View style={styles.messageContainer}>
                    <View style={styles.header}>
                        <Text style={styles.username}>{message.username}</Text>
                        <Text style={styles.date}>{lastMessage.createDate}</Text>
                    </View>
                    <View>
                        <Text>{lastMessage.message}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default MessageBox;