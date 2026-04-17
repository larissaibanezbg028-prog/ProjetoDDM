import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ConsultasContext } from '../ConsultasContext';
import * as Speech from 'expo-speech';

export default function ListaConsultas({ navigation }) {
  const { consultas, setConsultas } = useContext(ConsultasContext);

  const falarConsulta = (item) => {
    Speech.stop();
    Speech.speak(
      `Paciente ${item.nome}. Data ${item.data}. Horário ${item.horario}. Tipo ${item.tipo}.`,
      { language: 'pt-BR', rate: 0.95 }
    );
  };

  const excluirConsulta = (index) => {
    const novaLista = consultas.filter((_, i) => i !== index);
    setConsultas(novaLista);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Início')}>
        <Text style={styles.botaoVoltarTexto}>← Voltar para Início</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Consultas Cadastradas</Text>

      <FlatList
        data={consultas}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma consulta cadastrada.</Text>}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.card} onPress={() => falarConsulta(item)}>

            <Text style={styles.nome}>{item.nome}</Text>
            <Text>📅 {item.data}</Text>
            <Text>⏰ {item.horario}</Text>
            <Text>🩺 {item.tipo}</Text>

            <TouchableOpacity
              style={styles.botaoOuvir}
              onPress={() => falarConsulta(item)}
            >
              <Text style={styles.botaoOuvirTexto}>Ouvir</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => excluirConsulta(index)}
            >
              <Text style={styles.botaoTexto}>Excluir</Text>
            </TouchableOpacity>

          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f7faf7',
  },

  titulo: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    color: '#0f766e',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    marginBottom: 10,
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

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d7eee9',
    elevation: 3,
  },

  nome: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 5,
    color: '#0f172a',
  },

  descricao: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },

  botao: {
    marginTop: 10,
    backgroundColor: '#dc2626',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoOuvir: {
    marginTop: 8,
    backgroundColor: '#0f766e',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoOuvirTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#64748b',
  },
});
