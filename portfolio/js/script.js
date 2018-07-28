function myFirstApp(name, age) {
	alert("Привет меня зовут" + name + " и это моя первая программа");

	function showSkills() {
		let skills = ["html", "css", "jquery", "photoshop"];
		for (let i = 0; i < skills.length; i++) {
			document.write('<h1>Я владею</h1>');		
		}
	}
}
myFirstApp();