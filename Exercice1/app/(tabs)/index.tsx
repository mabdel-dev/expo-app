import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Text style={styles.subtitle}>Your personal dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9', // Light green background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32', // Dark green text
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#388E3C', // Medium green text
  },
});