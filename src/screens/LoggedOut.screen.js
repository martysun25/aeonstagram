import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Snackbar from "react-native-snackbar";

import LoadingModal from "../components/LoadingModal";

export class LoggedOutScreen extends Component {
  state = {
    isLoading: false,
    isSigninFailed: false,
  };

  onSignin = () => {
    if (this.state.isSigninFailed) {
      return;
    }

    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isSigninFailed: true,
      });
      setTimeout(() => {
        Snackbar.show({
          title: "抱歉，我不認得你是誰。",
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            title: "x",
            color: "white",
            onPress: () => this.setState({ isSigninFailed: false }),
          },
        });
      }, 50);
    }, 3000);
  };

  onMoreOption = () => {};

  render() {
    const containerStyle = [styles.container];
    const signinButtonStyle = [styles.signinButton];

    if (this.state.isSigninFailed) {
      containerStyle.push({ backgroundColor: "#D43018" });
      signinButtonStyle.push({ backgroundColor: "#D43018" });
    }

    return (
      <View style={containerStyle}>
        <Image source={require("../../assets/logo-AM.png")} style={styles.logo} />
        <Text style={styles.title}> 歡迎使用Aeonstagram。 </Text>
        <TouchableOpacity onPress={this.onSignin} style={signinButtonStyle}>
          <FAIcon name="google" style={{ color: "white", fontSize: 22 }} />
          <Text style={{ color: "white", fontSize: 18, fontWeight: "400", marginLeft: 50 }}>使用Google帳號登入</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onMoreOption} style={styles.moreOptionButton}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> 更多選項 </Text>
        </TouchableOpacity>
        <Text style={styles.info}>
          輕點繼續、建立帳號或「更多」選項，及代表我同意Aeonstagram的服務條款、付款服務條款、隱私政策與反歧視政策。
        </Text>

        <LoadingModal visible={this.state.isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E8689",
    alignItems: "stretch",
  },
  logo: {
    width: 55,
    height: 55,
    marginTop: 95,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  title: {
    height: 100,
    color: "white",
    fontSize: 30,
    fontWeight: "400",
    marginHorizontal: 15,
    paddingTop: 20,
  },
  signinButton: {
    flexDirection: "row",
    height: 45,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#1E8689",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  moreOptionButton: {
    height: 30,
    justifyContent: "center",
    alignSelf: "flex-start",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  info: {
    flex: 2,
    marginHorizontal: 15,
    marginVertical: 20,
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
});

export default LoggedOutScreen;
