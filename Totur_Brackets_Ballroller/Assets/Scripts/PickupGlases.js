#pragma strict

var coinEffect : Transform;
//var coinValue = 1;
//static var totalCoinAmount = 0;
static var gotGlases = 0;
function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
	//GameMaster.currentScore += coinValue;
	
	gotGlases = 1;
	var effect = Instantiate(coinEffect, transform.position, transform.rotation);
	Destroy(effect.gameObject, 3);
	Destroy(gameObject);//"Game object" er den som dette script sidder på
	
	}
}

function Start () {
	if (gotGlases != 0){	
		Destroy(gameObject);
	}
Debug.Log("ImAllive and i Got my glases:" + gotGlases);
//GameMaster.totalCoinAmount = GameMaster.totalCoinAmount + coinValue;
//Debug.Log(GameMaster.totalCoinAmount);
}