// app/(tabs)/donationHistory.jsx

import { View, Text, FlatList, StyleSheet } from 'react-native';

const donationHistoryData = [
  { id: '1', orphanageName: 'Osu children home', amount: 50, date: '2025-07-25' },
  { id: '2', orphanageName: 'Teshie children home', amount: 30, date: '2025-07-20' },
  { id: '3', orphanageName: 'Nyamedua Children Home', amount: 100, date: '2025-07-18' },
  { id: '4', orphanageName: 'Handi Village Children home', amount: 75, date:  '2025-07-15'},
  { id: '5', orphanageName: ' Potter village', amount: 75, date:  '2025-07-16'},
  { id: '6', orphanageName: 'Save them yonng mission', amount: 75, date:  '2025-07-17'},
  { id: '7', orphanageName: 'Blessed kids orphanage', amount: 75, date:  '2025-07-11'},
  { id: '8', orphanageName: 'Rays of hope centre', amount: 75, date:  '2025-07-19'},
  { id: '9', orphanageName: 'Compassion kids home ', amount: 75, date:  '2025-07-14'},
  { id: '10', orphanageName: 'New life children home', amount: 75, date:  '2025-07-21'},
  { id: '11', orphanageName: 'Grace orphanage', amount: 75, date:  '2025-07-22'},
  { id: '12', orphanageName: 'Sunshine children centre', amount: 75, date:  '2025-07-23'},
  { id: '13', orphanageName: 'Bethel orphanage', amount: 75, date:  '2025-07-24'},
  { id: '14', orphanageName: 'Redeemer children home', amount: 75, date:  '2025-07-15'},
  { id: '15', orphanageName: 'Harmony house', amount: 75, date:  '2025-07-15'},
  { id: '16', orphanageName: 'Future leaders home', amount: 75, date:  '2025-07-15'},
  { id: '17', orphanageName: 'Agape children village', amount: 75, date:  '2025-07-15'},
  { id: '18', orphanageName: 'Royal seed home', amount: 75, date:  '2025-07-15'},
  { id: '19', orphanageName: 'Smile foundation', amount: 75, date:  '2025-07-15'},
  { id: '20', orphanageName: 'Heaven gates orphanage', amount: 75, date:  '2025-07-15'},
  { id: '21', orphanageName: 'New horizon', amount: 75, date:  '2025-07-15'},
  { id: '22', orphanageName: 'sunbeam foster home', amount: 75, date:  '2025-07-15'},
  { id: '23', orphanageName: 'Garden city children home', amount: 75, date:  '2025-07-15'},
  { id: '24', orphanageName: 'Coastal kids sanctuary', amount: 75, date:  '2025-07-15'},
  { id: '25', orphanageName: 'Northen star orphanage', amount: 75, date:  '2025-07-15'},
  { id: '26', orphanageName: 'Rising sun foundation', amount: 75, date:  '2025-07-15'},
  { id: '27', orphanageName: 'Sacred heart orphanage', amount: 75, date:  '2025-07-15'},
  { id: '28', orphanageName: 'Golden Haven', amount: 75, date:  '2025-07-15'},
  { id: '29', orphanageName: 'Destiny child centre', amount: 75, date:  '2025-07-15'},
  
  
  

];

// Calculate total
const totalDonated = donationHistoryData.reduce((total, item) => total + item.amount, 0);

export default function DonationHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Donation History</Text>

      <View style={styles.summary}>
        <Text style={styles.thankYou}>Thank you for your generosity! 🎉</Text>
        <Text style={styles.total}>Total Donated: ₵{totalDonated}</Text>
      </View>

      <FlatList
        data={donationHistoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.orphanageName}</Text>
            <Text>Amount: ₵{item.amount}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    marginBottom: 20,
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
  },
  thankYou: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});