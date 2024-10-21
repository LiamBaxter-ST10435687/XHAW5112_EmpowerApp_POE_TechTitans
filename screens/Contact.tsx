import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContactUsScreen = () => {
    const navigation = useNavigation();

    const contactDetails = [
        { id: '1', label: 'Line 1', value: '123-456-7890' },
        { id: '2', label: 'Line 2', value: '098-765-4321' },
        { id: '3', label: 'Line 3', value: '555-555-5555' },
        { id: '4', label: 'Address', value: '123 Main St, City, Country' },
        { id: '5', label: 'Email', value: 'info@example.com' },
        { id: '6', label: 'Website', value: 'www.example.com' },
    ];

    return (
        <View style={styles.contactContainer}>
            <View style={styles.header}>
                <Image source={require('../_images/logo.png')} style={styles.logo} />
                <Text style={styles.businessName}>Empowering the Nation</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../_images/contact/contact.jpg')} style={styles.mainImage} />
            </View>
            <FlatList
                data={contactDetails}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.contactItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.contactLabel}>{item.label}: </Text>
                        <Text style={styles.contactValue}>{item.value}</Text>
                    </View>
                )}
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
    contactContainer: {
        flex: 1,
        backgroundColor: '#F5F5DC',
        paddingHorizontal: 20,
        paddingTop: 40,
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
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    mainImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center',
    },
    bullet: {
        fontSize: 24,
        color: '#8B4513',
        marginRight: 5,
    },
    contactLabel: {
        fontWeight: 'bold',
        color: '#8B4513',
        fontSize: 18,
        textAlign: 'center',
    },
    contactValue: {
        color: '#333',
        fontSize: 18,
        textAlign: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 20,
        width: '100%',
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

export default ContactUsScreen;