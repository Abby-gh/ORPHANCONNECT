import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const HomeScreen = () => {
  //  orphanages in Ghana
  const router = useRouter();
  const orphanages = [
    {
      id: '1',
      name: "Osu Children's Home",
      location: "Accra, Greater Accra",
      description: "Providing shelter and education since 1949.",
      needs: ["Rice", "Clothing", "Books"],
      image: require('../../assets/orphans.jpeg')
    },
    {
      id: '2',
      name: "Teshie Children's Home",
      location: "Accra, Greater Accra",
      description: "Caring for abandoned children in the community.",
      needs: ["Food", "Toiletries", "School Supplies"],
      image: require('../../assets/orphans1.jpeg')
    },
    {
      id: '3',
      name: "Nyamedua Children's Home",
      location: "Kumasi, Ashanti",
      description: "Supporting children with special needs.",
      needs: ["Wheelchairs", "Therapy Equipment", "Medication"],
      image: require('../../assets/orphans2.jpeg')
    },

    
    {
      id: '4',
      name: "Handi Village Children's Home",
      location: "Tamale, Northern",
      description: "Shelter for street children and orphans.",
      needs: ["Blankets", "Mosquito Nets", "Shoes"],
      image: require('../../assets/orphans3.jpeg')
    },
    {
      id: '5',
      name: "Potters Village",
      location: "Tema, Greater Accra",
      description: "Christian-based care for vulnerable children.",
      needs: ["Bibles", "School Uniforms", "Computers"],
      image: require('../../assets/orphans5.jpeg')
    },
    {
      id: '6',
      name: "Save Them Young Mission",
      location: "Cape Coast, Central",
      description: "Rescuing children from child labor.",
      needs: ["Backpacks", "Notebooks", "Pens"],
      image: require('../../assets/orphans5.jpeg')
    },
    {
      id: '7',
      name: "Blessed Kids Orphanage",
      location: "Takoradi, Western",
      description: "Family-style care for orphans.",
      needs: ["Diapers", "Baby Formula", "Toys"],
      image: require('../../assets/orphans6.jpeg')
    },
    {
      id: '8',
      name: "Rays of Hope Centre",
      location: "Ho, Volta",
      description: "Education-focused orphanage.",
      needs: ["Textbooks", "Desks", "Chairs"],
      image: require('../../assets/orphans7.jpeg')
    },
    {
      id: '9',
      name: "Compassion Kids Home",
      location: "Koforidua, Eastern",
      description: "Rehabilitation for former child soldiers.",
      needs: ["Art Supplies", "Sports Equipment", "Counseling Books"],
      image: require('../../assets/orphans.jpeg')
    },
    {
      id: '10',
      name: "New Life Children's Home",
      location: "Sunyani, Bono",
      description: "Caring for HIV-positive children.",
      needs: ["Antiretroviral Drugs", "Nutritional Supplements", "Disinfectants"],
      image: require('../../assets/orphans9.jpeg')
    },
    
    {
      id: '11',
      name: "Grace Orphanage",
      location: "Bolgatanga, Upper East",
      description: "Shelter for children displaced by conflicts.",
      needs: ["Mattresses", "Solar Lamps", "Water Tanks"],
      image: require('../../assets/orphans10.jpeg')
    },
    {
      id: '12',
      name: "Sunshine Children's Centre",
      location: "Wa, Upper West",
      description: "Education and vocational training.",
      needs: ["Sewing Machines", "Gardening Tools", "Cooking Utensils"],
      image: require('../../assets/orphans11.jpeg')
    },
    {
      id: '13',
      name: "Bethel Orphanage",
      location: "Elmina, Central",
      description: "Historical home with modern facilities.",
      needs: ["Beds", "Fans", "First Aid Kits"],
      image: require('../../assets/orphans12.jpeg')
    },
    {
      id: '14',
      name: "Redeemer Children's Home",
      location: "Sekondi-Takoradi, Western",
      description: "Focus on marine community children.",
      needs: ["Life Jackets", "Fishing Nets", "Raincoats"],
      image: require('../../assets/orphans13.jpeg')
    },
    {
      id: '15',
      name: "Harmony House",
      location: "Techiman, Bono East",
      description: "Interfaith orphanage promoting unity.",
      needs: ["Prayer Mats", "Musical Instruments", "Interfaith Books"],
      image: require('../../assets/orphans14.jpeg')
    },
    {
      id: '16',
      name: "Future Leaders Home",
      location: "Nkawkaw, Eastern",
      description: "STEM education focus.",
      needs: ["Laptops", "Science Kits", "Robotics Parts"],
      image: require('../../assets/orphans15.jpeg')
    },
    {
      id: '17',
      name: "Agape Children's Village",
      location: "Dome, Greater Accra",
      description: "Community-based foster care system.",
      needs: ["Bicycles", "Refrigerators", "Washing Machines"],
      image: require('../../assets/orphans16.jpeg')
    },
    {
      id: '18',
      name: "Royal Seed Home",
      location: "Kasoa, Central",
      description: "Large-scale care facility.",
      needs: ["Bulk Rice", "Cooking Oil", "Sanitary Pads"],
      image: require('../../assets/orphans17.jpeg')
    },
    {
      id: '19',
      name: "Smile Foundation",
      location: "Teshie-Nungua, Greater Accra",
      description: "Special needs education.",
      needs: ["Hearing Aids", "Braille Books", "Walking Canes"],
      image: require('../../assets/orphans18.jpeg')
    },
    {
      id: '20',
      name: "Heaven's Gates Orphanage",
      location: "Madina, Greater Accra",
      description: "Montessori-based learning.",
      needs: ["Educational Toys", "Puzzles", "Building Blocks"],
      image: require('../../assets/orphans19.jpeg')
    },
    {
      id: '21',
      name: "New Horizon",
      location: "Adenta, Greater Accra",
      description: "Teen rehabilitation programs.",
      needs: ["Vocational Tools", "Mentorship Books", "Sports Gear"],
      image: require('../../assets/orphans20.jpeg')
    },
    {
      id: '22',
      name: "Sunbeam Foster Home",
      location: "Dansoman, Greater Accra",
      description: "Temporary shelter system.",
      needs: ["Baby Cribs", "High Chairs", "Strollers"],
      image: require('../../assets/orphans21.jpeg')
    },
    {
      id: '23',
      name: "Garden City Children's Home",
      location: "Kumasi, Ashanti",
      description: "Agricultural training programs.",
      needs: ["Farming Tools", "Seeds", "Watering Cans"],
      image: require('../../assets/orphans23.jpeg')
    },
    {
      id: '24',
      name: "Coastal Kids Sanctuary",
      location: "Winneba, Central",
      description: "Beachside therapeutic environment.",
      needs: ["Swimsuits", "Beach Towels", "Sunscreen"],
      image: require('../../assets/orphans24.jpeg')
    },
    {
      id: '25',
      name: "Northern Star Orphanage",
      location: "Tamale, Northern",
      description: "Focus on girls' education.",
      needs: ["Sanitary Products", "School Dresses", "Hair Care Items"],
      image: require('../../assets/orphans24.jpeg')
    },
    {
      id: '26',
      name: "Liberty Children's Home",
      location: "Tema, Greater Accra",
      description: "Former street children rehabilitation.",
      needs: ["Counseling Materials", "Art Therapy Supplies", "Recreational Items"],
      image: require('../../assets/orphans25.jpeg')
    },
    {
      id: '27',
      name: "Rising Sun Foundation",
      location: "Koforidua, Eastern",
      description: "Disability-inclusive programs.",
      needs: ["Wheelchair Ramps", "Therapy Balls", "Sensory Toys"],
      image: require('../../assets/orphans26.jpeg')
    },
    {
      id: '28',
      name: "Sacred Heart Orphanage",
      location: "Cape Coast, Central",
      description: "Historical building with modern care.",
      needs: ["Bunk Beds", "Mosquito Nets", "Ceiling Fans"],
      image: require('../../assets/orphans27.jpeg')
    },
    {
      id: '29',
      name: "Golden Kids Haven",
      location: "Sunyani, Bono",
      description: "Eco-friendly orphanage.",
      needs: ["Solar Panels", "Reusable Bottles", "Organic Seeds"],
      image: require('../../assets/orphans28.jpeg')
    },
    {
      id: '30',
      name: "Destiny's Child Centre",
      location: "Berekum, Bono",
      description: "Leadership development focus.",
      needs: ["Public Speaking Books", "Tablet Computers", "Projectors"],
      image: require('../../assets/orphans29.jpeg')
    }
  ];

  const renderOrphanage = ({ item }) => {
    const imageUri = image.resolveAssetSource(item.image).uri;

    return(
    <TouchableOpacity
    onPress={() =>
      router.push({
        pathname: '/orphanageProfile',
        params: {
          name: item.name,
          location: item.location,
          description: item.description,
          needs: item.needs.join(','),
          image: imageUri,
        },
      })
    }
    style = {styles.card}
    >
      <Image source={{uri: imageUri}} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        </View>
        </TouchableOpacity>
    );
  };

  return (
      
      <FlatList
        data={orphanages}
        renderItem={renderOrphanage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  location: {
    color: '#777',
  },
});

export default HomeScreen;