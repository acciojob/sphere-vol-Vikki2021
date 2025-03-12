function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let radius = document.getElementById("radius").value;
    let volumeOutput = document.getElementById("volume");
    let radius = parseFloat(radius);

    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    // Calculate the volume: V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to four decimal places
    volumeOutput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
