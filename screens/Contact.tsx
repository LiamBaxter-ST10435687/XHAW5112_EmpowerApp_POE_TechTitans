import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import RNPickerSelect from 'react-native-picker-select';

const ContactUsScreen = () => {
    const navigation = useNavigation();

    const contactDetails = [
        { id: '1', label: 'Line 1', value: '123-456-7890' },
        { id: '2', label: 'Line 2', value: '098-765-4321' },
        { id: '3', label: 'Line 3', value: '555-555-5555' },
    ];

    const [selectedAddress, setSelectedAddress] = useState('27 Commissioner Street');
    const [region, setRegion] = useState({
        latitude: -26.2041,
        longitude: 28.0473,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const handleAddressChange = (address: string) => {
        setSelectedAddress(address);
        let newRegion;
        switch (address) {
            case '27 Commissioner Street':
                newRegion = { latitude: -26.2041, longitude: 28.0473, latitudeDelta: 0.01, longitudeDelta: 0.01 };
                break;
            case '27 Jan Smuts Avenue':
                newRegion = { latitude: -26.1461, longitude: 28.0328, latitudeDelta: 0.01, longitudeDelta: 0.01 };
                break;
            case 'Louis Botha Avenue':
                newRegion = { latitude: -26.1711, longitude: 28.0740, latitudeDelta: 0.01, longitudeDelta: 0.01 };
                break;
            default:
                newRegion = region;
        }
        setRegion(newRegion);
    };

    return (
        <ScrollView style={styles.contactContainer}>
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
            <View style={styles.separator} />

          
            <RNPickerSelect
                onValueChange={(value) => handleAddressChange(value)}
                items={[
                    { label: '27 Commissioner Street', value: '27 Commissioner Street' },
                    { label: '27 Jan Smuts Avenue', value: '27 Jan Smuts Avenue' },
                    { label: 'Louis Botha Avenue', value: 'Louis Botha Avenue' },
                ]}
                style={pickerSelectStyles}
                value={selectedAddress}
                placeholder={{}}
            />

           
            <MapView
                style={styles.map}
                region={region}
            >
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView>
        </ScrollView>
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
    map: {
        width: '100%',
        height: 250,
        marginBottom: 30,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#8B4513',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginBottom: 20,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#8B4513',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginBottom: 20,
    },
});

export default ContactUsScreen;
