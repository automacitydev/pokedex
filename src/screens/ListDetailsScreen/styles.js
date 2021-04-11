import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    imageContainer: {
        flex: 1,
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48
    },
    flex1: {
        flex: 1
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    imgSubContainer: {
        flex: 1,
        alignItems: 'center'
    },
    nameContainer: {
        marginVertical: 16,
        paddingHorizontal: 32,
        alignSelf: 'center',
    },
    name: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 3
    },
    abilitiesContainer: {
        paddingHorizontal: 64,
    },
    abilities: {
        textAlign: 'center',
        marginBottom: 16,
        textDecorationLine: 'underline'
    },
    columnWrapperStyle: {
        justifyContent: 'space-around'
    },
    statsContainer: {
        marginTop: 32,
        paddingHorizontal: 32,
    },
    headerStats: {
        textAlign: 'center',
        marginBottom: 16,
        textDecorationLine: 'underline'
    },
    itemMainContainer: {
        margin: 8
    },
    itemContainer: {
        borderRadius: 16,
        borderWidth: 0.5,
        alignSelf: 'center',
        backgroundColor: '#f0f6f7'
    },
    item: {
        textAlign: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontWeight: '700',
        fontStyle: 'italic'
    }
})


export default styles;