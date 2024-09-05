import React, { useState, useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity, View, Image, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor:"white"}}>
                {isSmallScreen ? (
                    <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)} style={{ marginLeft: 20 }}>
                        <Ionicons name="menu" size={32} color="black" />
                    </TouchableOpacity>
                    ) : (
                    <Link href="/" asChild>
                        <TouchableOpacity onPress={() => {}} style={{ margin: 20 }}>
                            <Image
                                source={require('../assets/images/sinac.jpg')}
                                style={{ width: 60, height: 60 }}
                            />
                        </TouchableOpacity>
                    </Link>
                )}
                <View style={styles.headerRightContainer}>
                    {!isSmallScreen && (
                        <>
                        <Link href="/nationalParks" asChild>
                            <TouchableOpacity style={styles.subMenuItem} onPress={() => {}}>
                                
                                <Text style={styles.menuItem}>Areas Protegidas</Text>
                            </TouchableOpacity>
                        </Link>

                        <TouchableOpacity style={styles.subMenuItem} onPress={() => {}}>
                            
                            <Text style={styles.menuItem}>Conozcanos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.subMenuItem} onPress={() => {}}>
                           
                            <Text style={styles.menuItem}>Documentacion y Normativa</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.subMenuItem} onPress={() => {}}>
                            
                            <Text style={styles.menuItem}>Tramintes y consultas</Text>
                        </TouchableOpacity>
                        </>
                    )}
                    <View style={styles.searchContainer}>
                        <Ionicons name="search-outline" size={20} color="#7d7d7d" style={styles.icon} />
      
                        <TextInput
                        placeholder="Buscar...."
                        placeholderTextColor="#7d7d7d"
                        style={styles.searchInput}
                        />
                    </View>
                </View>
            </View>
            {isSmallScreen && isMenuOpen && (
                <View style={styles.menuSandwich}>
                    <Link href="/nationalParks" asChild>
                        <TouchableOpacity  onPress={() => {}}>
                            <Text style={styles.fontSandwich}>Areas Protegidas</Text>
                        </TouchableOpacity>
                    </Link>

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
    
    },
    menuItem: {
      marginHorizontal: 10,
      fontSize: 16,
     
      
    },
    subMenuItem: {
     
        paddingHorizontal: 5,
    },
    // buscar

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f4f5fa', 
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 15,
        width: 240, 
        height: 50,
    },
    searchInput: {
        width: 150,
        fontSize: 16,
        color: '#7d7d7d',
    },
    icon: {
        marginRight: 10,
      },

    // sandwich
    menuSandwich: {
      position: 'absolute',
      top: 48,
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
  
