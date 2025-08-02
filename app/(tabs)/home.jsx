
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const router = useRouter();


const orphanage = [
  //  orphanages in Ghana
{
      id: '1',
      name: "Osu Children's Home",
      location: "Accra, Greater Accra",
      description: "Providing shelter and education since 1949.",
      needs: ["Rice", "Clothing", "Books"],
      images: [
       require('../../assets/orphans.jpeg'),
       require('../../assets/logo3.jpeg'),
       require('../../assets/logo4.jpeg'),
       require('../../assets/logo5.jpeg'),
    ],
    },
    {
      id: '2',
      name: "Teshie Children's Home",
      location: "Accra, Greater Accra",
      description: "Caring for abandoned children in the community.",
      needs: ["Food", "Toiletries", "School Supplies"],
      images: [
         require('../../assets/orphans1.jpeg'),
         require('../../assets/logo6.jpeg'),
         require('../../assets/logo7.jpeg'),
         require('../../assets/logo8.jpeg'),
      ],
    },
    {
      id: '3',
      name: "Nyamedua Children's Home",
      location: "Kumasi, Ashanti",
      description: "Supporting children with special needs.",
      needs: ["Wheelchairs", "Therapy Equipment", "Medication"],
      images: [
         require('../../assets/orphans2.jpeg'),
         require('../../assets/logo10.jpeg'),
         require('../../assets/logo11.jpeg'),
      ],

    },

    
    {
      id: '4',
      name: "Handi Village Children's Home",
      location: "Tamale, Northern",
      description: "Shelter for street children and orphans.",
      needs: ["Blankets", "Mosquito Nets", "Shoes"],
      images: [
         require('../../assets/orphans3.jpeg'),
         require('../../assets/logo63.jpeg'),
         require('../../assets/logo64.jpeg'),
      ],
    },
    {
      id: '5',
      name: "Potters Village",
      location: "Tema, Greater Accra",
      description: "Christian-based care for vulnerable children.",
      needs: ["Bibles", "School Uniforms", "Computers"],
      images:[ 
         require('../../assets/orphans4.jpeg'),
         require('../../assets/logo12.jpeg'),
         require('../../assets/logo13.jpeg'),
      ],
    },
    {
      id: '6',
      name: "Save Them Young Mission",
      location: "Cape Coast, Central",
      description: "Rescuing children from child labor.",
      needs: ["Backpacks", "Notebooks", "Pens"],
      images:[
       require('../../assets/orphans5.jpeg'),
       require('../../assets/logo14.jpeg'),
       require('../../assets/logo15.jpeg'),


      ],
    },
    {
      id: '7',
      name: "Blessed Kids Orphanage",
      location: "Takoradi, Western",
      description: "Family-style care for orphans.",
      needs: ["Diapers", "Baby Formula", "Toys"],
      images:[ 
       require('../../assets/orphans6.jpeg'),
       require('../../assets/logo16.jpeg'),
       require('../../assets/logo17.jpeg'),
      ],
      },    
    {
      id: '8',
      name: "Rays of Hope Centre",
      location: "Ho, Volta",
      description: "Education-focused orphanage.",
      needs: ["Textbooks", "Desks", "Chairs"],
      images:[
        require('../../assets/orphans7.jpeg'),
         require('../../assets/logo18.jpeg'),
          require('../../assets/logo19.jpeg'),
      ],
    },
    {
      id: '9',
      name: "Compassion Kids Home",
      location: "Koforidua, Eastern",
      description: "Rehabilitation for former child soldiers.",
      needs: ["Art Supplies", "Sports Equipment", "Counseling Books"],
      images:[
        require('../../assets/orphans8.jpeg'),
         require('../../assets/logo20.jpeg'),
          require('../../assets/logo21.jpeg'),
      ],
    },
    {
      id: '10',
      name: "New Life Children's Home",
      location: "Sunyani, Bono",
      description: "Caring for HIV-positive children.",
      needs: ["Antiretroviral Drugs", "Nutritional Supplements", "Disinfectants"],
      images:[
         require('../../assets/orphans9.jpeg'),
          require('../../assets/logo22.jpeg'),
           require('../../assets/logo23.jpeg'),
      ],
    },
    
    {
      id: '11',
      name: "Grace Orphanage",
      location: "Bolgatanga, Upper East",
      description: "Shelter for children displaced by conflicts.",
      needs: ["Mattresses", "Solar Lamps", "Water Tanks"],
      images:[
         require('../../assets/orphans10.jpeg'),
           require('../../assets/logo24.jpeg'),
             require('../../assets/logo25.jpeg'),
      ],
    },
    {
      id: '12',
      name: "Sunshine Children's Centre",
      location: "Wa, Upper West",
      description: "Education and vocational training.",
      needs: ["Sewing Machines", "Gardening Tools", "Cooking Utensils"],
      images: [
          require('../../assets/orphans11.jpeg'),
            require('../../assets/logo26.jpeg'),
              require('../../assets/logo27.jpeg'),
      ],
    },
    {
      id: '13',
      name: "Bethel Orphanage",
      location: "Elmina, Central",
      description: "Historical home with modern facilities.",
      needs: ["Beds", "Fans", "First Aid Kits"],
      images: [
         require('../../assets/orphans12.jpeg'),
           require('../../assets/logo28.jpeg'),
             require('../../assets/logo29.jpeg'),
      ],
    },
    {
      id: '14',
      name: "Redeemer Children's Home",
      location: "Sekondi-Takoradi, Western",
      description: "Focus on marine community children.",
      needs: ["Life Jackets", "Fishing Nets", "Raincoats"],
      images: [
        require('../../assets/orphans13.jpeg'),
          require('../../assets/logo30.jpeg'),
            require('../../assets/logo31.jpeg'),
      ],
    },
    {
      id: '15',
      name: "Harmony House",
      location: "Techiman, Bono East",
      description: "Interfaith orphanage promoting unity.",
      needs: ["Prayer Mats", "Musical Instruments", "Interfaith Books"],
      images:[
          require('../../assets/orphans14.jpeg'),
            require('../../assets/logo32.jpeg'),
              require('../../assets/logo33.jpeg'),
      ],
    },
    {
      id: '16',
      name: "Future Leaders Home",
      location: "Nkawkaw, Eastern",
      description: "STEM education focus.",
      needs: ["Laptops", "Science Kits", "Robotics Parts"],
      images:[
          require('../../assets/orphans15.jpeg'),
            require('../../assets/logo34.jpeg'),
              require('../../assets/logo35.jpeg'),
      ],
    },
    {
      id: '17',
      name: "Agape Children's Village",
      location: "Dome, Greater Accra",
      description: "Community-based foster care system.",
      needs: ["Bicycles", "Refrigerators", "Washing Machines"],
      images:[
          require('../../assets/orphans16.jpeg'),
            require('../../assets/logo36.jpeg'),
              require('../../assets/logo37.jpeg'),
      ],
    },
    {
      id: '18',
      name: "Royal Seed Home",
      location: "Kasoa, Central",
      description: "Large-scale care facility.",
      needs: ["Bulk Rice", "Cooking Oil", "Sanitary Pads"],
      images:[
          require('../../assets/orphans17.jpeg'),
            require('../../assets/logo38.jpeg'),
              require('../../assets/logo39.jpeg'),
      ],
    },
    {
      id: '19',
      name: "Smile Foundation",
      location: "Teshie-Nungua, Greater Accra",
      description: "Special needs education.",
      needs: ["Hearing Aids", "Braille Books", "Walking Canes"],
      images: [
         require('../../assets/orphans18.jpeg'),
           require('../../assets/logo40.jpeg'),
             require('../../assets/logo41.jpeg'),
      ],
    },
    {
      id: '20',
      name: "Heaven's Gates Orphanage",
      location: "Madina, Greater Accra",
      description: "Montessori-based learning.",
      needs: ["Educational Toys", "Puzzles", "Building Blocks"],
      images:[
          require('../../assets/orphans19.jpeg'),
            require('../../assets/logo42.jpeg'),
              require('../../assets/logo43.jpeg'),
      ],
    },
    {
      id: '21',
      name: "New Horizon",
      location: "Adenta, Greater Accra",
      description: "Teen rehabilitation programs.",
      needs: ["Vocational Tools", "Mentorship Books", "Sports Gear"],
      images:[
          require('../../assets/orphans20.jpeg'),
            require('../../assets/logo44.jpeg'),
              require('../../assets/logo45.jpeg'),
      ],
    },
    {
      id: '22',
      name: "Sunbeam Foster Home",
      location: "Dansoman, Greater Accra",
      description: "Temporary shelter system.",
      needs: ["Baby Cribs", "High Chairs", "Strollers"],
      images:[
          require('../../assets/orphans21.jpeg'),
            require('../../assets/logo46.jpeg'),
              require('../../assets/logo46.jpeg'),
      ],
    },
    {
      id: '23',
      name: "Garden City Children's Home",
      location: "Kumasi, Ashanti",
      description: "Agricultural training programs.",
      needs: ["Farming Tools", "Seeds", "Watering Cans"],
      images:[
          require('../../assets/orphans23.jpeg'),
            require('../../assets/logo47.jpeg'),
              require('../../assets/logo48.jpeg'),
      ],
    },
    {
      id: '24',
      name: "Coastal Kids Sanctuary",
      location: "Winneba, Central",
      description: "Beachside therapeutic environment.",
      needs: ["Swimsuits", "Beach Towels", "Sunscreen"],
      images: [
         require('../../assets/orphans24.jpeg'),
           require('../../assets/logo49.jpeg'),
             require('../../assets/logo49.jpeg'),
      ],
    },
    {
      id: '25',
      name: "Northern Star Orphanage",
      location: "Tamale, Northern",
      description: "Focus on girls' education.",
      needs: ["Sanitary Products", "School Dresses", "Hair Care Items"],
      images: [
         require('../../assets/orphans24.jpeg'),
           require('../../assets/logo50.jpeg'),
             require('../../assets/logo51.jpeg'),
      ],
    },
    {
      id: '26',
      name: "Liberty Children's Home",
      location: "Tema, Greater Accra",
      description: "Former street children rehabilitation.",
      needs: ["Counseling Materials", "Art Therapy Supplies", "Recreational Items"],
      images: [
         require('../../assets/orphans25.jpeg'),
           require('../../assets/logo52.jpeg'),
             require('../../assets/logo53.jpeg'),
      ],
    },
    {
      id: '27',
      name: "Rising Sun Foundation",
      location: "Koforidua, Eastern",
      description: "Disability-inclusive programs.",
      needs: ["Wheelchair Ramps", "Therapy Balls", "Sensory Toys"],
      images:[
          require('../../assets/orphans26.jpeg'),
            require('../../assets/logo54.jpeg'),
              require('../../assets/logo55.jpeg'),
      ],
    },
    {
      id: '28',
      name: "Sacred Heart Orphanage",
      location: "Cape Coast, Central",
      description: "Historical building with modern care.",
      needs: ["Bunk Beds", "Mosquito Nets", "Ceiling Fans"],
      images:[
         require('../../assets/orphans27.jpeg'),
         require('../../assets/logo56.jpeg'),
         require('../../assets/logo57.jpeg'),
      ],
    },
    {
      id: '29',
      name: "Golden Kids Haven",
      location: "Sunyani, Bono",
      description: "Eco-friendly orphanage.",
      needs: ["Solar Panels", "Reusable Bottles", "Organic Seeds"],
      images:[
          require('../../assets/orphans28.jpeg'),
          require('../../assets/logo58.jpeg'),
          require('../../assets/logo59.jpeg'),
      ],
          
    },
    {
      id: '30',
      name: "Destiny's Child Centre",
      location: "Berekum, Bono",
      description: "Leadership development focus.",
      needs: ["Public Speaking Books", "Tablet Computers", "Projectors"],
      images: [
         require('../../assets/orphans29.jpeg'),
         require('../../assets/logo61.jpeg'),
         require('../../assets/logo62.jpeg'),
      ],
    }
  ];
  const  HomeScreen =() =>{
  const renderOrphanage =({item}) => (
      <TouchableOpacity style ={orphanage.card}
        onPress={() => router.push('/orphanage/${item.id')}
        >
      <Image source={item.image} style={styles.orphanageImage}/>
      <View style={styles.orphanageInfo}>
        <Text style={styles.orphanageName}>{item.location}</Text>
        <Text style={styles.orphanageLocation}>
          {item.location}
        </Text>
        <Text style={styles.orphanageDescription}>
          {item.description}
        </Text>
      </View>
        </TouchableOpacity>
    )
return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={styles.header}>
          Orphanages in Ghana
          </Text>
          <FlatList
        data={orphanage}
        renderItem={renderOrphanage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      </SafeAreaView>
);
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  orphanageCard: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  orphanageImage: {
    width: '100%',
    height: 200,
  },
  orphanageInfo: {
    padding: 10,
  },
  orphanageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  orphanageLocation: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  orphanageDescription: {
    fontSize: 14,
    marginTop: 6,
    color: '#555',
  },
});

export default HomeScreen;