import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";

const data = [
  { label: "Mutfak", value: "1" },
  { label: "Deneme Öğrenci", value: "2" },
  { label: "Halı Saha", value: "3" },
];

const person = [
  { label: "Ali Mithad", value: "1" },
  { label: "Ulaş", value: "2" },
  { label: "Kerim", value: "3" },
  { label: "Şeref", value: "4" },
  { label: "Ali", value: "5" },
];
const paydebt = () => {
  const [value, setValue] = useState(null);
  const [isPersonValue, setisPersonValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isPersonFocus, setIsPersonFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>Grup</Text>
      );
    }
    return null;
  };
  const renderPerson = () => {
    if (isPersonValue || isPersonFocus) {
      return (
        <Text style={[styles.label, isPersonFocus && { color: "blue" }]}>
          Kişiler
        </Text>
      );
    }
    return null;
  };
  return (
    <ScrollView style={styles.fullbody}>
      <View>
        <View style={styles.totalContainer}>
          <Text style={styles.headerTitle}>Ödeme İşlemleri</Text>
          <View style={styles.container}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select Group" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.container}>
            {renderPerson()}
            <Dropdown
              style={[
                styles.dropdown,
                isPersonFocus && { borderColor: "blue" },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={person}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isPersonFocus ? "Select Person" : "..."}
              searchPlaceholder="Search..."
              value={isPersonValue}
              onFocus={() => setIsPersonFocus(true)}
              onBlur={() => setIsPersonFocus(false)}
              onChange={(item) => {
                setisPersonValue(item.value);
                setIsPersonFocus(false);
              }}
            />
          </View>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              onChange={() => {}}
              placeholder="Ödeme Yapacağınız Tutarı Giriniz..."
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Borç Öde</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default paydebt;

const styles = StyleSheet.create({
  fullbody: {
    backgroundColor: "white",
  },
  headerTitle: {
    padding: 16,
    fontWeight: "bold",
    fontSize: 40,
    color: "#e7b532",
  },
  totalContainer: {
    marginTop: 10,
    width: "90%",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    backgroundColor: "white",
    padding: 6,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  searchInput: {
    width: "98%",
    height: "100%",
    paddingHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
  searchWrapper: {
    flex: 1,
    borderRadius: 20,
    height: "100%",
    marginLeft: 6,
  },
  submitButton: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e7b532",
    marginTop: 10,
    width: "25%",
  },
  submitText: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
