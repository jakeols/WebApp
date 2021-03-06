import Dispatcher from "../dispatcher/Dispatcher";
const cookies = require("../utils/cookies");

module.exports = {
  voterSignOut: function (){
    Dispatcher.loadEndpoint("voterSignOut", {sign_out_all_devices: false}); // signOut();
    cookies.setItem("voter_device_id", "", -1, "/");
  },

  setVoterDeviceIdCookie (id){
    cookies.setItem("voter_device_id", id, Infinity, "/");
  },

  signOut: function (){
    Dispatcher.loadEndpoint("voterSignOut", {sign_out_all_devices: false});
  }
};
