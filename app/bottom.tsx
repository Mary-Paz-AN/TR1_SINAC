import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Bottom = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
    },

    footerText: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 15
    },
});

export default Bottom;
