import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';

export default function App() {
  const [items, setItems] = useState(DATA);

  const executeSearch = (search) => {
    const searchArray = DATA.filter(
      (item) =>
        item.lastname.toLowerCase().includes(search.toLowerCase()) ||
        item.firstname.toLowerCase().includes(search.toLowerCase())
    );
    setItems(searchArray);
  };
  

  const renderItem = ({ item }) => {
    return <Row person={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items} // Use the filtered data in FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
