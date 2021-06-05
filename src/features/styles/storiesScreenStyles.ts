import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	carouselWrap: {
		overflow: 'hidden',
		position: 'absolute',
	},
	closed: {
		width: 0,
		height: 0,
	},
	open: {
		width, height,
		top: 0,
		left: 0,
	},

	btn: {
		width: 40,
		height: 40,
		borderRadius: 40/2,
		backgroundColor: 'black',
	},
});
