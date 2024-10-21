import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from './RootStackParams';

type HomeScreenProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../_images/logo.png')} style={styles.logo} />
        <Text style={styles.businessName}>Empowering the Nation</Text>
      </View>
      <View style={styles.separator} />
      <Image source={require('../_images/home/hero.jpg')} style={styles.mainImage} />

      <View style={styles.separator} />

      <Text style={styles.headingText}>Online Courses Brought to You</Text>

      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Month')}>
          <Text style={styles.buttonText}>6 Month Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Week')}>
          <Text style={styles.buttonText}>6 Week Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Fees')}>
          <Text style={styles.buttonText}>Fees</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2024 Empowering the Nation</Text>
        <Text style={styles.footerText}>Owners Email: MathhewM32@gmail.com </Text>
        <Text style={styles.footerText}>Business Email:
          Empowering22@yahoo.co.za</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  separator: {
    width: '100%',
    height: 4,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '45%',
    height: 60,
    margin: 7,
    borderRadius: 15,
    backgroundColor: '#8B4513',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#D3D3B2',
    height: 90,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Home;
