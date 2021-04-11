// React modules
import React, { useEffect } from 'react'
import { View, FlatList, ScrollView } from 'react-native'

// Third party libraries
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Avatar, Text } from 'react-native-elements';

// Components
import Stats from '../../components/Stats';

// Styles
import styles from './styles';

const ListDetailsScreen = ({ route }) => {
    const [data, setData] = React.useState({});

    useEffect(() => {
        setData(route.params.data)
    }, [])

    const img = { uri: data?.img }

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.itemMainContainer}>
                <View style={styles.flex1}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.item}>
                            {item}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView
            style={styles.mainContainer}>
            {Object.keys(data).length > 0 && (
                <>
                    <LinearGradient
                        colors={['#001742', '#ccb58a', '#192f6a']}
                        style={styles.imageContainer}>
                        <View style={styles.imgSubContainer}>
                            <Avatar
                                rounded
                                source={img}
                                size="xlarge"
                            />
                        </View>
                    </LinearGradient>

                    <View style={styles.nameContainer}>
                        <Text h3 style={styles.name}>
                            {data.name}
                        </Text>
                    </View>

                    <View style={styles.abilitiesContainer}>
                        <Text h4 style={styles.abilities}>
                            Abilities
                        </Text>

                        <FlatList
                            data={data.abilities}
                            renderItem={_renderItem}
                            columnWrapperStyle={styles.columnWrapperStyle}
                            numColumns={2}
                            keyExtractor={(_, index) => index.toString()}
                            scrollEnabled={false}
                        />
                    </View>

                    <View style={styles.statsContainer}>
                        <Text h4 style={styles.headerStats}>Base Stats</Text>

                        {data.stats.map(({ name, value }, index) =>
                            <Stats
                                key={index.toString()}
                                name={name}
                                value={value}
                            />
                        )}
                    </View>
                </>
            )}
        </ScrollView >
    )
}

const mapStateToProps = ({ pokemons }) => {
    return {
        data: pokemons,
    }
};

export default connect(
    mapStateToProps,
    null)
    (ListDetailsScreen);