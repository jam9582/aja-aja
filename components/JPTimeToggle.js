import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function JPTimeToggle() {
  const [isJ, setIsJ] = useState(true);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={{ marginRight: 10 }}>시간 계획</Text>
      <Switch value={isJ} onValueChange={setIsJ} />
      <Text style={{ marginLeft: 10 }}>{isJ ? 'J형 (계획적)' : 'P형 (유동적)'}</Text>
    </View>
  );
}