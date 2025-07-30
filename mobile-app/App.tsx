import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

interface ApiResponse {
  status: string;
  timestamp: string;
  service: string;
}

export default function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Loading...');
  const [apiHealth, setApiHealth] = useState<ApiResponse | null>(null);

  useEffect(() => {
    checkBackendConnection();
  }, []);

  const checkBackendConnection = async () => {
    try {
      // Test connection to backend
      const response = await fetch('http://localhost:3001');
      const data = await response.text();
      setBackendStatus(data);

      // Check API health
      const healthResponse = await fetch('http://localhost:3001/api/health');
      const healthData = await healthResponse.json();
      setApiHealth(healthData);
    } catch (error) {
      setBackendStatus('Backend connection failed: ' + (error as Error).message);
      Alert.alert('Connection Error', 'Unable to connect to backend server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile App</Text>
      
      <View style={styles.statusContainer}>
        <Text style={styles.subtitle}>Backend Status:</Text>
        <Text style={styles.statusText}>{backendStatus}</Text>
        
        {apiHealth && (
          <View style={styles.healthContainer}>
            <Text style={styles.subtitle}>API Health:</Text>
            <Text>Status: {apiHealth.status}</Text>
            <Text>Service: {apiHealth.service}</Text>
            <Text>Last checked: {new Date(apiHealth.timestamp).toLocaleString()}</Text>
          </View>
        )}
      </View>

      <Button 
        title="Refresh Connection" 
        onPress={checkBackendConnection}
      />
      
      <Text style={styles.description}>
        This mobile app communicates with the same NestJS backend as the admin web app.
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  statusContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
  },
  statusText: {
    fontSize: 16,
    marginVertical: 5,
  },
  healthContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e8f5e8',
    borderRadius: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});
