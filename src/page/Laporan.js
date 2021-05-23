import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import RNPickerSelect from "react-native-picker-select";
import { connect } from 'react-redux'
import { RegAction, LapAction} from '../redux/Action'
import axios from 'axios'

export class Laporan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      };
    
  }

//   componentDidMount() {
//     setInterval(() => {
//       this.props.LapAction("time", new Date().toLocaleString());
//     }, 1000);
//     this.getLocation();
//     console.log(this.props.dataReg.name);
//   }

//   getLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       setErrorMsg("Permission to access location was denied");
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     // console.log(JSON.stringify(location));

//     this.props.LapAction("latitude", location.coords.latitude);
//     this.props.LapAction("longitude", location.coords.longitude);


//     this.props.LapAction("name", this.props.dataReg.name);
//   };

Laporan(){
    axios.post("http://192.168.1.7:8080/Laporan/addLaporan/",this.props.dataLap)
    .then((response)=>{
        alert(JSON.stringify(response.data));   
        this.props.navigation.navigate("mainmenu")
    }).catch((err)=>{
        console.log(err)
    })
}
  render() {

    return (
      <View>                            
      <Text> Name </Text>
      <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={(value)=>{this.props.LapAction("nama",value)}}
      />

        <Text style={{ marginTop: 10, fontSize: 20, marginLeft: 20 }}>Kejadian</Text>
        <RNPickerSelect
          pickerProps={{ style: { height: 40, overflow: "scroll", borderWidth: 1, width: 350, marginLeft: 20, backgroundColor: "white" } }}
          onValueChange={(value) => this.props.LapAction("kejadian", value)}
          items={[
            { label: "Kecelakaan", value: "Kecelakaan" },
            { label: "Pemerkosaan", value: "Pemerkosaan" },
            { label: "Perampokan", value: "Perampokan" },
            { label: "Bencana Alam", value: "Bencana Alam" },
            { label: "Pembunuhan", value: "Pembunuhan" },
          ]}
        />
                            
        <Text> Alamat </Text>
        <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            onChangeText={(value)=>{this.props.LapAction("alamat",value)}}
        />
        
        <Text> Keterangan </Text>
        <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            onChangeText={(value)=>{this.props.LapAction("keterangan",value)}}
        />

        <Text> Status </Text>
        <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            onChangeText={(value)=>{this.props.LapAction("status",value)}}
        />
        
{/* 
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("camera");
            }}
          >
            <Image source={{ uri: this.props.dataLaporan.gambar }} style={{ width: 200, height: 200, marginTop: 10 }} />
          </TouchableOpacity>
        </View> */}

                        <View style={{ alignItems: "center" }}>
                          <TouchableOpacity style={styles.button}onPress={() => this.Laporan()}>
                            <Text style={{ fontSize: 20, color: "white" }}>Laporan</Text>
                          </TouchableOpacity>
                          </View>
            
      </View>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(Laporan);


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        backgroundColor: "blue",
        width: 120,
        height: 35,
        alignItems: "center",
        borderRadius: 20,
        marginTop: 10,
    },
    text:{
        textAlign:'center',
    }
  });