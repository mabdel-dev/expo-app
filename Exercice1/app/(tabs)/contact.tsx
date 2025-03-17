import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Get in touch with our team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // Light blue background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1565C0', // Dark blue text
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#1976D2', // Medium blue text
  },
});