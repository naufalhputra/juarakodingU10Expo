import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RegAction } from '../redux/Action'
import axios from 'axios'

class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            // name: "",
            // email: "",
            // phone: "",
            // address: "",
            // password:"",
          };
    }

    Register(){
        axios.post("http://192.168.1.7:8080/Register/addReg/",this.props.dataRegis)
        .then((response)=>{
            alert(JSON.stringify(response.data));   
            this.props.navigation.navigate("login")
        }).catch((err)=>{
            console.log(err)
        })
    }

    // Register = () => {
    //     axios
    //       .post(`http://192.168.1.7:8080/Register/addReg`, this.state)
    //       .then((response) => {
    //          console.log(response);
    //         alert(response.data);
    //         this.props.navigation.replace("login");
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    render() { 
        return (
         
                <View>          
                <Text> Name </Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    onChangeText={(value)=>{this.props.RegAction("name",value)}}
                />
                <Text> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    onChangeText={(value)=>{this.props.RegAction("email",value)}}
                />
                <Text> Phone </Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    onChangeText={(value)=>{this.props.RegAction("phone",value)}}
                />
                <Text> Address </Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    onChangeText={(value)=>{this.props.RegAction("address",value)}}
                />

                <Text> Password </Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    onChangeText={(value)=>{this.props.RegAction("password",value)}}
                /> 
                          
                          <View style={{ alignItems: "center" }}>
                          <TouchableOpacity style={styles.button}onPress={() => this.Register()}>
                            <Text style={{ fontSize: 20, color: "white" }}>Register</Text>
                          </TouchableOpacity>
                          </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.RegisterReducer
})

const mapDispatchToProps = {
    RegAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

// export default Register;

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
        borderWidth:5,
    }
  });