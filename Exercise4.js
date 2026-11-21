import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,TouchableOpacity, SectionList,Alert,Image,Button,
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
  {
    title: 'COFFEE',
    bgcolor: '#E6D5B8',
    iconColor: '#6F4E37',
    iconName: 'mug-hot',
    data: [
      {
        name: 'Iced Caramel Macchiato',
        price: '$5.50',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
      },
      {
        name: 'Classic Espresso',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
      },
    ],
  },
  {
    title: 'TEA & MATCHA',
    bgcolor: '#D8E8D4',
    iconColor: '#2E6F40',
    iconName: 'leaf',
    data: [
      {
        name: 'Iced Matcha Latte',
        price: '$6.00',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400',
      },
      {
        name: 'Earl Grey Tea',
        price: '$4.20',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400',
      },
    ],
  },
  {
    title: 'PASTRIES',
    bgcolor: '#FCE4EC',
    iconColor: '#AD1457',
    iconName: 'cookie-bite',
    data: [
      {
        name: 'Butter Croissant',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
      },
      {
        name: 'Strawberry Tart',
        price: '$6.80',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400',
      },
    ],
  },
];

export default function App() {
  const renderItem = ({ item, section }) => {
    return (
      <TouchableOpacity
        style={[styles.itemContainer, { backgroundColor: '#FFFFFF' }]}
        onPress={() =>
          Alert.alert(`${item.name} (${item.price})`, `Category: ${section.title}`)
        }
      >
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={[styles.itemPrice, { color: section.iconColor }]}>
            {item.price}
          </Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerBanner}>
        <Text style={styles.appTitle}>Cozy Cafe Menu</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="ADD MENU ITEM"
          color="#6F4E37"
          onPress={() => Alert.alert('Add Menu Item clicked!')}
        />
      </View>

      <SectionList
        sections={datasource}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        renderSectionHeader={({
          section: { title, bgcolor, iconName, iconColor },
        }) => (
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
    paddingTop: 40,
    backgroundColor: '#FAF7F2',
  },
  headerBanner: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginTop: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  headerIcon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#D7CCC8',
    padding: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '600',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});