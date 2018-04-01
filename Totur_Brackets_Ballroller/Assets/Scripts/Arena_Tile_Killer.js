#pragma strict

var delayBeforeKill = 15;
var magicAnim : Animator;
var animationToTrigger : String;

function Start () {

		yield WaitForSeconds (delayBeforeKill);
        magicAnim.SetTrigger (animationToTrigger);
		yield WaitForSeconds (delayBeforeKill + 10);
		Destroy (gameObject);
}
