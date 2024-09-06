import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const NationalParks = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() =>{
        const updateLayout = () => {
            const screenWidth = Dimensions.get('window').width;
            setIsSmallScreen(screenWidth < 600);
        };

        const subscription = Dimensions.addEventListener('change', updateLayout);
        updateLayout();
    
        return () => subscription?.remove();
    }, []);

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.phraseContainer}>
                <Text style={styles.phrase}>Descubra su destino favorito, eligiendo los atractivos y servicios que le gustaría disfrutar. Nosotros te daremos la mejor opción para visitar y descubrir la experiencia de tu vida.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Descubra su destino</Text>
                </TouchableOpacity>
            </View>
                
            <View style={styles.mainContainer}>
                <View style={styles.imagesContainer}>
                    <Image  source={require('../assets/images/parks/ManuelAntonio.png')} 
                    style={styles.image} 
                    alt='La imagen muestra una playa tranquila con arena clara y rocas dispersas en la orilla. El mar está sereno y al fondo hay una colina cubierta de vegetación densa. El cielo es suave, posiblemente al atardecer, creando una atmósfera calmada y natural.'
                    />
                </View>

                <View style={styles.parkContainer}>
                    <Text style={styles.tittlePark}>Parque Nacional Manuel Antonio</Text>
                    <Text style={styles.infoPark}>Esta área silvestre protegida se localiza en la costa Pacífica de Costa Rica, en el cantón de Aguirre de la provincia de Puntarenas, a siete kilómetros sur-este de la ciudad de Quepos, es decir a unos 157 kms. al sur de San José. Fue creado el 15 de noviembre de 1972 mediante la Ley No. 5100. Tiene una extensión de 1.983 hectáreas en la parte terrestre y 55.210 hectáreas en la parte marina. La topografía del área es accidentada y en su mayor parte presenta una pendiente de 20% o más. La altitud varia desde los 0 a 160 metros sobre el nivel del mar."</Text>
                    <TouchableOpacity>
                        <Text style={styles.verMas}>...Ver más</Text>
                    </TouchableOpacity>                    
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.imagesContainer}>
                    <Image  
                    source={require('../assets/images/parks/Barbilla.png')} 
                    style={styles.image}
                    alt='La imagen muestra un paisaje verde con colinas suaves cubiertas de vegetación y árboles dispersos. En el fondo, se ven montañas lejanas bajo un cielo nublado. Al centro, se distingue una casa de techo rojo, rodeada de naturaleza. El ambiente es fresco y rural, con una sensación de tranquilidad.'
                    />
                </View>

                <View style={styles.parkContainer}>
                    <Text style={styles.tittlePark}>Parque Nacional Barbilla</Text>
                    <Text style={styles.infoPark}>Esta área silvestre protegida, fue declarada como Reserva Biológica, el 16 de marzo de 1982, un año des pues cambia su categoría de manejo a Zona Protectora y a partir de Enero de 1998 se le otorga por decreto ejecutivo, la categoría de Parque Nacional. Su objetivo principal es la conservación del bosque húmedo tropical y las áreas de recarga acuífera, de gran producción hídrica que dando lugar a un sin número de ríos y riachuelos tributarios del Rio Barbilla. Comprende un área de 11.994,74 hectáreas.</Text>
                    <TouchableOpacity>
                        <Text style={styles.verMas}>...Ver más</Text>
                    </TouchableOpacity>                    
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.imagesContainer}>
                    <Image  
                    source={require('../assets/images/parks/BarraHonda.png')} 
                    style={styles.image}
                    alt='La imagen muestra una formación rocosa dentro de una cueva. Las rocas tienen formas redondeadas y texturas irregulares, con tonos marrones y beige. La superficie es rugosa y parece erosionada por el tiempo, lo que sugiere la presencia de estalactitas o estalagmitas. El ambiente es oscuro y cerrado, típico del interior de una caverna.'
                    />
                </View>

                <View style={styles.parkContainer}>
                    <Text style={styles.tittlePark}>Parque Nacional Barra Honda</Text>
                    <Text style={styles.infoPark}>Se encuentra ubicado en la provincia de Guanacaste a 22 kilómetros al noreste de la ciudad BARRA HONDA.jpgde Nicoya. Su extensión es de 2295 hectáreas, posee una precipitación anual 1.970 ml y una temperatura promedio de 28°C. Fue creado el 03 de Septiembre de 1974, con el objetivo de proteger un sistema de cavernas de origen calcáreo.</Text>
                    <TouchableOpacity>
                        <Text style={styles.verMas}>...Ver más</Text>
                    </TouchableOpacity>                    
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.imagesContainer}>
                    <Image  
                    source={require('../assets/images/parks/IsladelCoco.jpg')} 
                    style={styles.image}
                    alt='La imagen muestra dos tiburones nadando en aguas profundas.'
                    />
                </View>

                <View style={styles.parkContainer}>
                    <Text style={styles.tittlePark}>Parque Nacional Isla del Coco</Text>
                    <Text style={styles.infoPark}>El Parque Nacional Isla del Coco (PNIC),se encuentra localizado en el Océano Pacifico a 535 Km de Cabo Blanco, Costa Pacifica de Costa Rica. Entre los paralelos 5"30' y 5"34' y los meridianos 87"10 y 87"6'. Tiene una superficie de 24 kilómetros cuadrados y un área marina de 12 millas náuticas a su alrededor, tiene una profusa vegetación y una particular biodiversidad que la dotan de especial interés para científicos y turistas.</Text>
                    <TouchableOpacity>
                        <Text style={styles.verMas}>...Ver más</Text>
                    </TouchableOpacity>                    
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.imagesContainer}>
                    <Image  
                    source={require('../assets/images/parks/LaAmistad.png')} 
                    style={styles.image}
                    alt='La imagen muestra un paisaje de una cadena montañosa cubierta de densos bosques. En primer plano se ven las copas de los árboles, y las montañas se extienden hacia el fondo bajo un cielo despejado con pocas nubes.'
                    />
                </View>

                <View style={styles.parkContainer}>
                    <Text style={styles.tittlePark}>Parque Internacional La Amistad</Text>
                    <Text style={styles.infoPark}>Se localiza en la Cordillera de Talamanca, al sur de Costa Rica hasta la Frontera con Panamá, rodeado por otras áreas silvestres y de territorios Indígenas. Se estableció el 4 de febrero de 1982, mediante Decreto Ejecutivo N.13324-A. Con sus 197.527 ha., es considerada como el área Silvestre protegida de mayor diversidad biológica del país, debido a su amplio rango altitudinal, fuertes cambios climáticos y variedad de suelos, los cuales propician muy diversos ecosistemas y un alto endemismo. Contiene además, la masa boscosa mas extensa y virgen del país. Por lo anterior tiene el merito de recibir las denominaciones internacionales de Sitio de Patrimonio Mundial Natural (UNESCO).</Text>
                    <TouchableOpacity>
                        <Text style={styles.verMas}>...Ver más</Text>
                    </TouchableOpacity>                    
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.imagesContainer}>
                    <Image  
                    source={require('../assets/images/parks/RincondelaVieja.png')} 
                    style={styles.image}
                    alt='La imagen muestra un bosque denso con la luz del sol filtrándose a través del follaje. Los rayos de luz crean un efecto visual impresionante al atravesar la niebla o la humedad presente en el aire, iluminando partes del verdor y los troncos de los árboles.'
                    />
                </View>

                <View style={styles.parkContainer}>
                    <Text style={styles.tittlePark}>Parque Nacional Rincón de la Vieja</Text>
                    <Text style={styles.infoPark}>El Parque Nacional Rincón de la Vieja, fue declarado por Ley Nº 5398 del 23 de octubre de 1973. Su extensión es de 14.300 hectáreas. Se encuentra dividido en dos sectores de visitación turística: Las Pailas y Santa María; ambos sectores tienen atractivos muy particulares, debido a la importancia de sus ecosistemas, en los cuales sobresalen las manifestaciones volcánicas.</Text>
                    <TouchableOpacity>
                        <Text style={styles.verMas}>...Ver más</Text>
                    </TouchableOpacity>                    
                </View>
            </View>
            
            <View style={{height: 50}}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    phraseContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    phrase: {
        fontSize: 20,
        color: '#44454f',
        textAlign: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#258d19',
        marginLeft: 10,
        marginTop: 20,
        width: 210,
        height: 55,
        borderRadius: 30
    }, 
    buttonText: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    mainContainer: {
        flex: 1,
        marginTop: 15,
        marginRight: 15,
        flexDirection: 'row'
    },
    imagesContainer: {
        flex: 1,               
        justifyContent: 'center',
        alignItems: 'center',
    },
    parkContainer: {
        flex: 3,    
        justifyContent: 'center'
    },
    image: {
        height: 200,
        width: 301
    },
    tittlePark: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 700,
        color: '#4ea93b',
        marginBottom: 5,
        height: 'auto',
    },
    infoPark: {
        textAlign: 'left',
        fontSize: 18,
    },
    verMas: {
        fontSize: 18,
        color: '#0645AD',
        textDecorationLine: 'underline'
    }
});

export default NationalParks;