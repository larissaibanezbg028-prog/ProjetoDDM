import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ConsultasContext } from '../ConsultasContext';

export default function CadastroConsulta({ navigation }) {
  const { consultas, setConsultas } = useContext(ConsultasContext);

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [tipo, setTipo] = useState('');

  const formatarDataComBarras = (texto) => {
    const numeros = texto.replace(/\D/g, '').slice(0, 8);

    if (numeros.length <= 2) return numeros;
    if (numeros.length <= 4) return `${numeros.slice(0, 2)}/${numeros.slice(2)}`;
    return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}/${numeros.slice(4)}`;
  };

  const adicionarConsulta = () => {
    if (!nome || !data || !horario || !tipo) {
      alert("Preencha todos os campos");
      return;
    }

    const novaConsulta = {
      id: Date.now(),
      nome,
      data,
      horario,
      tipo,
    };

    setConsultas([...consultas, novaConsulta]);

    setNome('');
    setData('');
    setHorario('');
    setTipo('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Início')}>
          <Text style={styles.botaoVoltarTexto}>← Voltar para Início</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Cadastrar Consulta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do paciente"
          placeholderTextColor="#94a3b8"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Horário (ex: 14:30)"
          placeholderTextColor="#94a3b8"
          value={horario}
          onChangeText={setHorario}
        />

        <TextInput
          style={styles.input}
          placeholder="Data (DD/MM/AAAA)"
          placeholderTextColor="#94a3b8"
          value={data}
          onChangeText={(texto) => setData(formatarDataComBarras(texto))}
          keyboardType="numeric"
          maxLength={10}
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo da consulta"
          placeholderTextColor="#94a3b8"
          value={tipo}
          onChangeText={setTipo}
        />

        <TouchableOpacity style={styles.botaoSalvar} onPress={adicionarConsulta}>
          <Text style={styles.botaoSalvarTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7faf7',
  },

  scrollContent: {
    paddingBottom: 24,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#d7eee9',
  },

  titulo: {
    fontSize: 24,
    marginBottom: 18,
    fontWeight: '800',
    color: '#0f766e',
    textAlign: 'center',
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

  input: {
    borderWidth: 1,
    borderColor: '#cfe7e1',
    marginBottom: 14,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fcfffd',
    color: '#0f172a',
  },
  botaoSalvar: {
    marginTop: 4,
    backgroundColor: '#0f766e',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoSalvarTexto: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
});
