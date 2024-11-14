import { getAuth, sendPasswordResetEmail } from "firebase/auth";
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


const ForgotPassword = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  const [email , setEmail] = useState("");
  const [loading , setLoading] = useState(false)

  const auth = getAuth();
  async function reset() {
    setLoading(true);
    await sendPasswordResetEmail(auth,email).then(function(){
      setLoading(false);
      navigation.navigate("Login");
      alert("Your reset link has been sent to your email").catch(function(error){
        setLoading(false);
        alert(error);
      })
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
              Forgot Password
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
            <Button text={loading?"Loading":"Reset"} style={{marginTop:20}} onPress={() => reset()} disabled={loading} />
            
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

export default ForgotPassword;
