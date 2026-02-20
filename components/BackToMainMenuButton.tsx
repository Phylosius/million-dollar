import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BackToMainMenuButton() {
    const navigation = useNavigation<any>();
    const [fontsLoaded] = useFonts({
        'MoreSugar': require('@/assets/fonts/MoreSugar-Thin.ttf')
    });

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
        },
        backButton: {
            left: 0,
            backgroundColor: "#264653",
            padding: 10,
            borderRadius: 10,
            width: "fit-content",
        },
        backButtonText: {
            color: 'white',
            fontFamily: 'MoreSugar',
            fontSize: 16,
        }
    });

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => navigation.navigate("MainMenu")}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
        </View>
    )
}