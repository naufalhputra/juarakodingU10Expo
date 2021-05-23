import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from 'react-redux'

class Home extends Component {

    constructor (props){
        super(props)
    }

    componentDidMount(){
        console.log(JSON.stringify(this.props))
    }
    getData = ()=>{
        axios.get("")
    }
    render() {
        return (
            <View style={{ alignItems: "center" }}> 
                
            <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
            
                <Icon name="user-secret" style={{ textAlign: "center", height: 350, width: 350, fontSize: 250 }} />
            
            </View>
                {
                    
                    <View  style={{ alignItems: "center" }}>
                        
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("login")}}><Text style={styles.text}>Login</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("registrasi")}}><Text style={styles.text}>Registrasi</Text></TouchableOpacity>
                    </View>
                    
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.RegisterReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
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