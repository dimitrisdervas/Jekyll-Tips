$('.datepicker-checkin').pickadate({
    selectMonths: true, /* Creates a dropdown to control month */
    selectYears: +2  /* Creates a dropdown of 15 years to control year */
  });

$('.datepicker-checkout').pickadate({
    selectMonths: true, /* Creates a dropdown to control month */
    selectYears: +2, /*  Creates a dropdown of 15 years to control year */
    min: + 2
  });
