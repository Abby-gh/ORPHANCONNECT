import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const router = useRouter();

const orphanages = [
  {
    id: '1',
    name: "Osu Children's Home",
    location: "Accra, Greater Accra",
    image: require('../assets/orphans.jpeg'),
  },
  {
    id: '2',
    name: "Teshie Children's Home",
    location: "Accra, Greater Accra",
    image: require('../assets/orphans1.jpeg'),
  },
  {
    id: '3',
    name: "Nyamedua Children's Home",
    location: "Kumasi, Ashanti",
    image: require('../assets/logo9.jpeg'),
  },
  {
    id: '4',
    name: "Handi Village Children's Home",
    location: "Tamale, Northern",
    image: require('../assets/orphans3.jpeg'),
  },
  {
    id: '5',
    name: "Potters Village",
    location: "Tema, Greater Accra",
    image: require('../assets/orphans4.jpeg'),
  },
  {
    id: '6',
    name: "Save Them Young Mission",
    location: "Cape Coast, Central",
    image: require('../assets/orphans5.jpeg'),
  },
  {
    id: '7',
    name: "Blessed Kids Orphanage",
    location: "Takoradi, Western",
    image: require('../assets/orphans6.jpeg'),
  },
  {
    id: '8',
    name: "Rays of Hope Centre",
    location: "Ho, Volta",
    image: require('../assets/orphans7.jpeg'),
  },
  {
    id: '9',
    name: "Compassion Kids Home",
    location: "Koforidua, Eastern",
    image: require('../assets/orphans.jpeg'),
  },
  {
    id: '10',
    name: "New Life Children's Home",
    location: "Sunyani, Bono",
    image: require('../assets/orphans9.jpeg'),
  },
  {
    id: '11',
    name: "Grace Orphanage",
    location: "Bolgatanga, Upper East",
    image: require('../assets/orphans10.jpeg'),
  },
  {
    id: '12',
    name: "Sunshine Children's Centre",
    location: "Wa, Upper West",
    image: require('../assets/orphans11.jpeg'),
  },
  {
    id: '13',
    name: "Bethel Orphanage",
    location: "Elmina, Central",
    image: require('../assets/orphans12.jpeg'),
  },
  {
    id: '14',
    name: "Redeemer Children's Home",
    location: "Sekondi-Takoradi, Western",
    image: require('../assets/orphans13.jpeg'),
  },
  {
    id: '15',
    name: "Harmony House",
    location: "Techiman, Bono East",
    image: require('../assets/orphans14.jpeg'),
  },
  {
    id: '16',
    name: "Future Leaders Home",
    location: "Nkawkaw, Eastern",
    image: require('../assets/orphans15.jpeg'),
  },
  {
    id: '17',
    name: "Agape Children's Village",
    location: "Dome, Greater Accra",
    image: require('../assets/orphans16.jpeg'),
  },
  {
    id: '18',
    name: "Royal Seed Home",
    location: "Kasoa, Central",
    image: require('../assets/orphans17.jpeg'),
  },
  {
    id: '19',
    name: "Smile Foundation",
    location: "Teshie-Nungua, Greater Accra",
    image: require('../assets/orphans18.jpeg'),
  },
  {
    id: '20',
    name: "Heaven's Gates Orphanage",
    location: "Madina, Greater Accra",
    image: require('../assets/orphans19.jpeg'),
  },
  {
    id: '21',
    name: "New Horizon",
    location: "Adenta, Greater Accra",
    image: require('../assets/orphans20.jpeg'),
  },
  {
    id: '22',
    name: "Sunbeam Foster Home",
    location: "Dansoman, Greater Accra",
    image: require('../assets/orphans21.jpeg'),
  },
  {
    id: '23',
    name: "Garden City Children's Home",
    location: "Kumasi, Ashanti",
    image: require('../assets/orphans23.jpeg'),
  },
  {
    id: '24',
    name: "Coastal Kids Sanctuary",
    location: "Winneba, Central",
    image: require('../assets/orphans24.jpeg'),
  },
  {
    id: '25',
    name: "Northern Star Orphanage",
    location: "Tamale, Northern",
    image: require('../assets/orphans24.jpeg'),
  },
  {
    id: '26',
    name: "Liberty Children's Home",
    location: "Tema, Greater Accra",
    image: require('../assets/orphans25.jpeg'),
  },
  {
    id: '27',
    name: "Rising Sun Foundation",
    location: "Koforidua, Eastern",
    image: require('../assets/orphans26.jpeg'),
  },
  {
    id: '28',
    name: "Sacred Heart Orphanage",
    location: "Cape Coast, Central",
    image: require('../assets/orphans27.jpeg'),
  },
  {
    id: '29',
    name: "Golden Kids Haven",
    location: "Sunyani, Bono",
    image: require('../assets/orphans28.jpeg'),
  },
  {
    id: '30',
    name: "Destiny's Child Centre",
    location: "Berekum, Bono",
    image: require('../assets/orphans29.jpeg'),
  },
];

const DonationCartScreen = () => {
  const router = useRouter();

  const renderOrphanage = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <TouchableOpacity
          style={styles.donationButton}
          onPress={() => {
            router.push({
              pathname: '/orphanageProfile',
params:{
  id: item.id,
  name: item.name,
  location: item.location,
  images: item.images.join(','),
  description: item.description,
  needs: item.needs.join(','),

},
            });
          }} 
          
        >
          <Text style={styles.buttonText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={orphanages}
      renderItem={renderOrphanage}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  location: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#00AEEF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },
});

export default DonationCartScreen;