// Datos de usuarios y calificaciones combinados
const studentsData = {
    "YESICA VALENTINA": { //Usuario
        password: "15982427",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "AIRAN JUAN": { //Usuario
        password: "16771291",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "74", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "VALENTINA": { //Usuario
        password: "1234567",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "35", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ALISON MAYTE": { //Usuario
        password: "12671788",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SEBASTIAN DAVIDE": { //Usuario
        password: "15474617",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "12", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GIORGIO MORIS": { //Usuario
        password: "16202235",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "8", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "FABIAN": { //Usuario
        password: "16970170",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "24", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SARA SCARLETT": { //Usuario
        password: "13087772",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "68", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SALVADOR DEIVID": { //Usuario
        password: "14006431",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "54", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LEONEL ALEXANDER": { //Usuario
        password: "13119552",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "NAIZETH AYLIN": { //Usuario
        password: "16211614",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YOSIMAR JHOEL": { //Usuario
        password: "16018425",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "75", estado: "", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DENIS": { //Usuario
        password: "14006685",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHAEMY MARBEL": { //Usuario
        password: "16335842",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YERCO JHOEL": { //Usuario
        password: "15294040",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "73", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DANIEL": { //Usuario
        password: "17037744",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "48", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JOHAN ERLAN": { //Usuario
        password: "15635453",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ARACELI BRIANCA": { //Usuario
        password: "16361717",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CRISTIAN KEVIN": { //Usuario
        password: "16886497",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "44", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LIZETH LUNA": { //Usuario
        password: "14108002",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "58", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DAVID": { //Usuario
        password: "14974794",  // Contraseña
        curso: "1ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "89", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],

    },
    "MATEO IVAR": { //Usuario
        password: "14938370",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "31", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "BRENDA MAYTE": { //Usuario
        password: "12454396",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GENESIS CECILIA": { //Usuario
        password: "16906396",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "83", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JUAN FERNANDO": { //Usuario
        password: "12863798",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "50", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CRISTIAN ELVIS": { //Usuario
        password: "12894836",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MARIA DEL CIELO": { //Usuario
        password: "15352617",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "72", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "KEYLA ALEIDIS": { //Usuario
        password: "12735760",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MIGUEL ANGEL": { //Usuario
        password: "14481933",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JASIEL NOEMI": { //Usuario
        password: "14007065",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GABRIEL KEVIN": { //Usuario
        password: "15150735",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "77", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "RICARDO": { //Usuario
        password: "15377451",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "FABRICIO DANIEL": { //Usuario
        password: "15467033",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "65", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ZOEY SUMAYA": { //Usuario
        password: "13118786",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "68", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "KEVIN PATRICIO": { //Usuario
        password: "13119655",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHENNY YOSELIN": { //Usuario
        password: "13053567",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "83", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JUAN RODRIGO": { //Usuario
        password: "15069633",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "65", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JULIAN NEYMAR": { //Usuario
        password: "16188827",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "41", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANA CELESTE": { //Usuario
        password: "13378621",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "8", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DRAKE NOLAND": { //Usuario
        password: "14041113",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "78", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "HANNA JANDY": { //Usuario
        password: "15900234",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "NEYMAR DIDYEL": { //Usuario
        password: "15969914",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "10", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "PAOLA REYNA": { //Usuario
        password: "9534431",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "78", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LEIDY FLORA": { //Usuario
        password: "13491581",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "77", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "KEVIN": { //Usuario
        password: "15432789",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "23", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YUSARA GENESIS": { //Usuario
        password: "13552936",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "89", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "AARON JUSTINIANO": { //Usuario
        password: "15453680",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANGELA MASHIEL": { //Usuario
        password: "14007170",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DELIA": { //Usuario
        password: "13394025",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LESLIE MAYLI": { //Usuario
        password: "13393302",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "76", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JOSE ANTONIO": { //Usuario
        password: "14107325",  // Contraseña
        curso: "2do de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "19", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },

    "MARCO ANTONIO": { //Usuario
        password: "15048549",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ROY DAVID": { //Usuario
        password: "15404949",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "PRISCILA": { //Usuario
        password: "15464131",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LUZ DAYANA": { //Usuario
        password: "15052589",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANGELA MILAGROS": { //Usuario
        password: "11089196",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "18", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JUAN DE DIOS": { //Usuario
        password: "12864320",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "41", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DINA VALERIA": { //Usuario
        password: "9888738",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "12", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MAITE": { //Usuario
        password: "14974833",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "85", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHONATAN DENNIS": { //Usuario
        password: "14006569",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "57", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JOSE MIGUEL": { //Usuario
        password: "13677470",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "47", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHAN CARLA": { //Usuario
        password: "15377402",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "38", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ALAN STYBEN": { //Usuario
        password: "12541664",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "49", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GUADALUPE": { //Usuario
        password: "15053118",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "78", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "FRANKLIN": { //Usuario
        password: "15474420",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "27", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHOVANA": { //Usuario
        password: "13119900",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "63", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JAQUELINE VALERY": { //Usuario
        password: "13641717",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "64", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DUBAL SEBASTIAN": { //Usuario
        password: "16919931",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "77", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "TATIANA RUTH": { //Usuario
        password: "15055240",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "57", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ERICK BEYMAR": { //Usuario
        password: "15241005",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "6", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LUZ NAYELLY": { //Usuario
        password: "15479403",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "73", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ALEJANDRA": { //Usuario
        password: "15049860",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GENESIS CAMILA": { //Usuario
        password: "12345678",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GUADALUPE TATIANA": { //Usuario
        password: "16575605",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "19", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MELANI PILAR": { //Usuario
        password: "11089150",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "14", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SONIA": { //Usuario
        password: "14484401",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "79", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "RAQUEL WARA": { //Usuario
        password: "15054000",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "81", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "EMILI CLARA": { //Usuario
        password: "15466974",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SHODIN ALWA": { //Usuario
        password: "13966969",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "74", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ZEYLA JHANELA": { //Usuario
        password: "15447429",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "VICTOR FERNANDO": { //Usuario
        password: "15055926",  // Contraseña
        curso: "3ro de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "18", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },

    "SHIRLEY": { //Usuario
        password: "15092113",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "67", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LISED": { //Usuario
        password: "14643788",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "72", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "LAURA NOELIA": { //Usuario
        password: "16229387",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "71", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CAMILA EDURNE": { //Usuario
        password: "12861693",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "73", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CRISTOPHER MANUEL": { //Usuario
        password: "13121449",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "40", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "WARA ESTER": { //Usuario
        password: "14005594",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "VAYOLETH KAEL": { //Usuario
        password: "13760384",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHAMIL EDGAR": { //Usuario
        password: "10938045",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "71", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANDREA": { //Usuario
        password: "14645148",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CLARA": { //Usuario
        password: "16263855",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "58", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHORDY MARVIN": { //Usuario
        password: "14644824",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "NOEL FIDEL": { //Usuario
        password: "15069646",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "64", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DIETMAR RAYNARD": { //Usuario
        password: "12803282",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "73", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MAYA MAYRA": { //Usuario
        password: "14006654",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MAYA ANGELA": { //Usuario
        password: "14006584",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YAIR ROGER": { //Usuario
        password: "12864319",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "RIVER CRISTIAN": { //Usuario
        password: "14426906",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YERKO": { //Usuario
        password: "14108639",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CRISTIAN LEONEL": { //Usuario
        password: "15158804",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "54", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MARIANELA": { //Usuario
        password: "10078682",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "73", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ARTURO ANDRES": { //Usuario
        password: "15087156",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "EDDY": { //Usuario
        password: "15786673",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "74", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANGELO WILLIAMS": { //Usuario
        password: "12734905",  // Contraseña
        curso: "4to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "20", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ALEXIS SANTIAGO": { //Usuario
        password: "13492936",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "VIANCA ANALIA": { //Usuario
        password: "13423947",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YAMIL DEYMAR": { //Usuario
        password: "11089147",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "12", estado: "REPROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANGEL": { //Usuario
        password: "14879257",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "29", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MAYRA DANETZA": { //Usuario
        password: "13757364",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "78", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "YHENY KEILA": { //Usuario
        password: "16515023",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "FERNANDO ISRAEL": { //Usuario
        password: "8483392",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "85", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANELIZ": { //Usuario
        password: "8484185",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DIEGO LEONEL": { //Usuario
        password: "12960769",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "NATALIA LILIANA": { //Usuario
        password: "14007089",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ISRAEL": { //Usuario
        password: "10921323",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ELVIS PABLO": { //Usuario
        password: "14644329",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "19", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MARIANA": { //Usuario
        password: "15049845",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DANER": { //Usuario
        password: "14304279",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DANNA MARICELA": { //Usuario
        password: "14107870",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "33", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CLIVER ADEMAR": { //Usuario
        password: "12481018",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DELIA JHOSELIN": { //Usuario
        password: "14645393",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MUKTI RAMIRO": { //Usuario
        password: "15231181",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "DEIVIS ALEXANDER": { //Usuario
        password: "15432390",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANA CAROLINA": { //Usuario
        password: "13120783",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "NATALIA": { //Usuario
        password: "15056707",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SHARIE MILAGROS": { //Usuario
        password: "16883042",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JAZMINE ABIGAIL": { //Usuario
        password: "13642808",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ARIEL WILSON": { //Usuario
        password: "12961057",  // Contraseña
        curso: "5to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "FABRICIO": { //Usuario
        password: "15753400",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "46", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SEBASTIAN DANIEL": { //Usuario
        password: "14913760",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "66", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ANTHONY JIMMY": { //Usuario
        password: "12391181",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ADRIAN DAVID": { //Usuario
        password: "13649181",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MARINIA": { //Usuario
        password: "13375154",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JHEREMY RICKY": { //Usuario
        password: "12672972",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "KIMBERLY YESENIA": { //Usuario
        password: "10078675",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "76", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CRISTIAN ANGEL": { //Usuario
        password: "14108181",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "47", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "JULIO CESAR": { //Usuario
        password: "13757653",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "14", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CARMEN YAQUELINE": { //Usuario
        password: "12513108",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "80", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ZULEMA": { //Usuario
        password: "12960954",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "ARSENIO SEBASTIAN": { //Usuario
        password: "10937026",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "25", estado: "REPROBADO(A)", observacion: "COMPLETAR LAS TAREAS HASTA LA SIGUIENTE SEMANA PARA TENER SU NOTA DE APROBACIÓN" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SIOMARA LIZ": { //Usuario
        password: "12736256",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MATIAS CAMERON": { //Usuario
        password: "17557322",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CRISTHIAN": { //Usuario
        password: "13967978",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "SHAELY POLET": { //Usuario
        password: "10962496",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "GUSTAVO GABRIEL": { //Usuario
        password: "12960055",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CLAUDIA FERNANDA": { //Usuario
        password: "12960081",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "99", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "MARITZA NICOL": { //Usuario
        password: "13120784",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "CIELO ANAHI": { //Usuario
        password: "13280573",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "PAOLA NICOL": { //Usuario
        password: "13421950",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "79", estado: "APROBADO(A)", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    "": { //Usuario
        password: "",  // Contraseña
        curso: "6to de Secundaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: " " },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: " " },
        ],
    },
    // Agregar más estudiantes aquí siguiendo el mismo formato
};
// Función de inicio de sesión
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (studentsData[username] && studentsData[username].password === password) {
        localStorage.setItem("loggedUser", username);
        window.location.href = "entrevista.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Mostrar el aviso/modal
function mostrarAviso() {
    document.getElementById("modalDescarga").style.display = "block";
}

// Cerrar el modal
function cerrarAviso() {
    document.getElementById("modalDescarga").style.display = "none";
}

// Descargar el PDF usando nombre del usuario almacenado en localStorage
function openNota() {
    const username = localStorage.getItem("loggedUser");
    if (!username) {
        alert("No se encontró el usuario en sesión.");
        return;
    }

    const filePath = `notas/${username}.pdf`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = `${username}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    cerrarAviso(); // Opcional: cerrar modal después de descargar
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}
