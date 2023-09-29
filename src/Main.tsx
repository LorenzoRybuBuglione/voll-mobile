import { StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Tela Principal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
