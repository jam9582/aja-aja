import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import globalStyles from '../styles/globalStyles';
import JPTimeToggle from '../components/JPTimeToggle';
import CategorySelector from '../components/CategorySelector';
import TodoItem from '../components/TodoItem';

console.log('🧪 JPTimeToggle:', JPTimeToggle);

export default function HomeScreen() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === '') return;
    setTodos([...todos, { id: Date.now().toString(), text: todo }]);
    setTodo('');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>오늘의 할 일</Text>
      <JPTimeToggle />
      <CategorySelector />
      <View style={globalStyles.inputContainer}>
        <TextInput
          style={globalStyles.input}
          placeholder="할 일을 입력하세요"
          value={todo}
          onChangeText={setTodo}
        />
        <Button title="추가" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem text={item.text} />}
      />
    </View>
  );
}