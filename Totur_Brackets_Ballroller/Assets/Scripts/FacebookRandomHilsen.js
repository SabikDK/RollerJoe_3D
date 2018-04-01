#pragma strict

public static var seed: int;
var randomTextArray:String[]; //= "Nullermand000","111","22","tre","d4vs","d5fbdfb","6gh","h7n","888otto","ni","tiii10";
var textBlock : Text;


function Start () 
	{
		//Random.seed = 0;
		var theHit = Random.Range(0,randomTextArray.Length);
		var likeNr = theHit+1;
		if (randomTextArray[theHit] == "x")
		{
		textBlock.text = "Facebook.com/RollerJoe3D <- Please, Drop a Like here ;)";
		}
			else
		{
		textBlock.text = "Thanks to "+ randomTextArray[theHit] +" for the " + likeNr + ". Like on facebook";
		}
	}