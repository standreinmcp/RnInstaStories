import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    activityIndicatorContainer: {
        width: '100%',
        zIndex: 10,
        paddingHorizontal: 50,
        height: 30,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    indicatorContainer: {
        flex: 1,
        height: 20,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    indicatorContainerActive: {
        backgroundColor: 'red',
    },
    indicatorContainerInactive: {
        backgroundColor: 'grey',
    },
    activityIndicator: {
        height: 20,
        backgroundColor: 'red'
    },
})