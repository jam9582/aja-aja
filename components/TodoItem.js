import React from 'react';
import { View, Text } from 'react-native';

export default function TodoItem({ text }) {
  return (
    <View style={{ padding: 10, backgroundColor: '#f3f3f3', marginBottom: 5, borderRadius: 8 }}>
      <Text>{text}</Text>
    </View>
  );
}