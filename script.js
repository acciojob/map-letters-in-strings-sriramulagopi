//your JS code here. If required.
function mapletters(str) {
	let obj={};
	for (let i=0;i<str.length;i++){
		obj[str[i]]=[];
		for (let j=0;j<str.length;j++){
			if (str[i]===str[j]){
				obj[str[i]].push(j);
			}
		}
	}
	console.log(obj);
}
mapletters("dodo");