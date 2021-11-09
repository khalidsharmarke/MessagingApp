import React, { Component } from "react"
import { StyleSheet, View, SafeAreaView, Text } from "react-native"
import Header from "./Components/AppHeader"
import MessageHistory from "./Components/MessageHistory"
import MessageInput from "./Components/MessageInput"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: null,
		}
	}

	setUserInput = text => {
		this.setState({ userInput: text })
	}

	postUserInput = e => {
		console.log(this.state)
	}

	render() {
		return (
			<View style={styles.container}>
				<Header></Header>
				<MessageHistory style={styles.history}></MessageHistory>
				<MessageInput
					style={styles.input}
					postUserInput={this.postUserInput}
					setUserInput={this.setUserInput}
				></MessageInput>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "#696969",
	},
	input: {
		// flex: 1,
		// position: "relative",
		marginVertical: "bottom",
	},
	history: {
		flex: 0.8,
	},
})

export default App
