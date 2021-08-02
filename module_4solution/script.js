var names=new Array();
names[0]="Harry";
names[1]="Jen";
names[2]="abshiek";
names[3]="jason";
names[4]="pause";
names[5]="jimy";
names[6]="John";
names[7]="Yamuna";
names[8]="lara";
names[9]="Jonny";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}