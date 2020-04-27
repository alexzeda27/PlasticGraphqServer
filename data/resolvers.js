import mongoose from 'mongoose';

import { Department, Position, Employee, Square, Machine, Product, Year, Month, Week, Day, Mobility } from './database';

export const resolvers = {

    //Queries
    Query: {

        //** TO DO Department Queries */

        //Get All Departments
        getDepartments: (root, {limit, offset}) => {
            return Department.find({}).sort({departmentName: 1}).limit(limit).skip(offset);
        },

        //Get Department ID
        getDepartment: (root, {id}) => {
            return new Promise((resolve, object) => {
                Department.findById(id, (error, department) => {
                    if(error) rejects(error);
                    else resolve(department);
                });
            });
        },

        //Count Departments
        totalDepartments: (root) => {
            return new Promise((resolve, object) => {
                Department.countDocuments({}, (error, count) => {
                    if(error) rejects(error);
                    else resolve(count);
                });
            });
        },

        //** TO DO Position Queries */

        //Get All Positions
        getPositions: (root, {limit, offset}) => {
            return Position.find({}).sort({positionName: 1}).limit(limit).skip(offset);
        },

        //Get Position ID
        getPosition: (root, {id}) => {
            return new Promise((resolve, object) => {
                Position.findById(id, (error, position) => {
                    if(error) rejects(error);
                    else resolve(position);
                });
            });
        },

        //Count Positions
        totalPositions: (root) => {
            return new Promise((resolve, object) => {
                Position.countDocuments({}, (error, count) => {
                    if(error) rejects(error);
                    else resolve(count);
                });
            });
        },

        //** TO DO Employee Queries */

        //Get All Employees
        getEmployees: (root, {limit, offset}) => {
            return Employee.find({}).sort({payroll: 1}).limit(limit).skip(offset);
        },

        //Get Employee ID
        getEmployee: (root, {id}) => {
            return new Promise((resolve, object) => {
                Employee.findById(id, (error, employee) => {
                    if(error) rejects(error);
                    else resolve(employee);
                });
            });
        },

        //Count Employees
        totalEmployees: (root) => {
            return new Promise((resolve, object) => {
                Employee.countDocuments({}, (error, count) => {
                    if(error) rejects(error);
                    else resolve(count);
                });
            });
        },

        //Get Department for Employee
        getDepartmentEmployee: (root, {id}) => {
            return new Promise((resolve, object) => {
                Employee.findById(id, (error, employee) => {
                    if(error) rejects(error);
                    Department.findOne({_id: id}, (error, department) => {
                        if(error) rejects(error);
                        else {
                            console.log(employee.department);
                            resolve(department);
                        }
                    })
                });
            });
        },

        //** TO DO Square Queries */

        //Get Departments for Mobility
        getDepartmentsSquare: (root) => {
            return Department.find({_id: {$in: [
                "5e8c229c82c2db41c856156e",
                "5e8c236282c2db41c856157a",
                "5e8cdfb891169d47b01ed523",
                "5e8cdfe891169d47b01ed528",
                "5e8cdff091169d47b01ed529",
                "5e8cdff791169d47b01ed52a",
                "5e8cdffe91169d47b01ed52b"
            ]}});
        },

        //Get All Squares from Department
        getSquares: (root, {department}) => {
            return new Promise((resolve, object) => {
                Square.find({department: department}, (error, square) => {
                    if(error) rejects(error);
                    else resolve(square);
                });
            });
        },

        //Get All Squares
        getAllSquares: (root) => {
            return new Promise((resolve, object) => {
                Square.find().sort({squareNumber: 1}).exec((error, square) => {
                    if(error) rejects(error);
                    else resolve(square);
                });
            });
        },

        //Get Square ID
        getSquare: (root, {id}) => {
            return new Promise((resolve, object) => {
                Square.findById(id, (error, square) => {
                    if(error) rejects(error);
                    else resolve(square);
                });
            });
        },

        //** TO DO Machine Quieries */
        getMachines: (root, {square}) => {
            return new Promise((resolve, object) => {
                Machine.find({square: square}, (error, machine) => {
                    if(error) rejects(error);
                    else resolve(machine);
                });
            });
        },

        //Get Machine ID
        getMachine: (root, {id}) => {
            return new Promise((resolve, object) => {
                Machine.findById(id, (error, machine) => {
                    if(error) rejects(error);
                    else resolve(machine);
                });
            });
        },

        //Get All Machines
        getAllMachines: (root) => {
            return new Promise((resolve, object) => {
                Machine.find().sort({machineNumber: 1}).exec((error, machine) => {
                    if(error) rejects(error);
                    else resolve(machine);
                });
            });
        },

        //** TO DO Product Queries */
        getProducts: (root, {machine}) => {
            return new Promise((resolve, object) => {
                Product.find({machine: machine}, (error, product) => {
                    if(error) rejects(error);
                    else resolve(product);
                });
            });
        },

        //Get Product ID
        getProduct: (root, {id}) => {
            return new Promise((resolve, object) => {
                Product.findById(id, (error, product) => {
                    if(error) rejects(error);
                    else resolve(product);
                });
            });
        },

        //Get All Products
        getAllProducts: (root) => {
            return new Promise((resolve, object) => {
                Product.find().sort({productName: 1}).exec((error, product) => {
                    if(error) rejects(error);
                    else resolve(product);
                });
            });
        },

        //Get All Operators
        getAllOperators: (root) => {
            return new Promise((resolve, object) => {
                Employee.find({position: "5e9a75649160cb04b41f2c6a"}).sort({payroll: 1}).exec((error, operators) => {
                    if(error) rejects(error);
                    else resolve(operators);
                });
            });
        },

        //** TO DO Year Queries */
        getAllYears: (root) => {
            return new Promise((resolve, object) => {
                Year.find({}).sort({year: 1}).exec((error, year) => {
                    if(error) rejects(error);
                    else resolve(year);
                });
            });
        },

        //Get Year ID
        getYear: (root, {id}) => {
            return new Promise((resolve, object) => {
                Year.findById(id, (error, year) => {
                    if(error) rejects(error);
                    else resolve(year);
                });
            });
        },

        //** TO DO Month Queries */
        getMonths: (root, {year}) => {
            return new Promise((resolve, object) => {
                Month.find({year: year}).sort({_id: 1}).exec((error, month) => {
                    if(error) rejects(error);
                    else resolve(month);
                });
            });
        },

        //Get Month ID
        getMonth: (root, {id}) => {
            return new Promise((resolve, object) => {
                Month.findById(id, (error, month) => {
                    if(error) rejects(error);
                    else resolve(month);
                });
            });
        },

        //** TO DO Week Queries */
        getWeeks: (root, {month}) => {
            return new Promise((resolve, object) => {
                Week.find({month: month}).sort({_id: 1}).exec((error, week) => {
                    if(error) rejects(error);
                    else resolve(week);
                });
            });
        },

        //Get Week ID
        getWeek: (root, {id}) => {
            return new Promise((resolve, object) => {
                Week.findById(id, (error, week) => {
                    if(error) rejects(error);
                    else resolve(week);
                });
            });
        },

        //** TO DO Day Queries */
        getDays: (root, {week}) => {
            return new Promise((resolve, object) => {
                Day.find({week: week}).sort({_id: 1}).exec((error, day) => {
                    if(error) rejects(error);
                    else resolve(day);
                });
            });
        },

        //Get Day ID
        getDay: (root, {id}) => {
            return new Promise((resolve, object) => {
                Day.findById(id, (error, day) => {
                    if(error) rejects(error);
                    else resolve(day);
                });
            });
        },

        //Get Operators from Department
        getOperators: (root, {department}) => {
            return new Promise((resolve, object) => {
                Employee.find({department: department}, (error, employee) => {
                    if(error) rejects(error);
                    else resolve(employee);
                });
            });
        },

        //** TO DO Mobility Queries */
        getMobilities: (root, {day}) => {
            return new Promise((resolve, object) => {
                Mobility.find({day: day}, (error, mobility) => {
                    if(error) rejects(error);
                    else resolve(mobility);
                });
            });
        },

        getMobility: (root, {id}) => {
            return new Promise((resolve, object) => {
                Mobility.findById(id, (error, mobility) => {
                    if(error) rejects(error);
                    else resolve(mobility);
                });
            });
        }

    },

    //Mutations
    Mutation: {

        /** TO DO Department Mutations */

        //Create Department
        createDepartment: (root, {input}) => {
            const newDepartment = new Department({
                departmentName: input.departmentName
            });
            newDepartment.id = newDepartment._id;

            return new Promise((resolve, object) => {
                newDepartment.save((error) => {
                    if(error) rejects(error);
                    else resolve(newDepartment);
                });
            });
        },

        //Update Department
        updateDepartment: (root, {input}) => {
            return new Promise((resolve, object) => {
                Department.findOneAndUpdate({_id: input.id}, input, { new: true }, (error, department) => {
                    if(error) rejects(error);
                    else resolve(department);
                });
            });
        },

        //Delete Department
        deleteDepartment: (root, {id}) => {
            return new Promise((resolve, object) => {
                Department.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error);
                    else resolve('Department deleted successfully');
                });
            });
        },

        //** TO DO Position Mutations */

        //Create Position
        createPosition: (root, {input}) => {
            const newPosition = new Position({
                positionName: input.positionName,
                typeWorker: input.typeWorker,
                costCenter: input.costCenter
            });
            newPosition.id = newPosition._id;

            return new Promise((resolve, objetc) => {
                newPosition.save((error) => {
                    if(error) rejects(error);
                    else resolve(newPosition);
                });
            });
        },

        //Update Position
        updatePosition: (root, {input}) => {
            return new Promise((resolve, object) => {
                Position.findOneAndUpdate({_id: input.id}, input, { new: true }, (error, position) => {
                    if(error) rejects(error);
                    else resolve(position);
                });
            });
        },

        //Delete Position
        deletePosition: (root, {id}) => {
            return new Promise((resolve, object) => {
                Position.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error);
                    else resolve('Position deleted successfully');
                });
            });
        },

        //** TO DO Employee Mutations */

        //Create Employee
        createEmployee: (root, {input}) => {
            const newEmployee = new Employee({
                payroll: input.payroll,
                name: input.name,
                surnameP: input.surnameP,
                surnameM: input.surnameM,
                department: input.department,
                position: input.position,
                email: input.email,
                password: input.password,
                machine: input.machine,
                birthday: input.birthday,
                register: new Date()
            });
            newEmployee.id = newEmployee._id;

            return new Promise((resolve, object) => {
                newEmployee.save((error) => {
                    if(error) rejects(error);
                    else resolve(newEmployee);
                });
            });
        },

        //Update Employee
        updateEmployee: (root, {input}) => {
            return new Promise((resolve, object) => {
                Employee.findOneAndUpdate({_id: input.id}, input, { new: true }, (error, employee) => {
                    if(error) rejects(error);
                    else resolve(employee);
                });
            });
        },

        //Delete Employee
        deleteEmployee: (root, {id}) => {
            return new Promise((resolve, object) => {
                Employee.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error);
                    else resolve("Employee deleted Successfully");
                });
            });
        },

        //** TO DO Square Mutations */
        createSquare: (root, {input}) => {
            const newSquare = new Square({
                squareNumber: input.squareNumber,
                department: input.department,
                register: new Date(),
                updated: new Date()
            });
            newSquare.id = newSquare._id;

            return new Promise((resolve, object) => {
                newSquare.save((error) => {
                    if(error) rejects(error);
                    else resolve(newSquare);
                });
            });
        },

        //Update Square
        updateSquare: (root, {input}) => {
            return new Promise((resolve, object) => {
                Square.findOneAndUpdate({_id: input.id}, {$currentDate: {updated: input.updated}}, { new: true }, (error) => {
                    if(error) rejects(error);
                    Square.findOneAndUpdate({_id: input.id}, input, { new: true }, (error, square) => {
                        if(error) rejects(error);
                        else resolve(square);
                    });
                });
            });
        },

        //Delete Square
        deleteSquare: (root, {id}) => {
            return new Promise((resolve, object) => {
                Square.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error);
                    else resolve('Square deleted Successfully');
                });
            });
        },

        //** TO DO Machine Mutations */
        createMachine: (root, {input}) => {
            const newMachine = new Machine({
                machineNumber: input.machineNumber,
                square: input.square,
                register: new Date(),
                updated: new Date()
            });
            newMachine.id = newMachine._id;

            return new Promise((resolve, object) => {
                newMachine.save((error) => {
                    if(error) rejects(error);
                    else resolve(newMachine);
                });
            });
        },

        //Update Machine
        updateMachine: (root, {input}) => {
            return new Promise((resolve, object) => {
                Machine.findOneAndUpdate({_id: input.id}, {$currentDate: {updated: input.updated}}, { new: true }, (error) => {
                    if(error) rejects(error);
                    Machine.findOneAndUpdate({_id: input.id}, input, { new: true }, (error, machine) => {
                        if(error) rejects(error);
                        else resolve(machine);
                    });
                });
            });
        },

        //Delete Machine
        deleteMachine: (root, {id}) => {
            return new Promise((resolve, object) => {
                Machine.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error);
                    else resolve('Machine deleted Successfully');
                });
            });
        },

        //** TO DO Product Mutations */
        createProduct: (root, {input}) => {
            const newProduct = new Product({
                productName: input.productName,
                partNumber: input.partNumber,
                machine: input.machine,
                register: new Date(),
                updated: new Date()
            });
            newProduct.id = newProduct._id;

            return new Promise((resolve, object) => {
                newProduct.save((error) => {
                    if(error) rejects(error);
                    else resolve(newProduct);
                });
            });
        },

        //Update Product
        updateProduct: (root, {input}) => {
            return new Promise((resolve, object) => {
                Product.findOneAndUpdate({_id: input.id}, {$currentDate: {updated: input.updated}}, { new: true }, (error) => {
                    if(error) rejects(error);
                    Product.findOneAndUpdate({_id: input.id}, input, { new: true }, (error, product) => {
                        if(error) rejects(error);
                        else resolve(product);
                    });
                });
            });
        },

        //Delete Product
        deleteProduct: (root, {id}) => {
            return new Promise((resolve, object) => {
                Product.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error);
                    else resolve('Product deleted Successfully');
                });
            });
        },

        //** TO DO Year Mutations */
        createYear: (root, {input}) => {
            const newYear = new Year({
                year: input.year
            });
            newYear.id = newYear._id;

            return new Promise((resolve, object) => {
                newYear.save((error) => {
                    if(error) rejects(error);
                    else resolve(newYear);
                });
            });
        },

        //** TO DO Month Mutations */
        createMonth: (root, {input}) => {
            const newMonth = new Month({
                month: input.month,
                year: input.year
            });
            newMonth.id = newMonth._id;

            return new Promise((resolve, object) => {
                newMonth.save((error) => {
                    if(error) rejects(error);
                    else resolve(newMonth);
                });
            });
        },

        //** TO DO Week Mutations */
        createWeek: (root, {input}) => {
            const newWeek = new Week({
                week: input.week,
                month: input.month
            });
            newWeek.id = newWeek._id;

            return new Promise((resolve, object) => {
                newWeek.save((error) => {
                    if(error) rejects(error);
                    else resolve(newWeek);
                });
            });
        },

        //** TO DO Day Mutations */
        createDay: (root, {input}) => {
            const newDay = new Day({
                dayNumber: input.dayNumber,
                dayName: input.dayName,
                week: input.week
            });
            newDay.id = newDay._id;

            return new Promise((resolve, object) => {
                newDay.save((error) => {
                    if(error) rejects(error);
                    else resolve(newDay);
                });
            });
        },

        //** TO DO Mobility Mutations */
        createMobility: (root, {input}) => {
            const newMobility = new Mobility({
                department: input.department,
                day: input.day,
                squares: input.squares,
                machines: input.machines,
                operators: input.operators,
                products: input.products,
                indicators: input.indicators,
                observations: input.observations,
                register: new Date()
            });
            newMobility.id = newMobility._id;

            return new Promise((resolve, object) => {
                newMobility.save((error) => {
                    if(error) rejects(error);
                    else resolve(newMobility);
                });
            });
        },

        //Update Mobility
        updateMobility: (root, {input}) => {
            return new Promise((resolve, object) => {
                Mobility.findOneAndUpdate({_id: input.id}, {$push: {squares: input.squares}}, { new: true }, (error) => {
                    if(error) rejects(error);
                    Mobility.findOneAndUpdate({_id: input.id}, {$push: {machines: input.machines}}, { new: true}, (error) => {
                        if(error) rejects(error);
                        Mobility.findOneAndUpdate({_id: input.id}, {$push: {operators: input.operators}}, { new: true }, (error) => {
                            if(error) rejects(error);
                            Mobility.findOneAndUpdate({_id: input.id}, {$push: {products: input.products}}, { new: true }, (error) => {
                                if(error) rejects(error);
                                Mobility.findOneAndUpdate({_id: input.id}, {$push: {indicators: input.indicators}}, { new: true }, (error) => {
                                    if(error) rejects(error);
                                    Mobility.findOneAndUpdate({_id: input.id}, {$push: {observations: input.observations}}, { new: true }, (error) => {
                                        if(error) rejects(error);
                                        Mobility.findById({_id: input.id}, input, { new: true }, (error, mobility) => {
                                            if(error) rejects(error);
                                            else resolve(mobility);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    }
}