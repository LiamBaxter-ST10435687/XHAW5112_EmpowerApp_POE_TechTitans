import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from './RootStackParams';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back button

type EnrolScreenRouteProp = RouteProp<RootStackParams, 'Enrol'>;

const Enrol: React.FC = () => {
  const route = useRoute<EnrolScreenRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { title, image, price, description, lessonPlan } = route.params;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../_images/logo.png')} style={styles.logo} />
        <Text style={styles.companyName}>Empowering the Nation</Text>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Course Image */}
      <Image source={image} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.coursePrice}>{price}</Text>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Course Description */}
      <Text style={styles.courseDescription}>{description}</Text>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Lesson Plan */}
      <Text style={styles.courseLessonPlan}>{lessonPlan}</Text>

      {/* Customized Enrol Button */}
      <TouchableOpacity
        style={styles.enrolButton}
        onPress={() => navigation.navigate('Fees')}
      >
        <Text style={styles.enrolButtonText}>Enrol</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2024 Empowering the Nation</Text>
        <Text style={styles.footerText}>Owners Email: MathhewM32@gmail.com</Text>
        <Text style={styles.footerText}>Business Email: Empowering22@yahoo.co.za</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  backButton: {
    padding: 10,
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coursePrice: {
    fontSize: 18,
    color: '#8B4513',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  courseLessonPlan: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  enrolButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 15, // Increase vertical padding
    paddingHorizontal: 30, // Increase horizontal padding
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20, // Optional: add space below the button
  },
  enrolButtonText: {
    fontSize: 18, // Increase text size
    color: '#FFF',
    fontWeight: 'bold',
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
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#8B4513',
    marginVertical: 10, 
  },
});

export default Enrol;
