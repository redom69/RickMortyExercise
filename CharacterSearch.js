import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const CharacterSearch = () => {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);

    const fetchCharacter = async () => {
        try {
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/?name=${characterName}`
            );

            if (response.data.results.length > 0) {
                setCharacterData(response.data.results[0]);
            } else {
                setCharacterData(null);
                alert('Character not found');
            }
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rick and Morty Character Guide</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter character name"
                value={characterName}
                onChangeText={(text) => setCharacterName(text)}
            />
            <Button title="Submit" onPress={fetchCharacter} />
            {characterData && (
                <View style={styles.characterContainer}>
                    <Image
                        source={{ uri: characterData.image }}
                        style={styles.characterImage}
                    />
                    <Text style={styles.characterName}>{characterData.name}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    characterContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    characterImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    characterName: {
        fontSize: 18,
        marginTop: 10,
    },
});

export default CharacterSearch;
