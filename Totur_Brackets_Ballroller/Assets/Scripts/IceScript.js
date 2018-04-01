#pragma strict

private var HitsTaken = 0;
var HitsToBreak = 3;

function OnCollisionEnter () {
Debug.Log("HitsTaken/HitstoBrake: " + HitsTaken +"/"+HitsToBreak);
HitsTaken += 1;
if (HitsTaken > HitsToBreak)
	{

	Debug.Log("Broken");
	//Destroy(GameObject);
	Destroy(gameObject);
	}
}

function Update () {

}