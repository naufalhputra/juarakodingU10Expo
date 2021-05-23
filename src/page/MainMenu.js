import React, { Component } from "react";
import { Text, View,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

export class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    // console.log(this.state.count);
    if (this.state.count === 3) {
      this.props.navigation.replace("laporan");
    }

    return (
      <View>
        <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "center" }}>
          <TouchableOpacity
            style={{ backgroundColor: "white", height: 100, width: 100, marginLeft: 20, marginRight: 20, justifyContent: "center" }}
            onPress={() => {
              this.props.navigation.navigate("laporan");
            }}
          >
            <Icon name="file" style={{ fontSize: 40, textAlign: "center" }} />
            <Text style={{ textAlign: "center" }}>Laporan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "white", height: 100, width: 100, marginLeft: 20, marginRight: 20, justifyContent: "center" }}
            onPress={() => {
              this.props.navigation.navigate("history");
            }}
          >
            <Icon name="file" style={{ fontSize: 40, textAlign: "center" }} />
            <Text style={{ textAlign: "center" }}>History Laporan</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "center" }}>
          <TouchableOpacity
            style={{ backgroundColor: "white", height: 100, width: 100, marginLeft: 20, marginRight: 20, justifyContent: "center" }}
            onPress={() => {
              this.props.navigation.navigate("maps");
            }}
          >
            <Icon name="map" style={{ fontSize: 40, textAlign: "center" }} />
            <Text style={{ textAlign: "center" }}>Map Kejadian</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "white", height: 100, width: 100, marginLeft: 20, marginRight: 20, justifyContent: "center" }}
            onPress={() => {
              this.props.navigation.replace("home");
            }}
          >
            <Icon name="sign-out-alt" style={{ fontSize: 40, textAlign: "center" }} />
            <Text style={{ textAlign: "center" }}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={{ justifyContent: "center", height: 350, width: 350 }} onPress={() => this.countPress()}>
            <Icon name="exclamation-circle" style={{ textAlign: "center", fontSize: 250 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MainMenu;
