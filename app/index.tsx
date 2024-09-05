import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Bottom from './bottom';

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
    <ScrollView style={styles.scrollContainer} >
      <ImageBackground source={require('../assets/images/lancha.jpg')}
      style={styles.background}>

        <View style={styles.overlay}>
        <Text style={styles.mainText}>Sistema Nacional</Text>
        <Text style={styles.subText}>de áreas de conservación</Text>
        <Text style={styles.mainText}>Costa Rica</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CONOCER MÁS</Text>
        </TouchableOpacity>
      </View>

      </ImageBackground>

      {/*Info turismo */}
      <View style={{margin:20, alignItems: 'center', justifyContent: 'center'}}  >
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.parque}>Informacion Turística</Text>
            <Text style={styles.parquesInfo}>Sitio donde el SINAC dispone de manera digital los documentos que produce en función de sus competencias en materia de biodiversidad: recursos naturales, vida silvestre, recursos forestales, áreas silvestres protegidas, cuencas hidrográficas, sistemas hídricos y en materia de la gestión institucional administrativa.</Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttonTuristica}>
            <Text style={styles.buttonText}>Descubra su Destino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTuristica}>
            <Text style={styles.buttonText}>Compra y Reverva en línea</Text>
          </TouchableOpacity>
        </View>
        

      </View>
      
      


      
      {/*Infro de interes */}
      <View style={{ flexDirection: 'row', marginHorizontal: 10}}>
        <View style={[styles.infocontainer1, { backgroundColor: '#258d19' }]}>
          <MaterialIcons name="travel-explore" size={50} color="white" />
          <Text style={styles.footerTitle}>VISITE</Text>
          <Text  style={styles.turismoInfo}>Parques Nacionales</Text>
          <Text  style={styles.turismoInfo}>Turismo Sostenible</Text>
          <Text  style={styles.turismoInfo}>Refugios</Text>
          <Text  style={styles.turismoInfo}>Fotos 360</Text>
          <Text  style={styles.turismoInfo}>Avistamiento de especies</Text>
          
       
        </View>
        <View  style={[styles.infocontainer1, { backgroundColor: '#4ea93b' }]}>
        <Feather name="map" size={50} color="white" />
          <Text style={styles.footerTitle}>EXPLORE</Text>
          <Text  style={styles.turismoInfo}>Conozca de Turismo</Text>
          <Text  style={styles.turismoInfo}>Consejos Túristicos</Text>
          <Text  style={styles.turismoInfo}>Cámaras de Turismo</Text>
        </View>
        <View style={[styles.infocontainer1, { backgroundColor: '#71c55b' }]}>
        <Feather name="map-pin" size={50} color="white" />
          <Text style={styles.footerTitle}>CONOZCA</Text>
          <Text  style={styles.turismoInfo}>Accesibilidad e Inclusion</Text>
          <Text  style={styles.turismoInfo}>Naturaleza Mágica</Text>
          <Text  style={styles.turismoInfo}>Programa de Turismo</Text>
        </View>
      </View>

      {/*Infro de interes */}
      <View style={{marginTop:20}}  >
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.parque}>Areas de Conservación</Text>
        </View>
    
        <View style={{ flexDirection: 'row', marginTop:20, flex: 1}}>

          <View style={styles.infocontainer4}>
          <Image  source={require('../assets/images/Cahuita.jpg')} style={{ width: 100, height: 100, borderRadius:50 }}/>
            <Text style={styles.parquesTitle}>Parque Nacional Cahuita</Text>
            <Text  style={styles.parquesInfo}>¡Playa, bosque y colorida vida marina! Conozca el arrecife de coral mejor conservado del Caribe costarricense y disfrute del paisaje, la cultura y la gastronomía que ofrece la zona</Text>
          </View>
          <View style={styles.infocontainer4}>
          <Image  source={require('../assets/images/VolcanPoas.jpg')} style={{ width:  100, height:  100, borderRadius:50 }}/>
            <Text style={styles.parquesTitle}>Parque Nacional Volcán Poás</Text>
            <Text  style={styles.parquesInfo}>¡Tierra donde la fuerza de la naturaleza y el frescor de las nubes se mezclan! Está activo y posee uno de los cráteres más grandes del mundo. Conozca este coloso sin recorrer grandes distancias.</Text>
          </View>
          <View style={styles.infocontainer4}>
          <Image  source={require('../assets/images/PILA.jpg')} style={{ width:  100, height:  100, borderRadius:50 }}/>
            <Text style={styles.parquesTitle}>Parque Internacional de la Amistad</Text>
            <Text  style={styles.parquesInfo}>¡Es el Área Protegida terrestre más grande de Costa Rica y la única que es binacional, pues su territorio continúa en Panamá!. Ecosistemas de robledal, bosque nuboso, páramo y humedales de altura como las turberas, se pueden observar árboles majestuosos!</Text>
          </View>
        </View>

      </View>
 
      
      {/* Carrusel de imágenes */}
      <View style={styles.confImage}>
       
        <Image source={images[currentIndex]} style={styles.image} />
     
      </View>
      
      <Bottom />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  // titulo

  background: {
    width: '100%',
    height: 400, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Fondo oscuro transparente
    width: '100%',
    height: '100%',
  },
  mainText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    
  },
  subText: {
    color: 'white',
    fontSize: 30,  
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f7c644',  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,

    marginHorizontal: 10,
  },
  buttonText: {
    color: '#6d5b1c',
    fontWeight: 'bold',
    fontSize: 18,
     textAlign: 'center'
  },
  // info turistica
  buttonTuristica: {
    backgroundColor: '#f7c644',  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    flex:1,
    marginHorizontal: 10,
  },
  // mas info
  infocontainer1: {
    flex: 1,
    alignItems: 'center',
    textAlign:'right',
    backgroundColor: '#258d19',
    paddingTop: 20,
    marginBottom: 20,
    height: 300,
  },
  turismoInfo:{
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    textAlign:'left'

  },
  // parques
  parque: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    
  },
  parquesInfo:{
    padding:30,
    textAlign:'center'

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

 
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },


  
});

export default HomeScreen;
