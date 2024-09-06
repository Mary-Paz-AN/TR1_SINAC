import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const Search = () => {
    const { search } = useLocalSearchParams<{ search: string | string[] }>();
    const searchString = (Array.isArray(search) ? search[0] : search || '').toLowerCase();
    const { width } = useWindowDimensions(); // Obtener el ancho de la pantalla
    const isSmallScreen = width < 600;

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Resultado de búsqueda <AntDesign name="right" size={24}  /> <Text  style={{fontWeight: 'bold'}}>{searchString}</Text >
                </Text>
                {search === 'area' || search === 'área' || search === 'áreas' || search === 'areas' ? (
                    <>
                        <View style={[styles.infoBlock, { flexDirection: isSmallScreen ? 'column' : 'row' }]}>
                            <Image source={require('../assets/images/acc.png')} style={styles.image} />
                            <View style={styles.textBlock}>
                                <Text style={styles.subTitle}>Área de Conservación Central (ACC)</Text>
                                <Text style={styles.text}>
                                    Superficie de 860.800 ha equivalente al 16,84% del  <Text  style={{fontWeight: 'bold'}}>área</Text> terrestre del país, del cual el 33,9 … El  <Text  style={{fontWeight: 'bold'}}>Área</Text> de Conservación Central (ACC) es una de las 11 regiones en que está organizado el ….
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.infoBlock, { flexDirection: isSmallScreen ? 'column' : 'row' }]}>
                            <Image source={require('../assets/images/ACOSA.png')} style={styles.image} />
                            <View style={styles.textBlock}>
                                <Text style={styles.subTitle}>Área de Conservación Osa (ACOSA)</Text>
                                <Text style={styles.text}>
                                    La ubicación de esta página es: … El <Text  style={{fontWeight: 'bold'}}>Área</Text> protege y conserva recursos sobresalientes como: el bosque tropical húmedo y muy … Este sitio: <Text  style={{fontWeight: 'bold'}}>Área</Text> de Conservación Osa (ACOSA) ….
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.infoBlock, { flexDirection: isSmallScreen ? 'column' : 'row' }]}>
                            <Image source={require('../assets/images/ACT.png')} style={styles.image} />
                            <View style={styles.textBlock}>
                                <Text style={styles.subTitle}>Área de Conservación Tempisque (ACT)</Text>
                                <Text style={styles.text}>
                                    Es un  <Text  style={{fontWeight: 'bold'}}>área</Text> de gran diversidad topográfica que va desde el nivel del mar hasta los 1.018 mts … Esta  <Text  style={{fontWeight: 'bold'}}>área </Text>es la encargada de la conservación y protección de la cuenca media y baja del río …
                                </Text>
                            </View>
                        </View>
                    </>
                ) : (
                    <Text style={styles.text}>No se encontro información relacionada a la busqueda.</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
     
        marginBottom: 20,
    
    },
    infoBlock: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    textBlock: {
        flex: 1,
        justifyContent: 'center',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'green'
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default Search;
