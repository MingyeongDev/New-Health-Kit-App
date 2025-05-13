import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {colors, images} from '../../config/globalStyle';
import CustomTextInput from '../../components/input';
import CustomButton from '../../components/button';
import {navigate} from '../../RootNavigation';
import CustomText from '../../components/text';
import Icon from 'react-native-vector-icons/EvilIcons';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.signupButton}>
          <Icon name="chevron-right" size={24} color={colors.green} />
          <CustomText color={colors.green}>회원가입</CustomText>
        </View>

        <View style={{gap: 8}}>
          <CustomTextInput placeholder={'이메일을 입력해주세요.'} />
          <CustomTextInput placeholder={'비밀번호를 입력해주세요.'} />
        </View>

        <CustomButton
          size={'medium'}
          onPress={() => navigate('mainScreen')}
          style={{marginTop: 15}}
          title={'로그인'}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomText>아이디/비밀번호 찾기</CustomText>
      </View>
    </View>
  );
};

export default SignInScreen;
