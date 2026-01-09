import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = (): JSX.Element => {
  const handlePress = () => {
    Alert.alert('SUCCESS!', 'Your ProMedix EMS app is working perfectly! 🎉');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🚑 ProMedix EMS</Text>
        <Text style={styles.subtitle}>EMT Training Platform</Text>
        <Text style={styles.version}>Version 1.0 - WORKING!</Text>
        
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>🎯 TEST APP</Text>
        </TouchableOpacity>
        
        <Text style={styles.info}>
          ✅ React Native working{'\n'}
          ✅ Android emulator connected{'\n'}
          ✅ Metro bundler running{'\n'}
          ✅ ProMedix EMS ready!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e40af',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#bfdbfe',
    marginBottom: 5,
    textAlign: 'center',
  },
  version: {
    fontSize: 14,
    color: '#93c5fd',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default App;
