import { useLocalSearchParams } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const {width} = Dimensions.get('window');

const OrphanageProfile = () => {
  const { name, location, description, images, needs } = useLocalSearchParams();
  const needsArray = needs  ?  needs.split(',') : [];
  const imagesArray = images ?  images.split(',') : [];

  return(
  <ScrollView contentContainerStyle={styles.container}>
    {/*Slideshow */}
    <ScrollView
    horizontal
    pagingEnabled
    decelerationRate={false}
    snapToAlignment='centre'
    showsHorizontalScrollIndicator={false}
    style={styles.imageSlider}
    >
      {imagesArray.map((uri,index) => (
        <Image key={index} source={{uri}} style={styles.image}/>
      ))}
    </ScrollView>
    {/*Orphanage Details*/}
    < View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.sectionTitle}>Current Needs:</Text>
        {needsArray.length > 0 ? (
          needsArray.map((need, index) => (
            <Text key={index} style={styles.needItem}>
              • {need.trim()}
            </Text>
          ))
        ) : (
          <Text style={styles.noNeeds}>No needs listed yet.</Text>
        )}

        {/* How Donation Helps*/}
        <Text style={styles.sectionTitle}>How Your Donation Helps:</Text>
        <Text style={styles.impactText}>
          Your support provides food, education, and healthcare to children in need.
          Every contribution makes a big difference in their lives.
        </Text>

        <View style={styles.button}>
          <TouchableOpacity style={{backgroundColor: '#00AEEF', padding:10,borderRadius:5}}>
            <Text style={{color:'#fff', textAlign:'center', fontWeight:'bold'}}>
              Donate Now
            </Text>
          </TouchableOpacity>
        </View>
        </View>
  </ScrollView>
  );
    };

    
    


const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  imageSlider:{
    paddingHorizontal:10,
  },
  image: {
    width: width  - 40,
    height: 200,
    resizeMode: 'cover',
    borderRadius:12,
    marginHorizontal:10,
  },
  
  content: {
    padding: 16,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom:10,
  },
  location: {
    color:'#666',
    fontSize:16,
    marginBottom:10,
  },
  description: {
    marginVertical:10,
    fontSize: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom:8,
    fontSize:15,
  },
  needItem:{
    fontSize: 12,
    marginBottom:6,
  },
  noNeeds:{
    color: '#888',
    fontStyle: 'italic',

  },
  button:{
    marginTop: 18,
  }
});

export default OrphanageProfile;