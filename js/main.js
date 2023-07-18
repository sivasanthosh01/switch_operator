	// Switch case calculation

var a=parseInt(prompt("enter first value"));
var operator=prompt("enter operator");
var b=parseInt(prompt("enter second value"));
var c;

switch(operator) {
		case "+":
			c=a+b;
			document.write(c);
			break;
		case "-":
			c=a-b;
			document.write(c);
			break;
		case "*":
			c=a*b;
			document.write(c);
			break;
		case "/":
			c=a/b;
			document.write(c);
			break;
		case "%":
			c=a%b;
			document.write(c);
			break;
		default:
			break;
		}
		
		

	
