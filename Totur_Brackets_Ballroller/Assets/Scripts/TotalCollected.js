#pragma strict

import UnityEngine.UI;

var totalScore : Text;

function Start () {

PlayerPrefs.SetInt("test",1);
PlayerPrefs.SetInt("hest",10);
Debug.Log(PlayerPrefs.GetInt("hest"));
Debug.Log(PlayerPrefs.GetInt("test"));
Debug.Log(PlayerPrefs.GetInt("test")+PlayerPrefs.GetInt("hest"));

Debug.Log("1_levelScore   Loades ---> "+PlayerPrefs.GetInt("1_levelScore"));

Debug.Log("Loaded Level --> "+Application.loadedLevel);

PlayerPrefs.SetInt("test2",1);
Debug.Log(PlayerPrefs.GetInt("test2"));

}





//PlayerPrefs.SetString("testString","Ostemad");
//Debug.Log(PlayerPrefs.GetString("testString"));

function Update () {

}