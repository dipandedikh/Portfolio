import firestore from '@react-native-firebase/firestore';


export const getUserData = async (phoneNumber) => {
    try {
      const userCollection = firestore().collection("STAFF");
      let document = await userCollection.doc(phoneNumber).get();
      return document.data();
    } catch (error) {}
  };
  
  export const checkUserInFirebase = async (phoneNumber) => {
    try {
      const userCollection = firestore().collection("STAFF_CHECK");
      let document = await userCollection.doc(phoneNumber).get();
      if (document.exists) {
        return true;
      }
      return false;
    } catch (error) {}
  };