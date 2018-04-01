#pragma strict

var DelayBeforeKill = 0.5;

function Start () {
		yield WaitForSeconds (DelayBeforeKill);
		Destroy (gameObject);
}
