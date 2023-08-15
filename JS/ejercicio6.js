/**Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
 */
let username = prompt("Tu nombre es: ");
let age = prompt("Tu edad: ");
let country = prompt("Tu país: ");
let city = prompt("Tu ciudad: ");

if (age === "" || country === "" || city === "") {
  alert("Dejaste campos vacíos");
} else {
  username = username.toLowerCase();
  country = country.toLowerCase();
  city = city.toLowerCase();
  if (
    age > 18 &&
    (country === "canada" || country === "canadá") &&
    city === "toronto"
  ) {
    alert("Beca Otrogada");
  } else {
    alert("No aplicas a beca");
  }
}
