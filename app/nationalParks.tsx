import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Bottom from './bottom';

const NationalParks = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [pressOption, setPressOption] = useState(false);

    useEffect(() =>{
        const updateLayout = () => {
            const screenWidth = Dimensions.get('window').width;
            setIsSmallScreen(screenWidth < 600);
        };

        const subscription = Dimensions.addEventListener('change', updateLayout);
        updateLayout();
    
        return () => subscription?.remove();
    }, []);

    const setPressOp = () =>  {
        if(pressOption) {
            setPressOption(false);
        } else {
            setPressOption(true);
        }
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.phraseContainer}>
                    <Text style={styles.phrase}>Descubra su destino favorito, eligiendo los atractivos y servicios que le gustaría disfrutar. Nosotros te daremos la mejor opción para visitar y descubrir la experiencia de tu vida.</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.buttonText}>Descubra su destino</Text>
                    </TouchableOpacity>
                </View>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ScrollView>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                {/*Cerrar */}
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Text style={{color: 'black', fontSize: 25, fontWeight:'bold', textAlign: 'right'}}>x</Text>
                                </TouchableOpacity> 

                                {/*Entorno */}
                                <View style={styles.header}>
                                    <Text style={styles.modalTitle}>Entorno</Text>
                                    <TouchableOpacity style={styles.buttonSelect}>
                                        <Text style={styles.buttonText}>Seleccionar todo</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.twoColumns}>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Bosque</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.option, {borderColor: pressOption ? '#2a4d3a' : 'none '}, {borderWidth: pressOption ? 3 : 0}]} onPress={() => setPressOp()}>
                                        <Text style={styles.optionText}>Playa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Montaña</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Volcán</Text>
                                    </TouchableOpacity>
                                </ View>
                                
                                {/*Servicios */}
                                <View style={styles.header}>
                                    <Text style={styles.modalTitle}>Servicios</Text>
                                    <TouchableOpacity style={styles.buttonSelect}>
                                        <Text style={styles.buttonText}>Seleccionar todo</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.twoColumns}>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Pago con tarjeta</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Albergue</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Área para acampar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Aula Educativa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Campo Aterrizaje</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Duchas</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Estacionamiento</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Internet</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Radio Comunicación</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Sendero Natural</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Servicios Sanitarios</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Teléfono Público</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Voluntariado</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Agua Potable</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Albergue para Investigación</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Área para Almorzar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Cafetería</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Centro de Información</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Electricidad</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Guía Naturalista</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Primeros Auxilios</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Reserva Previa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Sendero Universal</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Silla de Ruedas</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Tienda</Text>
                                    </TouchableOpacity>
                                </ View>
                                

                                {/*Atractivos */}
                                <View style={styles.header}>
                                    <Text style={styles.modalTitle}>Atractivos</Text>
                                    <TouchableOpacity style={styles.buttonSelect}>
                                        <Text style={styles.buttonText}>Seleccionar todo</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.twoColumns}>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Aguas Termales</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Buceo</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Cascada</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Volcán</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Cascada</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Caverna</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Mirador</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option}>
                                        <Text style={styles.optionText}>Snorkeling</Text>
                                    </TouchableOpacity>
                                </ View>

                                {/*Avistamiento */}
                                <Text style={styles.modalTitle}>Avistamiento</Text>
                                <TouchableOpacity style={styles.option}>
                                    <Text style={styles.optionText}>Si</Text>
                                </TouchableOpacity>

                                {/*Desmarcar todo y Aplicar */}
                                <View style={[styles.header, {marginTop: 20}]}>
                                    <TouchableOpacity
                                    style={{backgroundColor: '#f7c644', width: 'auto', height: 'auto', padding: 10, borderRadius: 8}}>
                                        <Text style={styles.buttonText}>Desmarcar todo</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}
                                        style={{backgroundColor: '#f7c644', width: 'auto', height: 'auto', padding: 10, borderRadius: 8}}>
                                        <Text style={styles.buttonText}>Buscar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
                
                <View style={styles.mainContainer}>
                    <View style={isSmallScreen ? styles.containerColumn : styles.containerRow}>
                        <View style={[styles.imagesContainer, { marginBottom: isSmallScreen ? 15 : 0 }]}>
                            <Image  source={require('../assets/images/parks/ManuelAntonio.png')} 
                            style={styles.image} 
                            alt='La imagen muestra una playa tranquila con arena clara y rocas dispersas en la orilla. El mar está sereno y al fondo hay una colina cubierta de vegetación densa. El cielo es suave, posiblemente al atardecer, creando una atmósfera calmada y natural.'
                            />
                        </View>

                        <View style={styles.parkContainer}>
                            <Text style={styles.tittlePark}>Parque Nacional Manuel Antonio</Text>
                            <Text style={styles.infoPark}>Esta área silvestre protegida se localiza en la costa Pacífica de Costa Rica, en el cantón de Aguirre de la provincia de Puntarenas, a siete kilómetros sur-este de la ciudad de Quepos, es decir a unos 157 kms. al sur de San José. Fue creado el 15 de noviembre de 1972 mediante la Ley No. 5100. Tiene una extensión de 1.983 hectáreas en la parte terrestre y 55.210 hectáreas en la parte marina. La altitud varia desde los 0 a 160 metros sobre el nivel del mar."</Text>
                            <View style={styles.verMasContaier}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Ver más</Text>
                                </TouchableOpacity> 
                            </View>                     
                        </View>
                    </View>

                    <View style={isSmallScreen ? styles.containerColumn : styles.containerRow}>
                        <View style={[styles.imagesContainer, { marginBottom: isSmallScreen ? 15 : 0 }]}>
                            <Image  
                            source={require('../assets/images/parks/Barbilla.png')} 
                            style={styles.image}
                            alt='La imagen muestra un paisaje verde con colinas suaves cubiertas de vegetación y árboles dispersos. En el fondo, se ven montañas lejanas bajo un cielo nublado. Al centro, se distingue una casa de techo rojo, rodeada de naturaleza. El ambiente es fresco y rural, con una sensación de tranquilidad.'
                            />
                        </View>

                        <View style={styles.parkContainer}>
                            <Text style={styles.tittlePark}>Parque Nacional Barbilla</Text>
                            <Text style={styles.infoPark}>Esta área silvestre protegida, fue declarada como Reserva Biológica, el 16 de marzo de 1982, un año des pues cambia su categoría de manejo a Zona Protectora y a partir de Enero de 1998 se le otorga por decreto ejecutivo, la categoría de Parque Nacional. Su objetivo principal es la conservación del bosque húmedo tropical y las áreas de recarga acuífera, de gran producción hídrica que dando lugar a un sin número de ríos y riachuelos tributarios del Rio Barbilla. Comprende un área de 11.994,74 hectáreas.</Text>
                            <View style={styles.verMasContaier}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Ver más</Text>
                                </TouchableOpacity> 
                            </View>                     
                        </View>
                    </View>

                    <View style={isSmallScreen ? styles.containerColumn : styles.containerRow}>
                        <View style={[styles.imagesContainer, { marginBottom: isSmallScreen ? 15 : 0 }]}>
                            <Image  
                            source={require('../assets/images/parks/BarraHonda.png')} 
                            style={styles.image}
                            alt='La imagen muestra una formación rocosa dentro de una cueva. Las rocas tienen formas redondeadas y texturas irregulares, con tonos marrones y beige. La superficie es rugosa y parece erosionada por el tiempo, lo que sugiere la presencia de estalactitas o estalagmitas. El ambiente es oscuro y cerrado, típico del interior de una caverna.'
                            />
                        </View>

                        <View style={styles.parkContainer}>
                            <Text style={styles.tittlePark}>Parque Nacional Barra Honda</Text>
                            <Text style={styles.infoPark}>Se encuentra ubicado en la provincia de Guanacaste a 22 kilómetros al noreste de la ciudad BARRA HONDA.jpgde Nicoya. Su extensión es de 2295 hectáreas, posee una precipitación anual 1.970 ml y una temperatura promedio de 28°C. Fue creado el 03 de Septiembre de 1974, con el objetivo de proteger un sistema de cavernas de origen calcáreo.</Text>
                            <View style={styles.verMasContaier}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Ver más</Text>
                                </TouchableOpacity> 
                            </View>                     
                        </View>
                    </View>

                    <View style={isSmallScreen ? styles.containerColumn : styles.containerRow}>
                        <View style={[styles.imagesContainer, { marginBottom: isSmallScreen ? 15 : 0 }]}>
                            <Image  
                            source={require('../assets/images/parks/IsladelCoco.jpg')} 
                            style={styles.image}
                            alt='La imagen muestra dos tiburones nadando en aguas profundas.'
                            />
                        </View>

                        <View style={styles.parkContainer}>
                            <Text style={styles.tittlePark}>Parque Nacional Isla del Coco</Text>
                            <Text style={styles.infoPark}>El Parque Nacional Isla del Coco (PNIC),se encuentra localizado en el Océano Pacifico a 535 Km de Cabo Blanco, Costa Pacifica de Costa Rica. Entre los paralelos 5"30' y 5"34' y los meridianos 87"10 y 87"6'. Tiene una superficie de 24 kilómetros cuadrados y un área marina de 12 millas náuticas a su alrededor, tiene una profusa vegetación y una particular biodiversidad que la dotan de especial interés para científicos y turistas.</Text>
                            <View style={styles.verMasContaier}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Ver más</Text>
                                </TouchableOpacity> 
                            </View>                     
                        </View>
                    </View>

                    <View style={isSmallScreen ? styles.containerColumn : styles.containerRow}>
                        <View style={[styles.imagesContainer, { marginBottom: isSmallScreen ? 15 : 0 }]}>
                            <Image  
                            source={require('../assets/images/parks/LaAmistad.png')} 
                            style={styles.image}
                            alt='La imagen muestra un paisaje de una cadena montañosa cubierta de densos bosques. En primer plano se ven las copas de los árboles, y las montañas se extienden hacia el fondo bajo un cielo despejado con pocas nubes.'
                            />
                        </View>

                        <View style={styles.parkContainer}>
                            <Text style={styles.tittlePark}>Parque Internacional La Amistad</Text>
                            <Text style={styles.infoPark}>Se localiza en la Cordillera de Talamanca, al sur de Costa Rica hasta la Frontera con Panamá, rodeado por otras áreas silvestres y de territorios Indígenas. Se estableció el 4 de febrero de 1982, mediante Decreto Ejecutivo N.13324-A. Con sus 197.527 ha., es considerada como el área Silvestre protegida de mayor diversidad biológica del país, debido a su amplio rango altitudinal, fuertes cambios climáticos y variedad de suelos, los cuales propician muy diversos ecosistemas y un alto endemismo.</Text>
                            <View style={styles.verMasContaier}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Ver más</Text>
                                </TouchableOpacity> 
                            </View>                     
                        </View>
                    </View>

                    <View style={isSmallScreen ? styles.containerColumn : styles.containerRow}>
                        <View style={[styles.imagesContainer, { marginBottom: isSmallScreen ? 15 : 0 }]}>
                            <Image  
                            source={require('../assets/images/parks/RincondelaVieja.png')} 
                            style={styles.image}
                            alt='La imagen muestra un bosque denso con la luz del sol filtrándose a través del follaje. Los rayos de luz crean un efecto visual impresionante al atravesar la niebla o la humedad presente en el aire, iluminando partes del verdor y los troncos de los árboles.'
                            />
                        </View>

                        <View style={styles.parkContainer}>
                            <Text style={styles.tittlePark}>Parque Nacional Rincón de la Vieja</Text>
                            <Text style={styles.infoPark}>El Parque Nacional Rincón de la Vieja, fue declarado por Ley Nº 5398 del 23 de octubre de 1973. Su extensión es de 14.300 hectáreas. Se encuentra dividido en dos sectores de visitación turística: Las Pailas y Santa María; ambos sectores tienen atractivos muy particulares, debido a la importancia de sus ecosistemas, en los cuales sobresalen las manifestaciones volcánicas.</Text>
                            <View style={styles.verMasContaier}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Ver más</Text>
                                </TouchableOpacity> 
                            </View>                   
                        </View>
                    </View>
                </View>
            </View>

            <Bottom/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 10
    },

    phraseContainer: {
        marginBottom: 20,
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
        backgroundColor: '#f7c644',
        width: 210,
        height: 55,
        borderRadius: 5
    }, 
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6d5b1c'
    },

    mainContainer: {
        marginTop: 30,
        marginBottom: 50
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 30
    },
    containerColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30
    },

    imagesContainer: { 
        justifyContent: 'center',
        alignItems: 'center',
        width: 350
    },
    parkContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    verMasContaier: {
        backgroundColor: '#f7c644',
        width: 100,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    image: {
        height: 200,
        width: 301
    },
    tittlePark: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4ea93b',
        marginBottom: 5,
        height: 'auto',
    },
    infoPark: {
        textAlign: 'left',
        fontSize: 18,
    },

    modalContainer: { 
        flex: 1, 
        backgroundColor: '#00000080' 
    },
    modalContent: { 
        width: 350, 
        padding: 20, 
        backgroundColor: 'white', 
        borderRadius: 10 
    },

    header: { 
        flexDirection: 'row',  
        justifyContent: 'space-between', 
        alignItems: 'center',  
        marginBottom: 15,
        marginTop: 10
      },
    modalTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#4ea93b',
        marginBottom: 10 
    },
    buttonSelect: {
        backgroundColor: '#f7c644',
        width: 160,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    
    twoColumns: {
        flexDirection: 'row',  
        flexWrap: 'wrap',  
        justifyContent: 'space-between', 
    },
    option: { 
        width: 'auto',           
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 15, 
        backgroundColor: '#366b4d', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default NationalParks;
