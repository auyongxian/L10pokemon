import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Alert,Image, Button,} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const getCardUrl = (cardNumber) =>
  `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${cardNumber}-2x.png`;

const datasource = [
  {
    title: 'Electric',
    bgcolor: 'yellow',
    iconColor: '#B59B00',
    iconName: 'bolt',
    data: [
      { name: 'Pikachu', card: '25' },
      { name: 'Raichu', card: '26' },
    ],
  },
  {
    title: 'Water',
    bgcolor: 'lightblue',
    iconColor: '#2B6CB0',
    iconName: 'droplet',
    data: [
      { name: 'Squirtle', card: '7' },
      { name: 'Psyduck', card: '54' },
    ],
  },
  {
    title: 'FIRE',
    bgcolor: 'orange',
    iconColor: '#C53030',
    iconName: 'fire',
    data: [
      { name: 'Charmander', card: '4' },
      { name: 'Growlithe', card: '58' },
    ],
  },
];

export default function App() {
  const renderItem = ({ item, section }) => {
    return (
      <TouchableOpacity
        style={[styles.itemContainer, {backgroundColor: section.bgcolor}]}
        onPress={() => Alert.alert(`${item.name} (${section.title}) selected!`)}
      >
        <Text style={styles.pokemonName}>{item.name}</Text>
        <Image
          source={{ uri: getCardUrl(item.card) }}
          style={styles.cardImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title="ADD POKEMON"
          onPress={() => Alert.alert('Add Pokemon clicked!')}
        />
      </View>

      <SectionList
        sections={datasource}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        renderSectionHeader={({ section: { title, bgcolor, iconName, iconColor } }) => (
          <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
            <FontAwesome6
              name={iconName}
              size={18}
              color={iconColor}
              style={styles.headerIcon}
            />
            <Text style={[styles.headerText, { color: iconColor }]}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  buttonWrapper: {
    padding: 20,
    borderWidth: 1,
  },
  listContent: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#555555',
  },
   headerIcon: {
     marginRight: 6,
   },
   headerText: {
     fontSize: 18,
     fontWeight: 'bold',
     letterSpacing: 0.5,
   },
   itemContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     borderWidth: 1,
     padding: 30,
   },
   pokemonName: {
     fontSize: 18,
     fontWeight: 'bold',
     flex: 1,
     textAlign: 'left',
   },
  cardImage: {
    width: 170,
    height: 235,
  },

});