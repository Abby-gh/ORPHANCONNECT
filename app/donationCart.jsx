import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const DonationCart = () => {
  const router = useRouter();

  // Example mock cart data - you'll later load this from global state or Firebase
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      orphanage: "Osu Children's Home",
      items: ['Books', 'Rice'],
    },
    {
      id: '2',
      orphanage: "Teshie Children's Home",
      items: ['Clothes'],
    },
  ]);

  const handleDonateNow = () => {
    // Navigate to confirmation page or success screen
    router.push('/donationSummary');
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.orphanageName}>{item.orphanage}</Text>
      <Text style={styles.donationLabel}>Items to Donate:</Text>
      {item.items.map((donation, index) => (
        <Text key={index} style={styles.item}>• {donation}</Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donation Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}/>
      
      <View style={styles.buttonContainer}>
        <Button title="Proceed to Donate" onPress={handleDonateNow} color="#00AEEF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
  },
  orphanageName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  donationLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444',
  },
  item: {
    fontSize: 13,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default DonationCart;