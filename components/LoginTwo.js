import {View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import Background from "./Background"
import { Colors } from "../shared/Colors"
import { Image } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native"



export default function LoginTwo(){
    const navigation = useNavigation()
    return(
        <Background color={Colors.BGALT}>
            <View style={styles.container}>
                <View style={styles.Cont}>
                <Pressable style = {styles.Back} onPress={() => {
                    navigation.goBack()
                }}>
                    <FontAwesome6 style = {styles.BackIcon} name="arrow-right-to-bracket" size={30} color={Colors.TXT} />
                </Pressable>
                <Text style = {styles.SendCode}>Details</Text>
                <Pressable style={styles.menu}>
                    <MaterialIcons name="menu" size={35} color={Colors.TXT} />
                </Pressable>
                </View>
                <View style = {styles.IconCont}>
                    <FontAwesome6 name="computer" size={70} color={Colors.TXT} />
                </View>
            </View>
            
                
            <View style={styles.details}>
                <Text style = {styles.text}>Contact information </Text>
                <View style = {styles.numberCont}>
                    <Text style={styles.image}>Name</Text>

                    <TextInput style={styles.textInput } placeholder={'+27 123 456 6789'}/>

                </View>
                <View style = {styles.numberCont}>
                    <Text style={styles.image}>Surname</Text>

                    <TextInput style={styles.textInput } placeholder={'+27 123 456 6789'}/>

                </View>
                <View style = {styles.numberCont}>
                    <Text style={styles.image}>ID Number</Text>

                    <TextInput style={styles.textInput } placeholder={'+27 123 456 6789'}/>

                </View>
                   
                <View>
                    <Text style = {styles.textBelow}>To continue with registrations, press the button below...</Text>
                </View>
                <View>
                    <Pressable style = {styles.Button} onPress={() => {
                        navigation.navigate("Login")
                    }}>
                    <AntDesign name="arrowright" size={40} color={Colors.TXT} />
                    </Pressable>
                </View>
              
            </View>
            
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BG,
        height: 426,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
        
    },
    text: {
        color: Colors.TXT
    },
    details: {
        height: 510,
        width: 343,
        margin: "auto",
        top: -90,
        borderRadius: 25,
        backgroundColor: Colors.BGALT,
        elevation: 9
        
    },
    image: {
        
    },
    textInput: {
        alignSelf: 'flex-end',
        marginHorizontal: "auto",
        width: '80%',
        color: Colors.TXTALT
    },
    text:{
        color: Colors.TXTALT,
        textAlign: 'center',
        marginTop: 50,
        fontSize: 22,
        fontWeight: '500'

    },
    numberCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: 50,
        borderBottomWidth: 0.5,
        width: '85%',
        marginHorizontal: 'auto',
        paddingBottom: 9,
        borderBottomColor: Colors.TXTALT

        
    },
    textBelow:{
        color: Colors.TXTLT,
        textAlign: 'center',
        width: '90%',
        fontSize: 15,
        marginHorizontal: 'auto',
        marginTop: 30

    },
    Button:{
       height: 77,
       width: 77,
       backgroundColor: Colors.BG,
       marginTop: 20,
       marginHorizontal: 'auto',
       borderRadius: 100,
       justifyContent: 'center',
       alignItems: 'center' 
    },
    IconCont:{
        height: 130,
        width: 140,
        backgroundColor: Colors.BG,
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
          
    Back:{
        backgroundColor: Colors.BG,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        
        
        
        
    },
    BackIcon:{
        transform: [{rotate:'180deg'}]
    },
    Cont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        paddingHorizontal: 20
    },
    SendCode:{
        color: Colors.TXT,
        fontSize: 20,
        fontWeight: '500'
    }
})