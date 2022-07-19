import React from 'react';
import {  StyleSheet, TouchableWithoutFeedbackBase } from 'react-native';


export default StyleSheet.create({
  body: {
    backgroundColor: '#1e005a',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 12,   
  },
  headerM: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'yellow',
    width: '75%',
    height: 50,
    fontSize: 12,
    borderWidth: 2,
    borderBottomColor: '#D8BFFF', 
    alignItems: 'center', 
    padding: 12,
    // justifyContent: 'flex-start',
    // alignContent: 'flex-start',
    marginLeft: 8,

  },
  button: {
    backgroundColor: '#1e005a',
    height: 50,
    aspectRatio: 1,
    borderColor: 'white',
    borderRadius: 25,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // marginHorizontal: 12,
  },
  butText: {
    color: 'white',
    fontSize: 18,
    // padding: 7, 
  },
  button02: {
    height: 200,
    aspectRatio: 2, 
    backgroundColor: '#1e005a', 
    margin: 24
  }, 
  listText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 12,
  }
});

