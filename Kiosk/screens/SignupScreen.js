import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();

  // DropDownPicker 상태 설정
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [items, setItems] = useState([
    { label: '장애인', value: 'disabled' },
    { label: '노약자', value: 'elderly' },
    { label: '어린이', value: 'child' },
    { label: '기타', value: 'other' },
  ]);

  return (
    <View style={styles.container}>
      {/* 상단 네비게이션 바 */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navButton}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('로그인 화면으로 이동')}>
          <Text style={styles.navButton}>→</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>회원가입</Text>

      <TextInput style={styles.input} placeholder="이름" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="나이" placeholderTextColor="#999" keyboardType="numeric" />

      {/* DropDownPicker 사용 */}
      <DropDownPicker
        open={open}
        value={selectedValue}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedValue}
        setItems={setItems}
        placeholder="해당사항"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
      />

      <TextInput style={styles.input} placeholder="전화번호" placeholderTextColor="#999" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="비밀번호" placeholderTextColor="#999" secureTextEntry={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  navButton: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
});
