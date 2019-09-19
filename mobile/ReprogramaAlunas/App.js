import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Item } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alunas: []
    }
  };
  
  componentDidMount() {
    fetch('https://guarded-spire-33189.herokuapp.com/api/alunas')
    .then(function(response) {
      return response.json();
    }).then(data => this.setState({ alunas: data }))
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
       <FlatList
          data={this.state.alunas}
          renderItem={({item}) => <Text style={styles.item}>{item.nome}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
