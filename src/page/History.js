    
import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { RegAction, LapAction} from '../redux/Action'
import axios from 'axios'

class History extends Component {

  constructor(props){
    super(props)
    this.state = {
        data: [],
        getlap:""
    }
  }

  componentDidMount(){
    this.handleHistory();
  }

  handleHistory(){

    axios.get("http://192.168.1.7:8080/Laporan/",this.props.getlap)
    .then((response) => {
      let data = response.data
      this.setState({data : data})
    })
    .catch((err) => {
      console.log("There is an error with : " + err)
    })

  }

  renderItem = ({ item }) => (
    <View style = {{borderWidth : 2, borderColor : "Black", marginTop : 5}}>
      <Text style = {styles.title}>Nama: {item.nama}</Text>
      <Text style = {styles.title}>Kejadian: {item.kejadian}</Text>
      <Text style = {styles.title}>Alamat: {item.alamat}</Text>
      <Text style = {styles.title}>Keterangan: {item.keterangan}</Text>
    </View>
)

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <Text style = {styles.text}>REPORT HISTORY</Text>
          <FlatList 
            data = {this.state.data}
            renderItem = {this.renderItem}
            keyExtcactor = {item => item.id}
          />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
    dataReg:state.RegisterReducer,
    dataLap:state.LapReducer,

})

const mapDispatchToProps = {
    RegAction,
    LapAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(History)

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        padding : 5
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 18,
      },
      button: {
        margin:10,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
      },
    });