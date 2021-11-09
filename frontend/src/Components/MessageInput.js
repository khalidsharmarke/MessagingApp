import React from "react"
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native"

export default function MessageInput(props) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.userInput}
				onChangeText={props.setUserInput}
			></TextInput>
			<Pressable style={styles.button} onPress={props.postUserInput}>
				<Text style={styles.textColor}>Send</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		textAlign: "center",
		flexDirection: "row",
		borderWidth: 1,
	},
	userInput: {
		flex: 0.9,
		color: "white",
	},
	textColor: {
		color: "white",
	},
	button: {
		flex: 0.1,
	},
})
