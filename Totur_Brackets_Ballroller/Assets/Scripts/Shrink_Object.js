#pragma strict

//var CreatObject : GameObject;
//var CreatObject2 : GameObject;
var coinEffect : Transform;
var magicAnim : Animator;
var animToTrigger = "Shrink";

//var xPos = 0 ;
//var yPos = 0 ;
//var zPos = 0 ;

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
	//GameMaster.currentScore += coinValue;
	Debug.Log("debugging...SkrumpObject");
	//var magicAnim : Collider;
//	info.SetTrigger (animToTrigger);
	magicAnim.SetTrigger (animToTrigger);
	//Destroy(gameObject);//"Game object" er den som dette script sidder på
	}
}

function Start (){
	//Debug.Log ("hmm");
}

