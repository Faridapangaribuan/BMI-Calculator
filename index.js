CalculateBMI = () => {
  const height = document.getElementById("HeightInput").value;
  const weight = document.getElementById("WeightInput").value;


if(height === "" || weight === "") {
  alert("Please enter both height and weight values")
}

let bmi = weight / (height / 100) ** 2;
let result = "Your BMI is " + bmi.toFixed(2);

let category = "";

if(bmi < 18.5) {
  category = "Underweight";

} else if (bmi>=18.5 &&bmi <24.9){
  category = "Normal";
} else if (bmi >= 25 && bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obesitas";
}

result += "<br> category: " + category;

document.getElementById("result").innerHTML = result;
}

function btnclear()
{
  document.getElementById('Input').value='';
}