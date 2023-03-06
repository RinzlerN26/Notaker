import React, { useState } from 'react';
import {Dimensions,KeyboardAvoidingView,StyleSheet,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Button,Text} from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateNote() {
    const[note,setNote]=useState("")
    const navigation=useNavigation()

    const saveNote = async() =>{
        
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value):[]
        n.push(note)
        await AsyncStorage.setItem("NOTES",JSON.stringify(n))
        .then(() => navigation.navigate("AllNotes"))
        setNote("")
    }
    
    return (
    <View style={styles.container}>
       <Text style={styles.title} category="h1" >
         Create Note
       </Text>
       <TextInput
           value={note}
           onChangeText={setNote}
           style={ {color:"#fff",fontSize:22,height:40,lineHeight:22} }
           multiline={true}
           autoFocus
           selectionColor='#fff'
           />
       <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding":"height"} style={styles.bottom}>
           <Button style={StyleSheet.button} appearance="filled" onPress={saveNote}>
             Create Note
           </Button>
           
        </KeyboardAvoidingView>   
    
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#222B45",
		color: "white",
		padding: 30,
		paddingTop: 80,
		width: Dimensions.get("window").width
	},
	bottom: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 36
  },	
  title: {
		textAlign: "center",
		marginTop: -30
	},
	button: {
		marginBottom: 30
	}
})
