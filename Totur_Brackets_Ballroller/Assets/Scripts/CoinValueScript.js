#pragma strict

import UnityEngine.UI;

var coinValueText : Text;
var totalCoinValue : int;
var levNr = 1;




function Update () {
//totalCoinValue = totalCoinValue + PlayerPrefs.GetInt("" + levNr + "_levelScore");
//levNr = levNr + 1;




totalCoinValue = PlayerPrefs.GetInt("1_levelScore" + GameMaster.version) 
			   + PlayerPrefs.GetInt("2_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("3_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("4_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("5_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("6_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("7_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("8_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("9_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("10_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("11_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("12_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("13_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("14_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("15_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("16_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("17_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("18_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("19_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("20_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("21_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("22_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("23_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("24_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("25_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("26_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("27_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("28_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("29_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("30_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("31_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("32_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("33_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("34_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("35_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("36_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("37_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("38_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("39_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("40_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("41_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("42_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("43_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("44_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("45_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("46_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("47_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("48_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("49_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("50_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("51_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("52_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("53_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("54_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("55_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("56_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("57_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("58_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("59_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("60_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("61_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("62_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("63_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("64_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("65_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("66_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("67_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("68_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("69_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("70_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("71_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("72_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("73_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("74_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("75_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("76_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("77_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("78_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("79_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("80_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("81_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("82_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("83_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("84_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("85_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("86_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("87_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("88_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("89_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("90_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("91_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("92_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("93_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("94_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("95_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("96_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("97_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("98_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("99_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("100_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("101_levelScore" + GameMaster.version)				  
			   + PlayerPrefs.GetInt("102_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("103_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("104_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("105_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("106_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("107_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("108_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("109_levelScore" + GameMaster.version)
			   + PlayerPrefs.GetInt("110_levelScore" + GameMaster.version)


			   ;
PlayerPrefs.SetInt("totalCoinValue" + GameMaster.version,totalCoinValue);


//Skriv fejl når sidste punkt er taget i brug
if (PlayerPrefs.GetInt("100_levelScore" + GameMaster.version) != 0){
Debug.Log("WARNING 1227: ALMOST Last Level In USE: " + PlayerPrefs.GetInt("100_levelScore" + GameMaster.version));
}

if (PlayerPrefs.GetInt("105_levelScore" + GameMaster.version) != 0){
Debug.Log("ERROR 1337: Last Level In USE: " + PlayerPrefs.GetInt("105_levelScore" + GameMaster.version));
}

coinValueText.text = "XP: " + totalCoinValue;
}
