/* SENTENCIAS SWITCH */
let nota = 4;

switch (nota) {
    case 5:
        console.log('Buen trabajo, aprobaste');
        break;
    case 4:
        console.log('Obtuviste un sobresaliente');
        break;
    case 3:
        console.log('Has obtenido lo suficiente');
        break;
    case 2:
        console.log('No has aprobado por poco');
        break;
    case 1:
        console.log('No has aprobado, debes esforzarte más');
        break;
    default:
        console.log('Erro: Nota debe estar entre el 1 y el 5');
        break;
}