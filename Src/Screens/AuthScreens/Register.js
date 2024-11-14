import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React ,{useState}from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

const Register = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [loding , setLoading] = useState(false)

  const auth = getAuth();
  async function register (){
    setLoading(true);
    await createUserWithEmailAndPassword(auth,email,password).catch(function(
      error 
    ){
      var errorMessage =error.message;
      setLoading(flase)
      alert(errorMessage);
    })
  }
  return (
    <KeyboardAvoidingView behavior="height" enable style={{flex:1}}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
           style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
           }}
          >
            <Image
             resizeMode="contain"
             style={{
              height:220,
              width:220,
             }}
             source={require("../../../assets/register.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: isDarkmode? themeColor.dark: themeColor.white,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                padding: 30,
              }}
              size="h3" 
            >
              Login
            </Text>
            <Text>Email</Text>
            <TextInput 
            placeholder="Enter your Email" 
            containerStyle={{marginTop:15}}
            autoCapitalize="none"
            autoComplete="off"
            value={email}
            keyboardType="email-address"
            onChangeText={(text)=>setEmail(text)}
            />
            <Text style={{ marginTop: 15 }}>Password</Text>
            <TextInput 
             placeholder="Enter your Password" 
             secureTextEntry={true} 
             containerStyle={{marginTop:15}}
             autoCapitalize="none"
             autoComplete="off"
             value={password}
             autoCorrect={false}
             onChangeText={(text)=> setPassword(text)}
            />
            <Button text={loding ? "Loading" : "Create an account"} style={{marginTop:20}} onPress={() => register()} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}>
                <Text size="md" fontWeight="bold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            <View 
          style={{
            flexDirection:"row",
            alignItems:"center",
            marginTop:30,
            justifyContent:"center"
          }}>
            <TouchableOpacity
            onPress={()=>{
                isDarkmode ? setTheme("light") : setTheme("dark")
            }}
            
            >
                <Text
                style={{
                    marginLeft: 5,
                }} 
                size="md"
                >
                    {isDarkmode ? "Light Theme" : "Dark Theme"}

                </Text>

            </TouchableOpacity>

          </View>

            
          </View>
          
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default Register;
