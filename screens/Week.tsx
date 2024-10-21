import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from './RootStackParams';
import { Ionicons } from '@expo/vector-icons';

type SixWeekCoursesScreenProp = NativeStackNavigationProp<RootStackParams, 'Week'>;

const sixWeekCourses = [
  { id: '1', title: 'Child Minding', price: 'R750', image: require('../_images/child.jpg'), description: 'In depth course on how to care for children. You will be learing everything there is to know about child care.', lessonPlan: 'Lesson 1: How to change a diaper' },
  { id: '2', title: 'Cooking', price: 'R750', image: require('../_images/cooking.jpg'), description: 'In depth course on how to create culinary masterpieces. You will be learning every cooking technique known to man.', lessonPlan: 'Lesson 1: Proper knife etiquette' },
  { id: '3', title: 'Garden Maintenance', price: 'R750', image: require('../_images/garden.jpg'), description: 'In depth course on how to create beautiful gardens. You will be learing how to create and maintain gardens.', lessonPlan: 'Lesson 1: Pruning 101' },
];

const SixWeekCourses: React.FC = () => {
  const navigation = useNavigation<SixWeekCoursesScreenProp>();

  const handleCoursePress = (course: typeof sixWeekCourses[0]) => {
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
        <Image source={require('../_images/logo.png')} style={styles.logo} />
        <Text style={styles.businessName}>Empowering the Nation</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={sixWeekCourses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCoursePress(item)} style={styles.card}>
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
    maxWidth: '45%', 
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

export default SixWeekCourses;
