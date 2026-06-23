import React, { useRef, useEffect } from 'react';
import { View, Text, Button, Animated } from 'react-native';
import styles from '../styles/styles';

const FadeInText = (props) => {
	const fadeAnim = useRef(new Animated.Value(0)).current

	React.useEffect(() => {
	Animated.timing(
		fadeAnim,
		{
		toValue: 1,
		duration: 5000,
		useNativeDriver: false,
		}
	).start();
	}, [fadeAnim])

	return (
	<Animated.Text
		style={{
		fontSize: 20,
		textAlign: 'center',
		justifyContent: 'center',
		margin: 10,
		width: 250,
		backgroundColor: '#007bff',
		opacity: fadeAnim,
		}}
	>
		{props.children}
	</Animated.Text>
	);
}

function HomeScreen({navigation}) {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>

			<FadeInText>
				Fade In Text
			</FadeInText>
		</View>
	);
}

export default HomeScreen;