import { ScrollView, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.textPequeno, styles.cor1]}>
        1. Este é um parágrafo pequeno e colorido.
      </Text>
      
      <Text style={[styles.textMedio, styles.cor2, styles.italico]}>
        2. Este parágrafo é médio, Turquesa e está em itálico.
      </Text>
      
      <Text style={[styles.textGrande, styles.cor3]}>
        3. Já este aqui é um parágrafo grande e vibrante.
      </Text>
      
      <Text style={[styles.textPequeno, styles.cor4, styles.sublinhado]}>
        4. Pequeno, e com um sublinhado elegante.
      </Text>
      
      <Text style={[styles.textMedio, styles.cor5]}>
        5. Um parágrafo médio com uma cor bem suave.
      </Text>
      
      <Text style={[styles.textGrande, styles.cor6, styles.italico]}>
        6. O último parágrafo é grande e itálico e fecha a lista com destaque.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
