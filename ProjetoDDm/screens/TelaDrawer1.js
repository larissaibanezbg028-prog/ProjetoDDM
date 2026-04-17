import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

export default function TelaDrawer1() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [som, setSom] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.card}>
        <View style={styles.linha}>
          <Text style={styles.item}>Notificações</Text>
          <Switch value={notificacoes} onValueChange={setNotificacoes} />
        </View>

        <View style={styles.linha}>
          <Text style={styles.item}>Som do aplicativo</Text>
          <Switch value={som} onValueChange={setSom} />
        </View>

        <View style={styles.linha}>
          <Text style={styles.item}>Tema escuro</Text>
          <Switch value={temaEscuro} onValueChange={setTemaEscuro} />
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Limpar dados locais</Text>
      </TouchableOpacity>

      <View style={styles.rodape}>
        <Text style={styles.info}>Versão do app: 1.0.0</Text>
        <Text style={styles.info}>Tema atual: {temaEscuro ? 'Escuro' : 'Claro'}</Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
    color: '#0f766e',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#d7eee9',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2ff',
  },
  item: {
    fontSize: 16,
    color: '#1e293b',
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#dc2626',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: '700',
  },
  rodape: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d7eee9',
  },
  info: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
});