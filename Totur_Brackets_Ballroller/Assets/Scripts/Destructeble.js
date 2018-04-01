#pragma strict

var ballRigidbody : Rigidbody;
var ballCollider : SphereCollider;
var piecesParent : Transform;
var piecesPrefab : Transform;
var wholeBall : GameObject;


function Destruct () {
	GetComponent.<Rigidbody>().isKinematic = true;
	GetComponent.<Collider>().enabled = false;
	var clone = Instantiate(piecesPrefab, piecesParent.position, piecesParent.rotation);
	Destroy (clone.gameObject, 10f);
	wholeBall.SetActive(false);
}

function DeDestruct (){
	GetComponent.<Rigidbody>().isKinematic = false;
	GetComponent.<Collider>().enabled = true;
	wholeBall.SetActive(true);
}