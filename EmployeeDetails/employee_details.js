const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    { id: 4, name: 'Yesid Colmenares', age: 24, department: 'IT', salary: 85000, specialization: 'C#' }
];

function displayEmployees(){
    const totalEmployees = employees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => employee.salary + acc, 0);
    alert(`Total salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeeDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeeDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }else{
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
    }
}

function findEmployeeBySpecialization(specialization){
    const foundEmployee = employees.find(employee => employee.specialization === specialization);

    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization}</p>`;
    }else{
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con esa especializacion';
    }
}
