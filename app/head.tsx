import React, { useState, useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity, View, Image, TextInput, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); 
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); 
    const [palabraBuscar, setPalabraBuscar] = useState('');

    useEffect(() => {
        const updateLayout = () => {
            const screenWidth = Dimensions.get('window').width;
            setIsSmallScreen(screenWidth < 600);
        };

        const subscription = Dimensions.addEventListener('change', updateLayout);
        updateLayout();
    
        return () => subscription?.remove();
    }, []);

    const isWeb = Platform.OS === 'web';

    

    return (
        <>
            <View style={styles.menuPricipal}>
                {isSmallScreen ? (
                    <>
                    <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)} style={{ marginLeft: 20 }}>
                        <Ionicons name="menu" size={32} color="black" />
                    </TouchableOpacity>
                        <Link href="/" asChild>
                        <TouchableOpacity onPress={() => {}} style={{ margin: 20 }}>
                            <Image
                                source={require('../assets/images/sinac.jpg')}
                                style={{ width: 60, height: 60 }}
                            />
                        </TouchableOpacity>
                    </Link>

                    </>
                    
                
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

                 {/* WEB*/}
                <View style={styles.headerRightContainer}>
                    {!isSmallScreen && (
                        <>
                            <View
                                style={styles.subMenuItem}
                                {...(isWeb ? {
                                    onMouseEnter: () => setHoveredItem('areasProtegidas'),
                                    onMouseLeave: () => setHoveredItem(null)
                                } : {})}
                            >
                                <Text style={styles.menuItem}>Áreas Protegidas</Text>
                                {hoveredItem === 'areasProtegidas' && (
                                <View style={styles.dropdownMenu}>
                                    <Text style={styles.dropdownItem}>Areas Conservadas</Text>
                                    <Text style={styles.dropdownItem}>Areas Silvestes Protegidas</Text>
                                    <Link href="/nationalParks" asChild>
                                        <TouchableOpacity onPress={() => {}}>
                                            <Text style={styles.dropdownItem}>Parques Nacionales y más</Text>
                                        </TouchableOpacity>
                                    </Link>

                                    
                                    <Text style={styles.dropdownItem}>Vida Silvestre</Text>
                                </View>)}
                                
                            </View>
                            

                            <View
                                style={styles.subMenuItem}
                                {...(isWeb ? {
                                    onMouseEnter: () => setHoveredItem('descubra'),
                                    onMouseLeave: () => setHoveredItem(null)
                                } : {})}
                            >
                                <Text style={styles.menuItem}>Conozca</Text>
                                {hoveredItem === 'descubra' && (
                                <View style={styles.dropdownMenu}>
                                    <Text style={styles.dropdownItem}>Reservas de Biosfera</Text>
                                    <Text style={styles.dropdownItem}>Turismo Sostenible</Text>
                                    <Text style={styles.dropdownItem}>Foto 360</Text>
                                    <Text style={styles.dropdownItem}>Participacion y Gobernanza</Text>
                                    <Text style={styles.dropdownItem}>Ordenamiento Territorial y Cuencas Hidrográficas</Text>
                                    <Text style={styles.dropdownItem}>Manejo de Recursos Forestales</Text>
                                    <Text style={styles.dropdownItem}>Corredores Biológicos</Text>
                                </View>)}
                            </View>

                            

                            <View
                                style={styles.subMenuItem}
                                {...(isWeb ? {
                                    onMouseEnter: () => setHoveredItem('documentacion'),
                                    onMouseLeave: () => setHoveredItem(null)
                                } : {})}
                            >
                                <Text style={styles.menuItem}>Documentación y Normativa</Text>
                                {hoveredItem === 'documentacion' && (
                                <View style={styles.dropdownMenu}>
                                    <Text style={styles.dropdownItem}>Documentación</Text>
                                    <Text style={styles.dropdownItem}>Normativa Jurídica</Text>
                                    <Text style={styles.dropdownItem}>Planes de Manejo</Text>
                                    <Text style={styles.dropdownItem}>Publicaciones</Text>
                                    <Text style={styles.dropdownItem}>Boletín SINAC Informa</Text>
                                    <Text style={styles.dropdownItem}>Biblioteca de mapas</Text>
                                </View>)}
                            </View>
                            
                        
                            <View
                                style={styles.subMenuItem}
                                {...(isWeb ? {
                                    onMouseEnter: () => setHoveredItem('tramites'),
                                    onMouseLeave: () => setHoveredItem(null)
                                } : {})}
                            >
                                <Text style={styles.menuItem}>Trámites y consultas</Text>
                                {hoveredItem === 'tramites' && (
                                <View style={styles.dropdownMenu}>
                                    <Text style={styles.dropdownItem}>Compra y Reserva en Linea</Text>
                                    <Text style={styles.dropdownItem}>Consultas</Text>
                                    <Text style={styles.dropdownItem}>Contraloría de Servcios</Text>
                                    <Text style={styles.dropdownItem}>Gestión de Servicios Ecosistémicos</Text>
                                    <Text style={styles.dropdownItem}>Permisos CITES</Text>
                                    <Text style={styles.dropdownItem}>Permisos de Investigacion</Text>
                                    <Text style={styles.dropdownItem}>Permisos Forestales</Text>
                                    <Text style={styles.dropdownItem}>Requisitos de Certificiciones de Visados</Text>
                                    <Text style={styles.dropdownItem}>SITADA Denuncia Ambiental</Text>
                                    <Text style={styles.dropdownItem}>Trámites de Vida Silvestre</Text>
                                    <Text style={styles.dropdownItem}>Trámites digitales</Text>
                                </View>)}
                            </View>
                            
                        </>
                    )}
                    <View style={styles.searchContainer}>
                        <Ionicons name="search-outline" size={20} color="#7d7d7d" style={styles.icon} />
                        <TextInput
                            placeholder="Buscar...."
                            placeholderTextColor="#7d7d7d"
                            style={styles.searchInput}
                            value={palabraBuscar}
                            onChangeText={text => setPalabraBuscar(text)}
                        />
                        <Link href={{ pathname: '/search', params: { search: palabraBuscar } }}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-forward" size={20} color="#7d7d7d" />
                        </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </View>

            {/* Menú hambuerguesa*/}
            
            {isSmallScreen && isMenuOpen && (
                <View style={styles.menuSandwich}>
                <TouchableOpacity onPress={() => setDropdownOpen(dropdownOpen === 'areasProtegidas' ? null : 'areasProtegidas')}>
                    <Text style={styles.fontSandwich}>Áreas Protegidas</Text>
                    {dropdownOpen === 'areasProtegidas' && (
                        <View >
                            <Text style={styles.submenuOption}>Areas Conservadas</Text>
                            <Text style={styles.submenuOption}>Areas Silvestes Protegidas</Text>
                            <Link href="/nationalParks" asChild>
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={styles.submenuOption}>Parques Nacionales y más</Text>
                                </TouchableOpacity>
                            </Link>
                            <Text style={styles.submenuOption}>Vida Silvestre</Text>
                        </View>
                    )}
                </TouchableOpacity>
                

                <TouchableOpacity onPress={() => setDropdownOpen(dropdownOpen === 'conozca' ? null : 'conozca')}>
                    <Text style={styles.fontSandwich}>Conozca</Text>
                    {dropdownOpen === 'conozca' && (
                        <View >
                            <Text style={styles.submenuOption}>Reservas de Biosfera</Text>
                            <Text style={styles.submenuOption}>Turismo Sostenible</Text>
                            <Text style={styles.submenuOption}>Foto 360</Text>
                            <Text style={styles.submenuOption}>Participacion y Gobernanza</Text>
                        </View>
                    )}

                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setDropdownOpen(dropdownOpen === 'documentacion' ? null : 'documentacion')}>
                    <Text style={styles.fontSandwich}>Documentación y Normativa</Text>
                    {dropdownOpen === 'documentacion' && (
                    <View>
                        <Text style={styles.submenuOption}>Documentación</Text>
                        <Text style={styles.submenuOption}>Normativa Jurídica</Text>
                        <Text style={styles.submenuOption}>Planes de Manejo</Text>
                        <Text style={styles.submenuOption}>Publicaciones</Text>
                    </View>
                )}
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setDropdownOpen(dropdownOpen === 'tramites' ? null : 'tramites')}>
                    <Text style={styles.fontSandwich}>Trámites y consultas</Text>
                    {dropdownOpen === 'tramites' && (
                        <View>
                            <Text style={styles.submenuOption}>Compra y Reserva en Linea</Text>
                            <Text style={styles.submenuOption}>Consultas</Text>
                            <Text style={styles.submenuOption}>Contraloría de Servicios</Text>
                            <Text style={styles.submenuOption}>Gestión de Servicios Ecosistémicos</Text>
                            <Text style={styles.submenuOption}>Permisos CITES</Text>
                            <Text style={styles.submenuOption}>Permisos de Investigacion</Text>
                            <Text style={styles.submenuOption}>Permisos Forestales</Text>
                            <Text style={styles.submenuOption}>Requisitos de Certificiciones de Visados</Text>
                            <Text style={styles.submenuOption}>SITADA Denuncia Ambiental</Text>
                            <Text style={styles.submenuOption}>Trámites de Vida Silvestre</Text>
                            <Text style={styles.submenuOption}>Trámites digitales</Text>
                        </View>
                    )}
                    </TouchableOpacity>
                
            </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    menuPricipal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
     
    },
    headerRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItem: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    subMenuItem: {
        position: 'relative',
        paddingHorizontal: 5,
    },
    dropdownMenu: {
        position: 'absolute',
        top: '100%',
        width: 300,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        shadowColor: '#000',   
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 10.25,          
        shadowRadius: 10.5,  
    },
    dropdownItem: {
        padding: 10,
        width:'100%',
        
    },
    submenuOption: {
        padding: 10,
        fontSize: 16,

       
        
    },
  
 
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
    menuSandwich: {
        position: 'absolute',
        top: 48,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        zIndex: 10,
        marginTop:35
    },
    fontSandwich: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
});

export default Header;
