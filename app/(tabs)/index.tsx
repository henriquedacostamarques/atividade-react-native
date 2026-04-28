import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.textGrande, styles.cor1]}>
        Etec de itanhaém
      </Text>
      <Image source={require("../../assets/images/cps.jpg")} style={styles.imagem}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagem: {
  width: 200,
  height: 200,
  resizeMode: "contain",
  marginBottom: 15,
},
  container: {
    padding: 40,
    alignItems: 'center',
  },
  // Tamanhos
  textPequeno: {
    fontSize: 14,
    marginBottom: 15,
  },
  textMedio: {
    fontSize: 20,
    marginBottom: 15,
  },
  textGrande: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  // Cores
  cor1: { color: '#ff3300' },
  cor2: { color: '#00A896' }, 
  cor3: { color: '#FFD166' }, 
  cor4: { color: '#EF476F' },
  cor5: { color: '#118AB2' }, 
  cor6: { color: '#06D6A0' },
  // Estilos adicionais
  italico: {
    fontStyle: 'italic',
  },
  sublinhado: {
    textDecorationLine: 'underline',
  },

});
