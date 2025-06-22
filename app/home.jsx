import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const orphanages = [
    {
        id: 1,
        name: 'Osu Childrens Home',
        location: 'Accra, Ghana',
        image: require('../assets/images/Osu.jpg'),
    },
    {
        id: 2,
        name: 'Save Our Future Orphanage',
        location: 'Madina, Ghana',
        image: require('../assets/images/Future.jpg'),
    },
];
const HomeScreen = () => {
const renderItem =({item})=> (
<TouchableOpacity style={StyleSheet.cared}>
    <image source={item.image} style={StyleSheet.image}/>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.location}>{item.location}</Text>
</TouchableOpacity>
);
return(
    <View style={styles.container}>
        <Text style={styles.heading}>Orphanages in Accra</Text>
        <FlatList
        data={orphanages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
);



    
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card:{
        backgroundColor:'f2f2f2',
        borderRadius:10,
        marginBottom: 15,
        overflow: 'hidden',
    },
    image:{
        width:'100%',
        height: 200,
        resizeMode: 'cover' ,
    },
    name:{
        fontSize: 18,
        fontWeight:'bold',
        padding: 10,
    },
    location:{
        fontSize: 16,
        color:'#666',
        paddingHorizontal: 10,
        paddingBottom:10,
    },
});
// This is a  react component that displays a list of orphanages in Accra, Ghana
// It uses Flatlist to render the list of orphanages. 
//Each orphanage is diplayed in a card with an image , name,  and location.
//The styles are defined using StyleSheet.create to ensuure a consistent look and feel.


export default HomeScreen;