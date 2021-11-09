import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.textColor}>Khalid's Messaging App</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
	},
	textColor: {
		color: "white",
	},
})
