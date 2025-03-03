$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        const taskText = $('#taskInput').val().trim();

        if (taskText === "") {
            alert('Você precisa escrever alguma coisa!');
            return;
        }

        const newTask = $('<li>').text(taskText);

        // Adiciona a tarefa com uma animação suave
        newTask.css({
            opacity: 0,
            transform: 'translateY(-10px)'
        });

        $('#taskList').append(newTask);

        setTimeout(() => {
            newTask.css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }, 10);

        $('#taskInput').val('');
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
