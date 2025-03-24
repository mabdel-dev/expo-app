import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>Email: contact@example.com</Text>
        <Text style={styles.text}>Phone: +212 655 987 432</Text>
        <Text style={styles.text}>Address: 123 Main Street, City, Country</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5E5', // Light red background
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
});