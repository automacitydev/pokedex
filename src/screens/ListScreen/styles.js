import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        width: '42%',
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    subContainer: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingTop: 8,
    },
    flex1: {
        flex: 1
    },
    leftSectionContainer: {
        flex: 1.2
    },
    name: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    typeContainer: {
        borderRadius: 16,
        borderWidth: 0.5,
        alignSelf: 'center',
        backgroundColor: '#f0f6f7'
    },
    type: {
        textAlign: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontWeight: '700',
        fontStyle: 'italic'
    },
    idContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    id: {
        fontStyle: 'italic'
    },
    image: {
        height: 80,
        width: 80,
    },
    flatListContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    contentContainerStyle: {
        paddingVertical: 32
    },
    columnWrapperStyle: {
        justifyContent: 'space-around'
    }
})


export default styles;