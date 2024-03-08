const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {

    if (input.value != "") {
        
        const newList = document.createElement('li');
        const deleteButton = document.createElement('button');

        newList.textContent = input.value;

        deleteButton.textContent = '❌';

        newList.append(deleteButton);
        list.append(newList);

        deleteButton.addEventListener('click', function () {

            list.removeChild(newList);
            input.focus();
         });

        input.focus();
        input.value = '';
    } else {
        alert("No input detected. Write Something!!!");
        input.focus();

    }

 });