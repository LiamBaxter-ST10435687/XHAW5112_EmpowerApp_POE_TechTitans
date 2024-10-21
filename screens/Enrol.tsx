import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from './RootStackParams';
import { Ionicons } from '@expo/vector-icons'; 
type EnrolScreenRouteProp = RouteProp<RootStackParams, 'Enrol'>;

const Enrol: React.FC = () => {
  const route = useRoute<EnrolScreenRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { title, image, price, description, lessonPlan } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../_images/logo.png')} style={styles.logo} />
        <Text style={styles.companyName}>Empowering the Nation</Text>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />

      <Image source={image} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.coursePrice}>{price}</Text>


      <View style={styles.separator} />


      <Text style={styles.courseDescription}>{description}</Text>


      <View style={styles.separator} />


      <Text style={styles.courseLessonPlan}>{lessonPlan}</Text>


      <TouchableOpacity
        style={styles.enrolButton}
        onPress={() => navigation.navigate('Fees')}
      >
        <Text style={styles.enrolButtonText}>Enrol</Text>
      </TouchableOpacity>
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
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  enrolButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 4,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

export default Enrol;
