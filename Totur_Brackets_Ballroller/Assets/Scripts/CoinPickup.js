#pragma strict
var coinEffect : Transform;
var coinEffect_firework : Transform;
var coinEffect2 : Transform;
var coinValue = 1;
//static var totalCoinAmount = 0;
function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
//	coinRedUnlocked += coinValueRed;
	GameMaster.currentScore += coinValue;
	PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore");
if (GameMaster.currentScore > PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore" + GameMaster.version))
	{
    //Effect A
    var effect = Instantiate(coinEffect, transform.position, transform.rotation);
    var effect_fire = Instantiate(coinEffect_firework, transform.position, transform.rotation);
		Destroy(effect.gameObject, 3);
	//
	} 
	else 
	{
	//Effect B
	var effect2 = Instantiate(coinEffect2, transform.position, transform.rotation);
	Destroy(effect2.gameObject, 3);	
	//
	}
	Destroy(gameObject);//"Game object" er den som dette script sidder på
	
	}
}

function Start () {
//Debug.Log("hej");
GameMaster.totalCoinAmount = GameMaster.totalCoinAmount + coinValue;
//Debug.Log(GameMaster.totalCoinAmount);
}