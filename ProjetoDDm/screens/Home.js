import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ConsultasContext } from '../ConsultasContext';

export default function Home({ navigation }) {
  const { consultas } = useContext(ConsultasContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerCom}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <View style={styles.titulosWrap}>
          <Text style={styles.tituloGrande}>🏥 Clínica Saúde+</Text>
          <Text style={styles.subtitulo}>Painel principal</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.bemvindo}>Bem-vindo!</Text>

        <Text style={styles.texto}>
          Aqui você pode marcar, visualizar e gerenciar consultas de forma rápida e simples.
        </Text>

        <View style={styles.linha}>
          <View style={[styles.box, styles.boxAzul]}>
            <Text style={styles.numero}>2</Text>
            <Text style={styles.labelBox}>Consultas hoje</Text>
          </View>

          <View style={[styles.box, styles.boxVerde]}>
            <Text style={styles.numero}>
              {consultas ? consultas.length : 0}
            </Text>
            <Text style={styles.labelBox}>Total cadastradas</Text>
          </View>
        </View>

        <View style={styles.acoes}>
          <TouchableOpacity
            style={[styles.botaoAcao, styles.botaoPrimario]}
            onPress={() => navigation.navigate('Cadastro de Item')}
          >
            <Text style={styles.botaoPrimarioTexto}>Novo cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoAcao, styles.botaoSecundario]}
            onPress={() => navigation.navigate('Lista de Itens')}
          >
            <Text style={styles.botaoSecundarioTexto}>Ver lista</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.dica}>
          💡 Use o menu para navegar
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7faf7',
    padding: 16,
  },
  headerCom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    paddingVertical: 8,
    gap: 10,
  },
  titulosWrap: {
    flex: 1,
  },
  menuIcon: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f766e',
    padding: 5,
  },
  tituloGrande: {
    fontSize: 29,
    fontWeight: '800',
    color: '#0f766e',
  },
  subtitulo: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d7eee9',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  bemvindo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#0f172a',
  },
  texto: {
    marginBottom: 22,
    fontSize: 15,
    color: '#475569',
    lineHeight: 21,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 2,
    borderRadius: 12,
    paddingVertical: 16,
  },
  boxAzul: {
    backgroundColor: '#dff4ef',
  },
  boxVerde: {
    backgroundColor: '#eaf8ee',
  },
  numero: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0f172a',
  },
  labelBox: {
    fontSize: 13,
    color: '#334155',
    textAlign: 'center',
  },
  acoes: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  botaoAcao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 11,
  },
  botaoPrimario: {
    backgroundColor: '#0f766e',
  },
  botaoSecundario: {
    backgroundColor: '#fff4e9',
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  botaoPrimarioTexto: {
    color: '#fff',
    fontWeight: '700',
  },
  botaoSecundarioTexto: {
    color: '#c2410c',
    fontWeight: '700',
  },
  dica: {
    textAlign: 'center',
    color: '#c2410c',
    fontWeight: '700',
    backgroundColor: '#fff4e9',
    paddingVertical: 10,
    borderRadius: 10,
  },
});