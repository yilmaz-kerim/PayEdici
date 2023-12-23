import { Link } from "expo-router";
import { 
View, 
Text, 
StyleSheet,
FlatList,
TouchableOpacity,
Image,
ScrollView
} from "react-native";
import filter from "../assets/icons/filter.png";
import { router } from "expo-router";
import ImagesPay from "../assets/images/online-payment-security-concept-3d-phone-bill-removebg-preview.png"

const data= [
    {
        title: "Gruplara Git",
        href: "/group",
    },
    {
        title: "Kişilere Git",
        href: "/person",
    },
    {
        title: "Kişiye Borç Öde",
        href: "/paydebt",
    },
    {
        title: "Gruplara için Ödeme Yap",
        href: "/grouppay",
    },
    {
        title: "Profile Git",
        href: "/profile",
    },
]

const home = () =>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View>
            
            <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Hoş Geldiniz</Text>
            </View>
            <View style={styles.InfoContainer}>
                <Text style={styles.InfoText}>PayEdici ile tüm hesaplarda ödeme yapmak artık çok rahat.</Text>
            <Image source={ImagesPay} style={styles.images}/>
            </View>
            <View>
            
                <View style={styles.selectSection}>
                    <FlatList
                    numColumns={2} 
                    data={data}
                    renderItem={({ item })=>(
                        <TouchableOpacity style={styles.selectSectionBtn} onPress={()=>router.replace(item.href)}>
                            <Text style={styles.selectTitle}>{item.title}</Text> 
                        </TouchableOpacity>
                    )} keyExtractor={(item, index) => index.toString()}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default home;

const styles= StyleSheet.create({
    container:{
        justifyContent: "center",
    },
    InfoContainer:{
        flexDirection: 'row', // Yatay olarak öğeleri sırala
        alignItems: 'center', // Öğeleri dikeyde hizala
        padding: 10,
    },
    InfoText:{
        flex: 1,
    },
    images:{
        marginLeft: "auto",
        marginRight: "auto",
        width: 200,
        height: 150,
    },
    headerTitle:{
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: "auto",
        marginLeft: 8,
        color: "#e7b532",
    },
    headerContainer:{
        width: "100%",
        height: "18%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: "#0c2322",
    },
    selectSection:{
        width: "100%",
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
    },
    selectSectionBtn:{
        width: "45%",
        height: "400px",
        backgroundColor: "#e7b532",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 20,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5,
        shadowOpacity: 0.5,
        flexDirection: "row",
    },
    selectTitle:{
        color: "white",
        margin: 5,
        fontSize: "20px",
    }
})