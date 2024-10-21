import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from './RootStackParams';
import { Ionicons } from '@expo/vector-icons';

type SixMonthCoursesScreenProp = NativeStackNavigationProp<RootStackParams, 'Enrol'>;

const sixMonthCourses = [
  { id: '1', title: 'Sewing', price: 'R1500', image: require('../_images/sew.jpg'), description: 'In depth course on the art of sewing. this course will teach you all the different techniques.', lessonPlan: 'Lesson 1: Cross sewing' },
  { id: '2', title: 'Life Skills', price: 'R1500', image: require('../_images/lifeSkill.jpg'), description: 'In depth course on skills that will help you navigate life.', lessonPlan: 'Lesson 1: How to file for a tax return' },
  { id: '3', title: 'Landscaping', price: 'R1500', image: require('../_images/landscaping.jpg'), description: 'In depth course on Landscaping, you will be learning how to tend to the land and make a beautiful ground', lessonPlan: 'Lesson 1: How to level the ground' },
  { id: '4', title: 'First Aid', price: 'R1500', image: require('../_images/firstAid.jpg'), description: 'In depth course on how to tend to minor injuries. You will be leraning how to become a qualified medical professional.', lessonPlan: 'Lesson 1: How to administer a sedative' },
];

const SixMonthCourses: React.FC = () => {
  const navigation = useNavigation<SixMonthCoursesScreenProp>();

  const handleCoursePress = (course: typeof sixMonthCourses[0]) => {
    navigation.navigate('Enrol', {
      courseId: course.id,
      title: course.title,
      image: course.image,
      price: course.price,
      description: course.description,
      lessonPlan: course.lessonPlan,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../_images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.businessName}>Empowering the Nation</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={sixMonthCourses}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleCoursePress(item)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
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
    padding: 10,
    backgroundColor: '#F5F5DC',
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
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#4CAF50',
  },
  backButton: {
    padding: 10,
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

export default SixMonthCourses;