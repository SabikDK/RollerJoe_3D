#pragma strict

var coinEffect : Transform;

function Start () {

}

function Update () {


}




	function OnTriggerEnter (info : Collider)
	{
		if (info.tag == "Player")
		{
		//GameMaster.currentScore += coinValue;
		Debug.Log("Hej");
		//GetComponent.Mesh = true;
		var effect = Instantiate(coinEffect, transform.position, transform.rotation);
		//Destroy(effect.gameObject, 3);
		Destroy(gameObject);//"Game object" er den som dette script sidder på
		
		}
	}
