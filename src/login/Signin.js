import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { React, useEffect, useState } from "react";
import inputStyle from "../style/input-style";
import textStyle from "../style/text-style";
import { auth } from "../service/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Signin = ({navigation}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In!");
        alert("Signed In!");
        const user = userCredential.user;
        console.log(user);

        // alert(user.email)
        // navigation.navigate("Navigationmain", { email: user.email });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.content}>
      <View style={styles.contentlogin}>
        <Text style={[textStyle.head, styles.hcontent]}> Sign In </Text>

        {/* Input email */}
        <TextInput
          style={[inputStyle.input, styles.email]}
          onChangeText={(text) => setemail(text)}
          value={email}
          placeholder={"Email"}
        />
        {/* Input password */}
        <TextInput
          style={[inputStyle.input, styles.pass]}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry={true}
          value={password}
          placeholder={"Password"}
        />

        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            handleSignIn(email, password);
          }}
        >
          <Text style={[textStyle.login, { color: "#FFF" }]}> Sign In</Text>
        </TouchableOpacity>

        <View style={styles.acontent}>
          <Text style={textStyle.account_title}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={[textStyle.account_title, { color: "salmon" }]}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>


        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#3b5360",
  },
  contentlogin: {
    height: "75%",
    width: "100%",
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 80,
  },
  hcontent: {
    marginTop: 50,
  },
  email: {
    marginTop: 30,
  },
  pass: {
    marginTop: 20,
  },
  acontent: {
    marginTop: 10,
    flexDirection: "row",
  },
  login: {
    backgroundColor: "#5ca78c",
    width: "80%",
    height: 60,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Signin;
