import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, FlatList, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

type Course = {
    id: string;
    title: string;
    price: number;
};

type MyCoursesParams = {
    selectedCourses: Course[];
    name: string;
    email: string;
};

type FeesScreenNavigationProp = StackNavigationProp<{
    MyCourses: MyCoursesParams;
}>;

const FeesScreen = () => {
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [totalVisible, setTotalVisible] = useState(false);

    const navigation = useNavigation<FeesScreenNavigationProp>();

    const courses = [
        { id: '1', title: 'First Aid', price: 1500 },
        { id: '2', title: 'Sewing', price: 1500 },
        { id: '3', title: 'Landscaping', price: 1500 },
        { id: '4', title: 'Life Skills', price: 1500 },
        { id: '5', title: 'Child Minding', price: 750 },
        { id: '6', title: 'Cooking', price: 750 },
        { id: '7', title: 'Garden Maintenance', price: 750 },
    ];

    const toggleCourseSelection = (course: Course) => {
        setSelectedCourses((prev) =>
            prev.includes(course)
                ? prev.filter((item) => item.id !== course.id)
                : [...prev, course]
        );
    };

    const calculateTotal = () => {
        let total = selectedCourses.reduce((sum, course) => sum + course.price, 0);
        const numberOfCourses = selectedCourses.length;
        let discount = 0;

        if (numberOfCourses === 2) {
            discount = 0.05;
        } else if (numberOfCourses === 3) {
            discount = 0.10;
        } else if (numberOfCourses > 3) {
            discount = 0.15;
        }

        total -= total * discount;
        const vat = total * 0.15;
        total += vat;
        return total.toFixed(2);
    };

    const handlePurchase = () => {
        if (!name || !email) {
            Alert.alert("Input Error", "Please enter both your name and email.");
            return;
        }

        Alert.alert("Purchase Successful", "Consultant Rrequested Successfully");
        setSelectedCourses([]);
        setName('');
        setEmail('');
        setTotalVisible(false);

        navigation.navigate('MyCourses', {
            selectedCourses,
            name,
            email,
        });
    };

    return (
        <View style={styles.feesContainer}>
            <View style={styles.header}>
                <Image source={require('../_images/logo.png')} style={styles.logo} />
                <Text style={styles.companyName}>Empowering the Nation</Text>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.imageContainer}>
                <Image source={require('../_images/fees/feesHero.jpg')} style={styles.mainImage} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button title="Select Courses" onPress={() => setModalVisible(true)} />
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Courses</Text>
                        <FlatList
                            data={courses}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.courseItem, selectedCourses.includes(item) && styles.selectedItem]}
                                    onPress={() => toggleCourseSelection(item)}
                                >
                                    <Text style={styles.courseText}>{item.title}</Text>
                                    <Text style={styles.coursePrice}>R{item.price}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <Button title="Done" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            <Text style={styles.sectionTitle}>Selected Courses:</Text>
            {selectedCourses.map((course, index) => (
                <Text key={index} style={styles.selectedCourse}>{course.title} - R{course.price}</Text>
            ))}
            <Button
                title="Calculate Total Fees"
                onPress={() => {
                    setTotalVisible(true);
                }}
                color="#8B4513"
            />
            {totalVisible && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total Fee:</Text>
                    <Text style={styles.totalValue}>R{calculateTotal()}</Text>
                </View>
            )}
            <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                <Button
                    title="Submit Request"
                    onPress={handlePurchase}
                    color="#8B4513"
                />
            </View>
        </View>
    );
};
export default FeesScreen;

const styles = StyleSheet.create({
    feesContainer: {
        flex: 1,
        backgroundColor: '#F5F5DC',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    backButton: {
        position: 'absolute',
        right: 0,
    },
    companyName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    mainImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    separator: {
        width: '100%',
        height: 4,
        backgroundColor: '#ccc',
        marginVertical: 20,
      },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    courseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f5f5f5',
        marginVertical: 5,
        borderRadius: 5,
    },
    selectedItem: {
        backgroundColor: '#d4edda',
    },
    courseText: {
        fontSize: 16,
    },
    coursePrice: {
        fontSize: 14,
        color: '#4CAF50',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    selectedCourse: {
        fontSize: 16,
        marginVertical: 2,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    buttonContainer: {
        marginVertical: 5,
    },
   
});
