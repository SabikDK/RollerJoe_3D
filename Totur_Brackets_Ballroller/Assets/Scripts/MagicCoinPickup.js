#pragma strict

var CreatObject : GameObject;
//var CreatObject2 : GameObject;
var coinEffect : Transform;

var xPos = 0 ;
var yPos = 0 ;
var zPos = 0 ;

//var xPos2 = 0 ;
//var yPos2 = 0 ;
//var zPos2 = 0 ;

//var xRot = 0 ;
//var yRot = 0 ;
//var zRot = 0 ;

var coinValue = 1;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{
	GameMaster.currentScore += coinValue;
	//Destroy(killObject.gameObject);
	Instantiate(CreatObject, transform.position + Vector3(xPos,yPos,zPos),transform.rotation);//Vector3(xPos,yPos,zPos));//transform.rotation);
	//Instantiate(CreatObject2, transform.position + Vector3(xPos2,yPos2,zPos2),transform.rotation);//Vector3(xPos,yPos,zPos));//transform.rotation);
	var effect = Instantiate(coinEffect, transform.position, transform.rotation);
	Destroy(effect.gameObject, 3);
	Destroy(gameObject);//"Game object" er den som dette script sidder på
	}
}

function Start () {
GameMaster.totalCoinAmount = GameMaster.totalCoinAmount + coinValue;
//Debug.Log("(Magic) "+ GameMaster.totalCoinAmount);
}