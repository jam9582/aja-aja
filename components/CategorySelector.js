import React from 'react';
import { View, Text } from 'react-native';

export default function CategorySelector() {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>카테고리: (예: 공부, 운동 등)</Text>
    </View>
  );
}