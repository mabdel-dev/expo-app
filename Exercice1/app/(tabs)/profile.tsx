import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Your personal information</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E0', // Light orange background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E65100', // Dark orange text
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#F57C00', // Medium orange text
  },
});