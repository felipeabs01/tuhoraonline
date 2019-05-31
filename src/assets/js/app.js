// Modal
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
// });

// $(document).ready(function() {
//     $('.modal').modal();
// });



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});


// DIsplay nav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});


// Datepicker


inter_es = {
    minDate: new Date(2019, 04, 16),
    format: 'dddd d !de mmmm !de yyyy',
    formatSubmit: 'dd-mm-yyyy',
    cancel: 'Cancelar',
    clear: 'Limpiar',
    done: 'Ok',
    firstDay: 1,
    previousMonth: '‹',
    nextMonth: '›',
    months: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    monthsShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
    ],

    weekdays: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ],

    weekdaysShort: [
        'Dom',
        'Lun',
        'Mar',
        'Mié',
        'Jue',
        'Vie',
        'Sáb'
    ],

    weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']

};

var options = {
    i18n: inter_es,
};


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');

//     var instances = M.Datepicker.init(elems, {
//         format: 'yyyy-mm-dd',
//         i18n: {
//             cancel: 'Cancelar',
//             clear: 'Limpiar',
//             done: 'Ok',
//             firstDay: 1,
//             previousMonth: '‹',
//             nextMonth: '›',
//             months: [
//                 'Enero',
//                 'Febrero',
//                 'Marzo',
//                 'Abril',
//                 'Mayo',
//                 'Junio',
//                 'Julio',
//                 'Agosto',
//                 'Septiembre',
//                 'Octubre',
//                 'Noviembre',
//                 'Diciembre'
//             ],
//             monthsShort: [
//                 'Ene',
//                 'Feb',
//                 'Mar',
//                 'Abr',
//                 'May',
//                 'Jun',
//                 'Jul',
//                 'Ago',
//                 'Sep',
//                 'Oct',
//                 'Nov',
//                 'Dic'
//             ],

//             weekdays: [
//                 'Domingo',
//                 'Lunes',
//                 'Martes',
//                 'Miércoles',
//                 'Jueves',
//                 'Viernes',
//                 'Sábado'
//             ],

//             weekdaysShort: [
//                 'Dom',
//                 'Lun',
//                 'Mar',
//                 'Mié',
//                 'Jue',
//                 'Vie',
//                 'Sáb'
//             ],

//             weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
//         }

//     });



// });





// $(document).ready(function() {
//     $('.datepicker').pickadate({
//         format: 'dd/mm/yyyy',
//         formatSubmit: 'yyyy/mm/dd',
//         monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//         monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
//         weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
//         weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
//         selectMonths: true,
//         selectYears: 100, // Puedes cambiarlo para mostrar más o menos años
//         today: 'Hoy',
//         clear: 'Limpiar',
//         close: 'Ok',
//         labelMonthNext: 'Siguiente mes',
//         labelMonthPrev: 'Mes anterior',
//         labelMonthSelect: 'Selecciona un mes',
//         labelYearSelect: 'Selecciona un año'
//     });
// });


// DATEPICKER