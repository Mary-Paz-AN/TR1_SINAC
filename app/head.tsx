import React, { useState, useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity, View, Image, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop:20 }}>
                {isSmallScreen ? (
                    <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)} style={{ marginLeft: 20 }}>
                        <Ionicons name="menu" size={32} color="black" />
                    </TouchableOpacity>
                    ) : (
                    <TouchableOpacity onPress={() => {}} style={{ margin: 20 }}>
                        <Image
                            source={require('../assets/images/sinac.jpg')}
                            style={{ width: 60, height: 60 }}
                        />
                    </TouchableOpacity>
                )}
                <View style={styles.headerRightContainer}>
                    {!isSmallScreen && (
                        <>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.menuItem}>Areas Protegidas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.menuItem}>Conozcanos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.menuItem}>Documentacion y Normativa</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.menuItem}>Tramintes y consultas</Text>
                        </TouchableOpacity>
                        </>
                    )}
                    <View style={styles.searchContainer}>
                        <TextInput
                        placeholder="Buscar...."
                        style={styles.searchInput}
                        />
                    </View>
                </View>
            </View>
            {isSmallScreen && isMenuOpen && (
                <View style={styles.menuSandwich}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.fontSandwich}>Areas Protegidas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.fontSandwich}>Conozcanos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.fontSandwich}>Documentacion y Normativa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.fontSandwich}>Tramintes y consultas</Text>
                    </TouchableOpacity>
                </View>
            )}
           
        </>
    )
}

const styles = StyleSheet.create({
    
    headerRightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red'
    },
    menuItem: {
      marginHorizontal: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
    // buscar

    searchContainer: {
      backgroundColor: 'grey',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 20,
      marginHorizontal: 10,
    },
    searchInput: {
      width: 150,
    },

    // sandwich
    menuSandwich: {
      position: 'absolute',
      top: 60,
      left: 0,
      right: 0,
      backgroundColor: 'red',
      padding: 20,
      zIndex: 10,
    },
    fontSandwich: {
      fontSize: 18,
      marginVertical: 10,
      fontWeight: 'bold',
    },
  });
  
  export default Header;
  
