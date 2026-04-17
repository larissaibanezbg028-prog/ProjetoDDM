import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ConsultasProvider } from './ConsultasContext';

// telas
import Home from './screens/Home';
import MeuPerfil from './screens/MeuPerfil';
import TelaDrawer1 from './screens/TelaDrawer1';
import TelaDrawer2 from './screens/TelaDrawer2';
import Cadastro from './screens/Cadastro';
import ListaConsultas from './screens/ListaConsultas';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Início" 
        component={Home}
      />
      <Drawer.Screen 
        name="Cadastro de Item" 
        component={Cadastro}
      />
      <Drawer.Screen 
        name="Lista de Itens" 
        component={ListaConsultas}
      />
      <Drawer.Screen 
        name="Informações do Tema" 
        component={TelaDrawer2}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ConsultasProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#6b7280',
          tabBarActiveBackgroundColor: '#0f766e',
          tabBarStyle: {
            height: 62,
            paddingBottom: 6,
            paddingTop: 6,
            backgroundColor: '#f8faf7',
          },
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 12,
          },
        }}>

          <Tab.Screen 
            name="Home" 
            component={HomeDrawer}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen 
            name="Perfil" 
            component={MeuPerfil}
            options={{ 
              tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
            }}
          />
         
          <Tab.Screen 
            name="Configurações" 
            component={TelaDrawer1}
            options={{ 
              tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
            }}
          /> 

        </Tab.Navigator>
      </NavigationContainer>
    </ConsultasProvider>
  );
}
