//  Variable to be used for identifying each row.

let employee = 0;

document.getElementById('new-add-employee').addEventListener('click', () => {
    let table = document.getElementById('employee-list');
    let row = table.insertRow(1);

    //  Setting the 'id' for each row so we can append a delete button to it later.

    row.setAttribute('id', `${employee}`);

    //  Entering all of the id's from the form inputs to the corresponding table columns.

    row.insertCell(0).innerHTML = document.getElementById('new-first-name').value + ' ' +
        document.getElementById('new-middle-name').value + ' ' +
        document.getElementById('new-last-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-street-address').value + ', ' +
        document.getElementById('new-city-address').value + ', ' +
        document.getElementById('new-state-address').value + ', ' +
        document.getElementById('new-zip-address').value;
    row.insertCell(2).innerHTML = document.getElementById('new-position').value;
    row.insertCell(3).innerHTML = '$' + document.getElementById('new-wage').value + ' per hour';
    row.insertCell(4).innerHTML = document.getElementById('new-hire-date').value;
    row.insertCell(5).innerHTML = document.getElementById('new-start-date').value;

    //  This will be the delete button to terminate an employee from the table.

    let deleteEmployee = row.insertCell(6);
    deleteEmployee.appendChild(createDeleteButton(employee++));

    //  Resetting all the input boxes back to '' for a better user experience.

    document.getElementById('new-first-name').value = '';
    document.getElementById('new-middle-name').value = '';
    document.getElementById('new-last-name').value = '';
    document.getElementById('new-street-address').value = '';
    document.getElementById('new-city-address').value = '';
    document.getElementById('new-state-address').value = '';
    document.getElementById('new-zip-address').value = '';
    document.getElementById('new-position').value = '';
    document.getElementById('new-wage').value = '';
    document.getElementById('new-hire-date').value = '';
    document.getElementById('new-start-date').value = '';
});

//  The function to make a delete emplyee button.

function createDeleteButton(employee) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = employee;
    btn.innerHTML = 'Terminate';
    btn.onclick = () => {
        let employeeToDelete = document.getElementById(`${employee}`);
        employeeToDelete.parentNode.removeChild(employeeToDelete);
    }
    return btn;
};