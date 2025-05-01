import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginNoticeScreen() {
  const navigation = useNavigation();

  const handleYes = () => {
    navigation.navigate('SelectKiosk'); // 예 → 키오스크 화면
  };

  const handleNo = () => {
    navigation.navigate('Waiting'); // 아니요 → 대기 화면
  };

  return (
    <View style={styles.container}>
      <Text style={styles.noticeText}>
        로그인을 하지 않으면{'\n'}학습 정보를 받을 수 없습니다.
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.yesButton} onPress={handleYes}>
          <Text style={styles.buttonText}>예</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.noButton} onPress={handleNo}>
          <Text style={styles.buttonText}>아니요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  noticeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
  },
  yesButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 15,
  },
  noButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
