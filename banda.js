// Datos de usuarios y calificaciones combinados
const studentsData = {
    //QUINTO DE PRIMARIA     
        "YHORDY ALEXANDER": { 
            password: "15652837", 
            curso: "5to de Primaria",
            instrumento: "Tambor(Redoble)",
            codigo: "TAM-10",  
        calificaciones: [
            {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
        ],
    },
    //SEXTO DE PRIMARIA 
        "ARMIN DENIS": { 
            password: "16783243", 
            curso: "6to de Primaria", 
            instrumento: "Trompeta",
            codigo: "TPT-03", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "NELVIN EZEQUIEL": { 
            password: "14427297", 
            curso: "6to de Primaria",
            instrumento: "Tambor(Redoble)",
            codigo: "TAM-2", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "ALEJANDRO MATIAS": { 
            password: "16908894", 
            curso: "6to de Primaria",
            instrumento: "Trompeta",
            codigo: "TPT-07", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "No asistió a todos los ensayos" },
            ],
        },
        "ASBEL JESUS": { 
            password: "15970059", 
            curso: "6to de Primaria", 
            instrumento: "Trompeta",
            codigo: "TPT-", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "No asistió a todos los ensayos" },
            ],
        },
    //Primero de Secundaria
        "YESICA VALENTINA": { //Usuario
            password: "15982427",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "AIRAN JUAN": { //Usuario
            password: "16771291",  // Contraseña
            curso: "1ro de Secundaria", 
            instrumento: "Trompeta",
            codigo: "TPT-03", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },    
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "VALENTINA": { //Usuario
            password: "1234567",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ALISON MAYTE": { //Usuario
            password: "12671788",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "SEBASTIAN DAVIDE": { //Usuario
            password: "15474617",  // Contraseña
            curso: "1ro de Secundaria", 
            instrumento: "Bombo",
            codigo: "BOM-", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },    
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "GIORGIO MORIS": { //Usuario
            password: "16202235",  // Contraseña
            curso: "1ro de Secundaria",
            instrumento: "Baritono",
            codigo: "BAR-10",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "FABIAN": { //Usuario
            password: "16970170",  // Contraseña
            curso: "1ro de Secundaria", 
            instrumento: "Trombón",
            codigo: "TBN-1", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "SARA SCARLETT": { //Usuario
            password: "13087772",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "SALVADOR DEIVID": { //Usuario
            password: "14006431",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "LEONEL ALEXANDER": { //Usuario
            password: "13119552",  // Contraseña
            curso: "1ro de Secundaria", 
            instrumento: "Tambor(Redoble)",
            codigo: "TAM-8", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "NAIZETH AYLIN": { //Usuario
            password: "16211614",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "YOSIMAR JHOEL": { //Usuario
            password: "16018425",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "DENIS": { //Usuario
            password: "14006685",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "JHAEMY MARBEL": { //Usuario
            password: "16335842",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "YERCO JHOEL": { //Usuario
            password: "15294040",  // Contraseña
            curso: "1ro de Secundaria",
            instrumento: "Tambor(Redoble)", 
            codigo: "TAM-10", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "DANIEL": { //Usuario
            password: "17037744",  // Contraseña
            curso: "1ro de Secundaria", 
            calificaciones: [
            ],
        },
        "JOHAN ERLAN": { //Usuario
            password: "15635453",  // Contraseña
            curso: "1ro de Secundaria",
            instrumento: "Trompeta",
            codigo: "TPT-04",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "ARACELI BRIANCA": { //Usuario
            password: "16361717",  // Contraseña
            curso: "1ro de Secundaria", 
            instrumento: "Lira",
            codigo: "PROPIA", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "CRISTIAN KEVIN": { //Usuario
            password: "16886497",  // Contraseña
            curso: "1ro de Secundaria",
            instrumento: "Trombón",
            codigo: "TBN-2",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "LIZETH LUNA": { //Usuario
            password: "14108002",  // Contraseña
            curso: "1ro de Secundaria",
            instrumento: "Lira",
            codigo: "LIR-07",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Acto en Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "95", observacion: "No utilizo chupete para interpretar Lira" },      
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "DAVID": { //Usuario
            password: "14974794",  // Contraseña
            curso: "1ro de Secundaria",
            instrumento: "Trompeta",
            codigo: "TPT-02",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "MATEO IVAR": { //Usuario
            password: "14938370",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "BRENDA MAYTE": { //Usuario
            password: "12454396",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "GENESIS CECILIA": { //Usuario
            password: "16906396",  // Contraseña
            curso: "2do de Secundaria", 
            instrumento: "Lira",
            codigo: "PROPIA", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "JUAN FERNANDO": { //Usuario
            password: "12863798",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "CRISTIAN ELVIS": { //Usuario
            password: "12894836",  // Contraseña
            curso: "2do de Secundaria", 
            instrumento: "Tambor(Redoble)",
            codigo: "TAM-", 
            calificaciones: [

            ],
        },
        "MARIA DEL CIELO": { //Usuario
            password: "15352617",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "KEYLA ALEIDIS": { //Usuario
            password: "12735760",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "MIGUEL ANGEL": { //Usuario
            password: "14481933",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "JASIEL NOEMI": { //Usuario
            password: "14007065",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "GABRIEL KEVIN": { //Usuario
            password: "15150735",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "RICARDO": { //Usuario
            password: "15377451",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "FABRICIO DANIEL": { //Usuario
            password: "15467033",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "ZOEY SUMAYA": { //Usuario
            password: "13118786",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "KEVIN PATRICIO": { //Usuario
            password: "13119655",  // Contraseña
            curso: "2do de Secundaria", 
            instrumento: "Quintuple",
            codigo: "MTQP-2", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "JHENNY YOSELIN": { //Usuario
            password: "13053567",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "JUAN RODRIGO": { //Usuario
            password: "15069633",  // Contraseña
            curso: "2do de Secundaria",
            instrumento: "Tambor(Redoble)", 
            codigo: "TAM-7", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },         
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "JULIAN NEYMAR": { //Usuario
            password: "16188827",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "ANA CELESTE": { //Usuario
            password: "13378621",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "DRAKE NOLAND": { //Usuario
            password: "14041113",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "HANNA JANDY": { //Usuario
            password: "15900234",  // Contraseña
            curso: "2do de Secundaria", 
            instrumento: "Lira",
            codigo: "LIR-", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se le presto el instrumento musical para el dia lunes" },
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "NEYMAR DIDYEL": { //Usuario
            password: "15969914",  // Contraseña
            curso: "2do de Secundaria", 
            instrumento: "Tambor(Redoble)",
            codigo: "TAM-4", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "PAOLA REYNA": { //Usuario
            password: "9534431",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "LEIDY FLORA": { //Usuario
            password: "13491581",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "KEVIN": { //Usuario
            password: "15432789",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "YUSARA GENESIS": { //Usuario
            password: "13552936",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "AARON JUSTINIANO": { //Usuario
            password: "15453680",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "ANGELA MASHIEL": { //Usuario
            password: "14007170",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "DELIA": { //Usuario
            password: "13394025",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "LESLIE MAYLI": { //Usuario
            password: "13393302",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
        "JOSE ANTONIO": { //Usuario
            password: "14107325",  // Contraseña
            curso: "2do de Secundaria", 
            calificaciones: [
            ],
        },
    
        "MARCO ANTONIO": { //Usuario
            password: "15048549",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ROY DAVID": { //Usuario
            password: "15404949",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "PRISCILA": { //Usuario
            password: "15464131",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "LUZ DAYANA": { //Usuario
            password: "15052589",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ANGELA MILAGROS": { //Usuario
            password: "11089196",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "JUAN DE DIOS": { //Usuario
            password: "12864320",  // Contraseña
            curso: "3ro de Secundaria", 
            instrumento: "Baritono",
            codigo: "BAR-07", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "DINA VALERIA": { //Usuario
            password: "9888738",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "MAITE": { //Usuario
            password: "14974833",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "JHONATAN DENNIS": { //Usuario
            password: "14006569",  // Contraseña
            curso: "3ro de Secundaria",
            instrumento: "Bombo",
            codigo: "BOM-",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "JOSE MIGUEL": { //Usuario
            password: "13677470",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "JHAN CARLA": { //Usuario
            password: "15377402",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ALAN STYBEN": { //Usuario
            password: "12541664",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "GUADALUPE": { //Usuario
            password: "15053118",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "FRANKLIN": { //Usuario
            password: "15474420",  // Contraseña
            curso: "3ro de Secundaria",
            instrumento: "Baritono", 
            codigo: "BAR-05", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se le presto el instrumento musical para el dia lunes" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "JHOVANA": { //Usuario
            password: "13119900",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "JAQUELINE VALERY": { //Usuario
            password: "13641717",  // Contraseña
            curso: "3ro de Secundaria", 
            instrumento: "Lira",
            codigo: "LIR-09", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "DUBAL SEBASTIAN": { //Usuario
            password: "16919931",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "TATIANA RUTH": { //Usuario
            password: "15055240",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ERICK BEYMAR": { //Usuario
            password: "15241005",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "LUZ NAYELLY": { //Usuario
            password: "15479403",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ALEJANDRA": { //Usuario
            password: "15049860",  // Contraseña
            curso: "3ro de Secundaria", 
            instrumento: "Lira",
            codigo: "LIR-03", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },   
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "GENESIS CAMILA": { //Usuario
            password: "12345678",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "GUADALUPE TATIANA": { //Usuario
            password: "16575605",  // Contraseña
            curso: "3ro de Secundaria", 
            instrumento: "Lira",
            codigo: "PROPIA", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "MELANI PILAR": { //Usuario
            password: "11089150",  // Contraseña
            curso: "3ro de Secundaria",
            instrumento: "Lira",
            codigo: "LIR-",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "SONIA": { //Usuario
            password: "14484401",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "RAQUEL WARA": { //Usuario
            password: "15054000",  // Contraseña
            curso: "3ro de Secundaria",
            instrumento: "Lira", 
            codigo: "LIR-05", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },   
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "EMILI CLARA": { //Usuario
            password: "15466974",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "SHODIN ALWA": { //Usuario
            password: "13966969",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "ZEYLA JHANELA": { //Usuario
            password: "15447429",  // Contraseña
            curso: "3ro de Secundaria", 
            calificaciones: [
            ],
        },
        "VICTOR FERNANDO": { //Usuario
            password: "15055926",  // Contraseña
            curso: "3ro de Secundaria", 
            instrumento: "Tambor(Redoble)",
            codigo: "TAM-5", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
    
        "SHIRLEY": { //Usuario
            password: "15092113",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "LISED": { //Usuario
            password: "14643788",  // Contraseña
            curso: "4to de Secundaria",
            instrumento: "Lira",
            codigo: "LIR-01",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se le presto el instrumento musical para el dia lunes" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
            ],
        },
        "LAURA NOELIA": { //Usuario
            password: "16229387",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "CAMILA EDURNE": { //Usuario
            password: "12861693",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "CRISTOPHER MANUEL": { //Usuario
            password: "13121449",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "WARA ESTER": { //Usuario
            password: "14005594",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "VAYOLETH KAEL": { //Usuario
            password: "13760384",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "JHAMIL EDGAR": { //Usuario
            password: "10938045",  // Contraseña
            curso: "4to de Secundaria", 
            instrumento: "Trompeta",
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "ANDREA": { //Usuario
            password: "14645148",  // Contraseña
            curso: "4to de Secundaria", 
            instrumento: "Lira",
            codigo: "LIR-08", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se le presto el instrumento musical para el dia lunes" },    
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
            ],
        },
        "CLARA": { //Usuario
            password: "16263855",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "JHORDY MARVIN": { //Usuario
            password: "14644824",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "NOEL FIDEL": { //Usuario
            password: "15069646",  // Contraseña
            curso: "4to de Secundaria", 
            instrumento: "Trompeta",
            codigo: "TPT-01", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "DIETMAR RAYNARD": { //Usuario
            password: "12803282",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "MAYA MAYRA": { //Usuario
            password: "14006654",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [,
            ],
        },
        "MAYA ANGELA": { //Usuario
            password: "14006584",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "YAIR ROGER": { //Usuario
            password: "12864319",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "RIVER CRISTIAN": { //Usuario
            password: "14426906",  // Contraseña
            curso: "4to de Secundaria",
            instrumento: "Baritono", 
            codigo: "BAR-02", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se le presto el instrumento musical para el dia lunes" },   
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "YERKO": { //Usuario
            password: "14108639",  // Contraseña
            curso: "4to de Secundaria",
            instrumento: "Baritono",
            codigo: "BAR-1",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "CRISTIAN LEONEL": { //Usuario
            password: "15158804",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "MARIANELA": { //Usuario
            password: "10078682",  // Contraseña
            curso: "4to de Secundaria",
            instrumento: "Lira", 
            codigo: "LIR-", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },    
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
            ],
        },
        "ARTURO ANDRES": { //Usuario
            password: "15087156",  // Contraseña
            curso: "4to de Secundaria",
            instrumento: "Baritono", 
            codigo: "BAR-06", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },    
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se presto instrumento musical" },
            ],
        },
        "EDDY": { //Usuario
            password: "15786673",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "ANGELO WILLIAMS": { //Usuario
            password: "12734905",  // Contraseña
            curso: "4to de Secundaria", 
            calificaciones: [
            ],
        },
        "ALEXIS SANTIAGO": { //Usuario
            password: "13492936",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
            ],
        },
        "VIANCA ANALIA": { //Usuario
            password: "13423947",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "YAMIL DEYMAR": { //Usuario
            password: "11089147",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ANGEL": { //Usuario
            password: "14879257",  // Contraseña
            curso: "5to de Secundaria", 
            instrumento: "Baritono",
            codigo: "BAR-01",
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },     
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Abandono" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "MAYRA DANETZA": { //Usuario
            password: "13757364",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "YHENY KEILA": { //Usuario
            password: "16515023",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "FERNANDO ISRAEL": { //Usuario
            password: "8483392",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ANELIZ": { //Usuario
            password: "8484185",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "DIEGO LEONEL": { //Usuario
            password: "12960769",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "NATALIA LILIANA": { //Usuario
            password: "14007089",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ISRAEL": { //Usuario
            password: "10921323",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ELVIS PABLO": { //Usuario
            password: "14644329",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "MARIANA": { //Usuario
            password: "15049845",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "DANER": { //Usuario
            password: "14304279",  // Contraseña
            curso: "5to de Secundaria", 
            instrumento: "Bombo",
            codigo: "BOM-", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },       
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "DANNA MARICELA": { //Usuario
            password: "14107870",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "CLIVER ADEMAR": { //Usuario
            password: "12481018",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "DELIA JHOSELIN": { //Usuario
            password: "14645393",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "MUKTI RAMIRO": { //Usuario
            password: "15231181",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "DEIVIS ALEXANDER": { //Usuario
            password: "15432390",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ANA CAROLINA": { //Usuario
            password: "13120783",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "NATALIA": { //Usuario
            password: "15056707",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "SHARIE MILAGROS": { //Usuario
            password: "16883042",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "JAZMINE ABIGAIL": { //Usuario
            password: "13642808",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ARIEL WILSON": { //Usuario
            password: "12961057",  // Contraseña
            curso: "5to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "FABRICIO": { //Usuario
            password: "15753400",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "SEBASTIAN DANIEL": { //Usuario
            password: "14913760",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ANTHONY JIMMY": { //Usuario
            password: "12391181",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ADRIAN DAVID": { //Usuario
            password: "13649181",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "MARINIA": { //Usuario
            password: "13375154",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "JHEREMY RICKY": { //Usuario
            password: "12672972",  // Contraseña
            curso: "6to de Secundaria",
            instrumento: "Baritono",
            codigo: "BAR-",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "Se le presto el instrumento musical para el dia lunes" },       
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Martes  16 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "Abandono" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "KIMBERLY YESENIA": { //Usuario
            password: "10078675",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "CRISTIAN ANGEL": { //Usuario
            password: "14108181",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "JULIO CESAR": { //Usuario
            password: "13757653",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "CARMEN YAQUELINE": { //Usuario
            password: "12513108",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ZULEMA": { //Usuario
            password: "12960954",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "ARSENIO SEBASTIAN": { //Usuario
            password: "10937026",  // Contraseña
            curso: "6to de Secundaria",
            instrumento: "Trompeta",
            codigo: "TPT-", 
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },   
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "FALTA", calificacion: "0", observacion: "" },
            ],
        },
        "SIOMARA LIZ": { //Usuario
            password: "12736256",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "MATIAS CAMERON": { //Usuario
            password: "17557322",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "CRISTHIAN": { //Usuario
            password: "13967978",  // Contraseña
            curso: "6to de Secundaria",
            instrumento: "Trompeta",
            codigo: "TPT-",  
            calificaciones: [
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 20 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 27 de Agosto", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 1 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" }, 
                {instrumento: "Ensayo tarde", ensayo: "Viernes 12 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },       
                {instrumento: "Acto Mallasa", ensayo: "Lunes 15 de Septiembre", asistencia: "FALTA", calificacion: "0", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 16 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 19 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 24 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Martes 30 de Septiembre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 3 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 8 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 10 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Lunes 13 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Viernes 17 de Octubre", asistencia: "PERMISO", calificacion: "NINGUNO", observacion: "" },
                {instrumento: "Ensayo tarde", ensayo: "Miercoles 22 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },  
                {instrumento: "Ensayo tarde", ensayo: "Viernes 24 de Octubre", asistencia: "PRESENTE", calificacion: "100", observacion: "" },
            ],
        },
        "SHAELY POLET": { //Usuario
            password: "10962496",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "GUSTAVO GABRIEL": { //Usuario
            password: "12960055",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "CLAUDIA FERNANDA": { //Usuario
            password: "12960081",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "MARITZA NICOL": { //Usuario
            password: "13120784",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "CIELO ANAHI": { //Usuario
            password: "13280573",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "PAOLA NICOL": { //Usuario
            password: "13421950",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        "": { //Usuario
            password: "",  // Contraseña
            curso: "6to de Secundaria", 
            calificaciones: [
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
                {instrumento: "", ensayo: "", asistencia: "", calificacion: "", observacion: "" },
            ],
        },
        // Agregar más estudiantes aquí siguiendo el mismo formato
    };
    
    // Función para calcular el promedio anual sin decimales
    function calculateAnnualAverage(grades) {
        let total = 0;
        let count = 0;
      
        grades.forEach(grade => {
          if (grade.calificacion !== "") {
            const calificacion = parseFloat(grade.calificacion);
            if (!isNaN(calificacion)) {
              total += calificacion;
              count++;
            }
          }
        });
      
        if (count > 0) {
          const average = total / count;
          const roundedAverage = Math.round(average);
          const averageGrade = (roundedAverage >= 51) ? "APROBADO(A)" : "REPROBADO(A)";
          return { average: roundedAverage, status: averageGrade };
        }
      
        return null;
      }
      
      // Función para cargar las calificaciones
      function loadGrades(username) {
        const student = studentsData[username];
        if (!student) return;
      
        const gradesTable = document.getElementById("grades-table");
        gradesTable.innerHTML = ""; // Limpiar por si acaso
      
        student.calificaciones.forEach(grade => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${grade.instrumento}</td>
            <td>${grade.ensayo}</td>
            <td>${grade.asistencia}</td>
            <td>${grade.calificacion}</td>
            <td>${grade.observacion}</td>
          `;
          gradesTable.appendChild(row);
        });
      
        const averageData = calculateAnnualAverage(student.calificaciones);
        if (averageData) {
          const averageRow = document.createElement("tr");
          averageRow.innerHTML = `
            <td><b>Promedio Trimestral</b></td>
            <td></td>
            <td></td>
            <td>${averageData.average}</td>
            <td>${averageData.status}</td>
          `;
          gradesTable.appendChild(averageRow);
        }
      }
      
      // ✅ Un solo window.onload
      window.onload = () => {
        const user = localStorage.getItem("loggedUser");
        const pass = localStorage.getItem("loggedPass");
      
      // Validación de sesión
      const path = window.location.pathname;
      const isIndexPage = path.includes("index.html") || path === "/" || path.endsWith("/");
      if (!user && !isIndexPage) {
        alert("Debes iniciar sesión para acceder a esta sección.");
        window.location.href = "index.html";
        return;
      }
      
        // Mostrar datos personales
        const studentName = document.getElementById("student-name");
        const courseName = document.getElementById("course-name");
        const userName = document.getElementById("user-name");
        const userPass = document.getElementById("user-password");
      
        if (studentName) studentName.textContent = user;
        if (courseName) courseName.textContent = studentsData[user].curso;
        if (userName) userName.textContent = user;
        if (userPass) userPass.textContent = pass;

                // Nuevo: mostrar instrumento al centro 
        const instrumentName = document.getElementById("instrument-name");
        if (instrumentName) {
            const instr = studentsData[user].instrumento || "—";
            instrumentName.textContent = instr;
        }

                // Nuevo: mostrar el codigo a la derecha
        const codigoName = document.getElementById("codigo-name");
        if (codigoName) {
            const cod = studentsData[user].codigo || "—";
            codigoName.textContent = cod;
        }
      
        // Cargar calificaciones
        loadGrades(user);
      
        // Activar menú desplegable si existe
        const toggleBtn = document.getElementById("dropdownToggle");
        const dropdownMenu = document.getElementById("dropdownMenu");
        if (toggleBtn && dropdownMenu) {
          toggleBtn.addEventListener("click", () => {
            dropdownMenu.classList.toggle("hidden");
          });
        }
      };
    // para mostrar compromiso
      const contenedor = document.getElementById('contenedorImagen');
      const img = document.getElementById('imagen');
      
      let anchoActual = 100; // ancho inicial en porcentaje
      const minAncho = 30;
      const maxAncho = 100;
      
      document.getElementById('mostrarBtn').addEventListener('click', () => {
        contenedor.style.display = 'block';
        img.style.width = anchoActual + '%';  // aplica tamaño actual al mostrar
      });
      
      document.getElementById('ocultarBtn').addEventListener('click', () => {
        contenedor.style.display = 'none';
      });
      
      document.getElementById('aumentar').addEventListener('click', () => {
        if (anchoActual < maxAncho) {
          anchoActual += 10;
          if (anchoActual > maxAncho) anchoActual = maxAncho;
          img.style.width = anchoActual + '%';
        }
      });
      
      document.getElementById('reducir').addEventListener('click', () => {
        if (anchoActual > minAncho) {
          anchoActual -= 10;
          if (anchoActual < minAncho) anchoActual = minAncho;
          img.style.width = anchoActual + '%';
        }
      });

    

