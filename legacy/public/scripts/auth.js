/* eslint-disable no-undef */
$('#registr-button').on('click', function(e){
    e.preventDefault()

    var data = {

        name: $('#name').val(),
        login: $('#email').val(),
        password: $('#pass').val(),
        passwordvalid: $('#valpass').val()

    }
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/api/auth/registr'
      }).done(function(data) {
        if (!data.ok) {
            $('#valpass').after('<p class = "error">' + data.error + '</p>')
            if (data.fields) {
                data.fields.forEach(function(item) {
                    $('input[name =' + item + ']').addClass('error')
                });
            }
        } else {
            //$('#valpass').after('<p class = "success"> ОТЛИЧНО </p>')
            $(location).attr('href', '/accaunt')
        }
    })
})
//авторизация
$('#login-button').on('click', function(e){
    e.preventDefault()

    var data = {
        login: $('#login').val(),
        password: $('#password').val(),

    }

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/api/auth/login'
      }).done(function(data) {
        if (!data.ok) {
            $('#password').after('<p class = "error">' + data.error + '</p>')
            if (data.fields) {
                data.fields.forEach(function(item) {
                    $('input[name =' + item + ']').addClass('error')
                });
            }
        } else {
            $(location).attr('href', '/accaunt')
            //$('#password').after('<p class = "success"> ОТЛИЧНО </p>')
        }
    })
})
  /* eslint-enable no-undef */