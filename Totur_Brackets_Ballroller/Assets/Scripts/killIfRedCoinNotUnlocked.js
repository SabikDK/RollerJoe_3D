#pragma strict

function Start () {
	if (PlayerPrefs.GetInt ("redCoinsUnlocked_"+GameMaster.version) == 1) { 
	Debug.Log("Red Coins is unlocked");
	} else
	{
		Destroy(gameObject);
	}
}

function Update () {

}

//"redCoinsUnlocked_"+version, 1)