import React from 'react';
import {  StyleSheet, TouchableWithoutFeedbackBase } from 'react-native';


export default StyleSheet.create({
  body: {
    backgroundColor: '#1e005a',
    flex: 1,
    alignItems: 'baseline',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingHorizontal: 16,   
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
    width: '100%',
    aspectRatio: 6,
    fontSize: 11,
    borderWidth: 2,
    borderBottomColor: '#D8BFFF', 
    alignItems: 'center', 
    marginVertical: 6,   
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
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    textAlign: 'left',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
  },
  placesM: {
    backgroundColor: 'yellow',
    width: '100%',
    aspectRatio: 5,
  },
  placeItem: {
    width: '100%',
    aspectRatio: 7, 
    padding: 10,
    borderRadius: 10
  },
  placesAll: {
    width: '20%',
  },
  imageAll: {
    width: '100%',
    aspectRatio: 1,
  },
  textAll: {
    fontSize: 10,
  },
  placesListM: {
    width: '100%',
    aspectRatio: .16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

