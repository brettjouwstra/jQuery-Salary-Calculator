
console.log('js loaded!');

//Global employee array
let allEmployees = {};
let count = 1;
let monthlyCost = 0;

$(document).ready(readyHandle);

function readyHandle(){

  console.log('jQuery is ready!');

  renderToDom();

//Click listener!

$("#submitButton").on("click", valueWork);

function createEmployee() {
        employee = new Object();
        employee.index = count;
        employee.first = $('#firstIn').val();
        employee.last = $('#lastIn').val();
        employee.id = $('#idIn').val();
        employee.title = $('#titleIn').val();
        employee.salary = $('#salaryIn').val();

        allEmployees[count] = employee;
        count += 1;

        monthlyCost += Number($('#salaryIn').val());
};
 
function valueWork() {
    createEmployee()
    console.log(allEmployees)

    document.getElementById('totalCost').innerHTML = monthlyCost;
    
    if(monthlyCost >= 20000){
        $('#total').addClass('highlightRed')
    }
    renderToDom();
    // clears all values in input boxes
    clearInputs();
    
    // end addEmployee
};


function renderToDom() {
    document.getElementById('employeeList').innerHTML = ""
    for (var key in allEmployees) {
        var value = allEmployees[key];
        let employeeRow = $(`
        <tr class="employee">
            <td>${value.first}</td>
            <td>${value.last}</td>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.salary}</td>
            <td>
              <button type='button' data-index=${value.index} class='btn btn-outline-danger btn-sm'>Delete</button>
            </td>
        </tr>`);
        //put on DOM
    $('#employeeList').append(employeeRow)
        
    }
}


$(document).on('click', '.btn', function() {
    let inVal = $(this).data("index")
    delete allEmployees[inVal]
    renderToDom()
});

function clearInputs() {
    
  $('#firstIn').val('');
  $('#lastIn').val('');
  $('#idIn').val('');
  $('#titleIn').val('');
  $('#salaryIn').val('');

  // end clearInputs
    }
};