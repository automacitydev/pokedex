// React modules
import React from 'react'
import { View, StyleSheet } from 'react-native'

// Third party libraries
import * as Progress from 'react-native-progress';
import { Text } from 'react-native-elements';

export default function Stats({ name, value }) {
    const colorMapper = () => {
        switch (name) {
            case 'hp':
                return 'rgb(214,41,60)';

            case 'attack':
                return 'rgb(255,186,37)';

            case 'defense':
                return 'rgb(0,130,166)';

            case 'special-attack':
                return 'rgb(119,221,100)';

            case 'special-defense':
                return 'rgb(42,131,53)';

            case "speed":
                return 'rgb(128,166,188)';

            default:
                return 'rgb(128,166,188)';

        }
    }

    const nameMapper = () => {
        switch (name) {
            case 'hp':
                return 'HP';
            case 'attack':
                return 'ATK';
            case 'defense':
                return 'DEF';
            case 'special-attack':
                return 'S-ATK';
            case 'special-defense':
                return 'S-DEF';
            case "speed":
                return 'SPD';
            default:
                return null
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.flex1}>
                <Text style={styles.name}>{nameMapper()}</Text>
            </View>

            <View style={styles.progressBarContainer}>
                <Progress.Bar
                    progress={value / 150}
                    width={240}
                    height={10}
                    borderRadius={16}
                    color={colorMapper()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 4
    },
    flex1: {
        flex: 1
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    progressBarContainer: {
        justifyContent: 'center',
        marginVertical: 4
    }
})

