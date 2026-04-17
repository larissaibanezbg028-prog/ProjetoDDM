import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MeuPerfil() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Image
                source={{ uri: 'https://media.tenor.com/O9_tjP_XRL8AAAAe/dog-with-a-cowboy-hat.png' }}
                style={styles.avatar}
            />
            <Text style={styles.nome}>Nome: Larissa Gonçalves Paz Ibanez</Text>
            <Text style={styles.info}>RA: 2020566</Text>
            <Text style={styles.info}>Disciplina: Desenvolvimento Mobile</Text>
            <Text style={styles.tema}>Tema: Consultas Médicas</Text>
            <Text style={styles.descricao}>
                Este app ajuda a cadastrar e listar consultas médicas, com navegação por Tabs e Drawer,
                gerenciamento de estado e leitura em voz dos itens da lista.
            </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f7faf7',
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#d7eee9',
        padding: 18,
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 18,
        borderWidth: 3,
        borderColor: '#0f766e',
    },
    nome: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 8,
        textAlign: 'center',
        color: '#0f766e',
    },
    info: {
        fontSize: 16,
        marginBottom: 6,
        color: '#0f172a',
    },
    tema: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 8,
        marginBottom: 8,
    },
    descricao: {
        fontSize: 14,
        textAlign: 'center',
        color: '#334155',
        lineHeight: 21,
        marginTop: 4,
    },
});