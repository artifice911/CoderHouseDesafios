let nombre = prompt("Hola!cómo te llamas?");
let dato = parseInt(prompt("Hola "+nombre+", vamos a probar al sencillo, ¿qué edad tienes?"));
let sueño = 8;
let fecha = 2022;
let espectativa = 80;
let libros = 3;
let calculo = espectativa-dato;

document.write("Según tu edad "+nombre+", te quedan "+calculo+" años de vida, pero no te asustes!son solo estadisticas,aprovecha cada año para leer al menos "+libros+" libros"+"<br/>");

for(dato;dato<espectativa;dato+=10){
    fecha+=10;
    libros+=30;
    document.write("En "+fecha+" tendrás"+dato+" años y llevaras leídos "+libros+" libros."+"<br/>");
    if(dato>50 && dato<60){
        document.write("seguramente ya te jubilaste y tenes mas tiempo para aprender y hacer lo que quieras"+"<br/>");
    }
    else{
        document.write("el tiempo vuela"+"<br/>");
    }
}
