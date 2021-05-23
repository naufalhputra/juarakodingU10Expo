import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RegAction } from '../redux/Action'
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props)
    }

    handleLogin(){
        axios.get(`http://192.168.1.7:8080/Register/name/${this.props.dataName}`)
        .then((response)=>{
            alert("Kamu berhasil Login" + response.data.name)
            this.props.RegAction("id",response.data.id)
            this.props.RegAction("name",response.data.name)
            this.props.RegAction("email",response.data.email)
            this.props.RegAction("phone",response.data.phone)
            this.props.RegAction("address",response.data.address)
            this.props.RegAction("password",response.data.password)
            this.props.RegAction("isLogin",true)

            this.props.navigation.navigate("mainmenu")
        })
        .catch((err)=>{
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
                    onChangeText={(value)=>{this.props.RegAction("name",value)}}
                />             

                <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.text}>Login</Text></TouchableOpacity>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataName:state.RegisterReducer.name
})

const mapDispatchToProps = {
    RegAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
        color: 'white',
    }
  });