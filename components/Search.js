// Search.js

import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function Search({ executeSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    executeSearch(search);
  };

  return (
    <View style={styles.searchBox}>
      <TextInput
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search..."
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 20,
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  },
});
