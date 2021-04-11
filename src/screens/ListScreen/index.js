// React modules
import React, { useEffect } from 'react'
import {
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'

// Third party libraries
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

// Components
import ErrorMessage from '../../components/ErrorMessage';

// Redux
import { getPokemons } from '../../redux/actions';

// Styles
import styles from './styles';


const ListScreen = ({
    data,
    navigation,
    getPokemons: GET_POKEMONS,
    isLoading,
    hasError
}) => {
    useEffect(() => {
        GET_POKEMONS();
    }, [])

    const handlePressItem = (itemData) => {
        navigation.navigate("ListDetailsScreen", { data: itemData })
    }

    const _renderItem = ({ item, index }) => {
        const { img, name, id, type } = item;

        return (
            <TouchableOpacity
                key={index.toString()}
                activeOpacity={0.8}
                style={styles.cardContainer}
                onPress={() => handlePressItem(item)}
            >

                <View style={styles.subContainer}>
                    <View style={styles.leftSectionContainer}>
                        <View style={styles.flex1}>
                            <Text
                                style={styles.name}
                                adjustsFontSizeToFit
                                numberOfLines={1}
                            >
                                {name}
                            </Text>
                        </View>

                        <View style={styles.flex1}>
                            <View style={styles.typeContainer}>
                                <Text style={styles.type}>
                                    {type}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.flex1}>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>
                                {`#${String(id)}`}
                            </Text>
                        </View>

                        <View style={styles.flex1}>
                            <Image
                                source={{ uri: img }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const handleReachEnd = () => {
        GET_POKEMONS();
    }

    const ListEmptyComponent = () => <Text> There is pokemon data.</Text>
    const ListFooterComponent = () => {
        if (isLoading) return <ActivityIndicator style={{ marginBottom: 32 }} size="large" color="#3B4CCA" />;
        return null;
    }
    return (
        <View style={styles.flex1}>
            { hasError && <ErrorMessage />}

            <View style={styles.flatListContainer}>
                <FlatList
                    data={data}
                    extraData={data}
                    renderItem={_renderItem}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    numColumns={2}
                    keyExtractor={(_, index) => index.toString()}
                    ListEmptyComponent={ListEmptyComponent}
                    onEndReached={handleReachEnd}
                    onEndReachedThreshold={0.1}
                    containerStyle={styles.flex1}
                    contentContainerStyle={styles.contentContainerStyle}
                    ListFooterComponent={ListFooterComponent}
                />
            </View>

        </View>
    )
}

const mapStateToProps = ({ pokemons, isLoading, hasError }) => {
    return {
        data: pokemons,
        isLoading,
        hasError
    }
};

export default connect(
    mapStateToProps,
    { getPokemons })
    (ListScreen);
