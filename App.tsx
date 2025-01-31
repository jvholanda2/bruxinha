import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function App() {
    return (
        <View style={styles.container}>
            <Image
                source={require("./src/assets/star.png")}
                style={styles.logo}
            />
            <Text
            style={styles.title}
            >Você está mordendo agora?</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Não</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#f3f3ff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 60,
    },
    title: {
        color: 'red',
    },
    buttons: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        //backgroundColor: "green",
        

    },
    button: {
        backgroundColor: 'blue',
        width: "40%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",

    }
    
})