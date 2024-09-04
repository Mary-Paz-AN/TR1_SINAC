import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
   // Puedes ajustar este valor según lo necesites

  const images = [
    require('../assets/images/f2.jpg'),
    require('../assets/images/f4.jpg'),
    require('../assets/images/f5.jpg'),
    require('../assets/images/f6.jpg'),
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.titleConteiner}>
        <Text style={styles.title}>Sistema Nacional de Áreas de Conservación Costa Rica</Text>
      </View>

      {/* Carrusel de imágenes */}
      <View style={styles.confImage}>
       
        <Image source={images[currentIndex]} style={styles.image} />
     
      </View>
      {/*Infro de interes */}
      <View style={{ flexDirection: 'row'}}>
        <View style={styles.infocontainer1}>
          <MaterialIcons name="travel-explore" size={50} color="white" />
          <Text style={styles.footerTitle}>VISITE</Text>
        </View>
        <View style={styles.infocontainer2}>
        <Feather name="map" size={50} color="white" />
          <Text style={styles.footerTitle}>EXPLORE</Text>
        </View>
        <View style={styles.infocontainer3}>
        <Feather name="map-pin" size={50} color="white" />
          <Text style={styles.footerTitle}>CONOZCA</Text>
        </View>
      </View>
 
      {/*Infro de interes */}
      <View style={{marginTop:20}}  >
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.parque}>Areas de Conservación</Text>
        </View>
    
        <View style={{ flexDirection: 'row', marginTop:20}}>

          <View style={styles.infocontainer4}>
          <Image  source={require('../assets/images/Cahuita.jpg')} style={{ width: 100, height: 100, borderRadius:50 }}/>
            <Text style={styles.parquesTitle}>Parque Nacional Cahuita</Text>
          </View>
          <View style={styles.infocontainer4}>
          <Image  source={require('../assets/images/VolcanPoas.jpg')} style={{ width:  100, height:  100, borderRadius:50 }}/>
            <Text style={styles.parquesTitle}>Parque Nacional Volcán Poás</Text>
          </View>
          <View style={styles.infocontainer4}>
          <Image  source={require('../assets/images/PILA.jpg')} style={{ width:  100, height:  100, borderRadius:50 }}/>
            <Text style={styles.parquesTitle}>Parque Internacional de la Amistad</Text>
          </View>
        </View>

      </View>
      

      {/* Pie de página */}
      <View style={styles.footer}>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>INFORMACION INSTITUCIONAL</Text>
          <Text style={styles.footerText}>Transparencia</Text>
          <Text style={styles.footerText}>Evaluacion del sitio web</Text>
          <Text style={styles.footerText}>Correo institucional</Text>
          <Text style={styles.footerText}>Intranet</Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>ASISTENCIA Y SOPORTE</Text>
          <Text style={styles.footerText}>Preguntas frecuentes</Text>
          <Text style={styles.footerText}>Contáctenos</Text>
          <Text style={styles.footerText}>Glosario</Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>NAVEGACION</Text>
          <Text style={styles.footerText}>Mapa del sitio</Text>
          <Text style={styles.footerText}>Enlaces de interés</Text>
          <Text style={styles.footerText}>Noticias</Text>
          <Text style={styles.footerTitle}>REDES SOCIALES</Text>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <FontAwesome style={{ marginRight: 15 }} name="youtube" size={24} color="white" />
            <FontAwesome style={{ marginRight: 15 }} name="facebook" size={24} color="white" />
            <FontAwesome style={{ marginRight: 15 }} name="twitter" size={24} color="white" />
            <FontAwesome style={{ marginRight: 15 }} name="instagram" size={24} color="white" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  // titulo
  titleConteiner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92e27a',
    marginBottom: 20,
    height: 200,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  // mas info
  infocontainer1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#258d19',
    paddingTop: 20,
    marginBottom: 20,
    height: 300,
  },
  infocontainer2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4ea93b',
    paddingTop: 20,
    marginBottom: 20,
    height: 300,
  },
  infocontainer3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#71c55b',
    paddingTop: 20,
    marginBottom: 20,
    height: 300,
  },
  // parques
  parque: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    
  },
  parquesTitle:{
    color: '#5dc269',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,

  },
  infocontainer4: {
    flex: 1,
    alignItems: 'center',
   
    paddingTop: 20,
    marginBottom: 20,
    height: 300,
  },
 
  // imagenes css
  image:{
    
    resizeMode: 'cover'
  },
 
  confImage:{
    alignItems:'center',
    marginBottom: 20
  },
  // pie de pagina css
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  footerSection: {
    flex: 1,
    marginHorizontal: 10,
  },
  footerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },
  
});

export default HomeScreen;
