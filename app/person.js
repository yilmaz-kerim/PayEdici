import { 
View, 
Text, 
StyleSheet,
FlatList,
TouchableOpacity,
Image,
ScrollView,
TextInput
} from "react-native";
import { router } from "expo-router";
import Search from "../assets/icons/search.png"
import React, { useCallback, useMemo, useRef } from 'react';

const peronData= [
    {
        title: "Ali Mithad",
        borcMiktarı: 50,
        alacakMiktarı: 0,
    },
    {
        title: "Ulaş",
        borcMiktarı: 0,
        alacakMiktarı: 100,
    },
    {
        title: "Kerim",
        borcMiktarı: 0,
        alacakMiktarı: 50,
    },
    {
        title: "Şeref",
        borcMiktarı: 100,
        alacakMiktarı: 100,
    },
    {
        title: "Ali",
        borcMiktarı: 100,
        alacakMiktarı: 0,
    },
]
const person = () =>{

    return(
        <ScrollView>
            <View>
            <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChange={()=>{}}
            placeholder='What are you looking for ?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={Search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{router.replace("/forms/addperson")}}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
        </View>
        <View style={styles.container}>
          <View style={styles.personList}>
            <View style={styles.personSection}>
              <Text style={styles.personTitle}>Ali Mithad</Text>
              <View style={styles.personPay}>
                <Text style={styles.payTitle}>Borç Miktarı: 50 TL</Text>
                <Text style={styles.payTitle}>Alacak Miktarı: 0 TL</Text>
              </View>
            </View>

            <View style={styles.personSection}>
              <Text style={styles.personTitle}>Ulaş</Text>
              <View style={styles.personPay}>
                <Text style={styles.payTitle}>Borç Miktarı: 0 TL</Text>
                <Text style={styles.payTitle}>Alacak Miktarı: 100 TL</Text>
              </View>
            </View>

            <View style={styles.personSection}>
              <Text style={styles.personTitle}>Kerim</Text>
              <View style={styles.personPay}>
                <Text style={styles.payTitle}>Borç Miktarı: 0 TL</Text>
                <Text style={styles.payTitle}>Alacak Miktarı: 50 TL</Text>
              </View>
            </View>

            <View style={styles.personSection}>
              <Text style={styles.personTitle}>Şeref</Text>
              <View style={styles.personPay}>
                <Text style={styles.payTitle}>Borç Miktarı: 100 TL</Text>
                <Text style={styles.payTitle}>Alacak Miktarı: 100 TL</Text>
              </View>
            </View>

            <View style={styles.personSection}>
              <Text style={styles.personTitle}>Ali</Text>
              <View style={styles.personPay}>
                <Text style={styles.payTitle}>Borç Miktarı: 100 TL</Text>
                <Text style={styles.payTitle}>Alacak Miktarı: 0 TL</Text>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
    )
}

export default person;

const styles = StyleSheet.create({
    container: {
        width: "100%",
      },
      searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        height: 50,
        marginLeft: 20,
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: "100%",
      },
      searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: "#e7b532",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        marginRight: 20,
      },
      searchBtnImage: {
        width: "50%",
        height: "50%",
      },
      personList:{
        width: "100%",
        justifyContent: "center",
      },
      personSection:{
        backgroundColor: "#e7b532",
        width: "80%",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 10,
      },
      personTitle: {
        color: "#0c2322",
        fontSize: 22,
        fontWeight: "bold",
        padding: 5,
      },
      personPay:{
        backgroundColor: "#0c2322",
        width: "100%",
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      payTitle:{
        color: "#e7b532",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5,
      },
});