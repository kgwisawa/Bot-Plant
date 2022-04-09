import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { React, useEffect, useState } from "react";

// * Import Firebase * //
import { auth } from "../service/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../service/firebase";
import { doc, setDoc } from "firebase/firestore";

// * Import Style-text * //
import inputStyle from "../style/input-style";
import textStyle from "../style/text-style";

const Signup = ({ navigation }) => {
  // * State variable * //
  const [firstname, setefirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [alerttxt, setalerttxt] = useState("");

  // ? Create Account Function ?//
  function Create() {
    const myDoc = doc(db, "User", email);
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
    };

    setDoc(myDoc, data)
      // Handling Promises
      .then(() => {
        // MARK: Success
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  }

  // ? CreateAccount ? //
  const handleCreateAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        alert("Account created!");
        Create();
        const user = userCredential.user;
        console.log(user);

        navigation.navigate("Signin");
      })
      .catch((error) => {
        alert(error);
      });
  };
  // ? check confirm password === password ? //
  function checkpasswordC(text) {
    if (text !== password) {
      setalerttxt("Password and confirm password don't match");
    } else {
      setalerttxt("");
    }
  }
  function checkpasswordP(text) {
    if (text !== confirmpassword) {
      setalerttxt("Password and confirm password don't match");
    } else {
      setalerttxt("");
    }
  }

  return (
    <View style={styles.content}>
      <View style={styles.contentlogin}>
        <Text style={[textStyle.head, styles.hcontent]}> Sign Up </Text>

        {/* Input fristname */}
        <TextInput
          style={[inputStyle.input, styles.email]}
          onChangeText={(text) => setefristname(text)}
          value={firstname}
          placeholder={"Frist name"}
        />
        {/* Input lastname */}
        <TextInput
          style={[inputStyle.input, styles.detail]}
          onChangeText={(text) => setlastname(text)}
          value={lastname}
          placeholder={"Last name"}
        />

        {/* Input email */}
        <TextInput
          style={[inputStyle.input, styles.detail]}
          onChangeText={(text) => setemail(text)}
          value={email}
          placeholder={"Email"}
        />
        {/* Input password */}
        <TextInput
          style={[inputStyle.input, styles.detail]}
          onChangeText={(text) => {
            setpassword(text);
            checkpasswordP(text);
          }}
          value={password}
          placeholder={"Password"}
        />
        {/* Input confirmpassword */}
        <TextInput
          style={[inputStyle.input, styles.detail]}
          onChangeText={(text) => {
            setconfirmpassword(text);
            checkpasswordC(text);
          }}
          value={confirmpassword}
          placeholder={"Confirm Password"}
        />
        <View style={styles.alertcontent}>
          <Text style={textStyle.alert}>{alerttxt}</Text>
        </View>

        {/* TouchableOpacity Create account */}
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            if (password === confirmpassword) {
              handleCreateAccount(email, password);
            } else {
              alert("Password and confirm password don't match");
            }
          }}
        >
          <Text style={[textStyle.login, { color: "#FFF" }]}> Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.acontent}>
          <Text style={textStyle.account_title}>have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={[textStyle.account_title, { color: "salmon" }]}>
              {" "}
              Sign In
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
    height: "90%",
    width: "100%",
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  hcontent: {
    marginTop: 50,
  },
  email: {
    marginTop: 30,
  },
  detail: {
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
  alertcontent: {
    height: 20,
    width: "80%",
    justifyContent: "center",
  },
});

export default Signup;
