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

const groupdata= [
    {
        title: "Mutfak",
        href: "/group",
    },
    {
        title: "Deneme Öğrenci",
        href: "/person",
    },
    {
        title: "Halı Saha",
        href: "/paydebt",
    },
    {
        title: "cmt_2023-12-16",
        href: "/grouppay",
    },
    {
        title: "cmt-2023-12-16_v1",
        href: "/profile",
    },
]
const group = () =>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View>
            
            <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Gruplar</Text>
            </View>
            <View>
            
                <View style={styles.selectSection}>
                    <FlatList
                    numColumns={2} 
                    data={groupdata}
                    renderItem={({ item })=>(
                        <TouchableOpacity style={styles.selectSectionBtn} onPress={()=>router.replace("/person")}>
                            <Text style={styles.selectTitle}>{item.title}</Text> 
                        </TouchableOpacity>
                    )} keyExtractor={(item, index) => index.toString()}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default group;

const styles= StyleSheet.create({
    container:{
        justifyContent: "center",
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
        marginTop: 20,
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