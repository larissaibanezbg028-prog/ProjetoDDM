import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaDrawer2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Início')}>
          <Text style={styles.botaoVoltarTexto}>← Voltar para Início</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Informações do Tema</Text>
        <Text style={styles.texto}>
          O tema escolhido foi Consultas Médicas. O objetivo é facilitar o cadastro e a visualização
          de consultas.
        </Text>
        <Text style={styles.texto}>
          Nesta versão, o usuário pode cadastrar consultas, visualizar em lista, excluir itens e
          ouvir os dados de cada consulta usando voz do dispositivo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f7ff',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d7eee9',
    padding: 18,
    marginTop: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    color: '#0f766e',
    textAlign: 'center',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    backgroundColor: '#fff4e9',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  botaoVoltarTexto: {
    color: '#c2410c',
    fontWeight: '700',
  },
  texto: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
    color: '#334155',
    lineHeight: 22,
  },
});