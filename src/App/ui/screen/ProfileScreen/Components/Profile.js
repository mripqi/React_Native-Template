import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileIcon from '../../../assets/Profile_Tab.svg';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <View style={styles.icon}>
        <ProfileIcon color={'white'} width={90} height={90} />
      </View>
      <Text style={styles.name}>Guest</Text>

      <Text style={styles.work}>No Email</Text>
      <Text style={styles.work}>React Native Developers</Text>

      <View style={styles.box}>
        <Text style={styles.portfoliotext}>Portofolio</Text>
        <View style={styles.boxinner} />
        <View style={styles.textinner}>
          <Text style={styles.textinner}>row 1</Text>
          <Text style={styles.textinner}>row 2</Text>
        </View>

        <View style={styles.boxinnered}>
          <Text style={styles.portfoliotext}>Contact Me</Text>
          <View style={styles.boxinnering}>
            <Text style={styles.textinner}>Facebook</Text>
          </View>
          <View style={styles.boxinnering}>
            <Text style={styles.textinner}>Twitter</Text>
          </View>
          <View style={styles.boxinnering}>
            <Text style={styles.textinner}>Instagram</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1224',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    width: 120,
    height: 120,
    justifyContent: 'center',
    paddingLeft: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  work: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
    textAlign: 'center',
    marginBottom: 7,
  },
  box: {
    borderRadius: 10,
    borderColor: 'blue',
    borderBottomColor: '#000',
    backgroundColor: '#0d1224',
    margin: 20,
    padding: 20,
    alignContent: 'center',
    width: 400,
  },
  portfoliotext: {
    fontSize: 18,
    color: 'white',
  },
  boxinner: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textinner: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  boxinnered: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boxinnering: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
  },
  textinput: {
    backgroundColor: 'white',
    color: 'black',
  },
});

export default Profile;
