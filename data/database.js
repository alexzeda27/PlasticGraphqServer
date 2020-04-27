import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/plastic-graphql', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false  
    }
);


//** TO DO Schemas */

//Department Model Database
const departmentSchema = new mongoose.Schema({
    departmentName: String,
});

const Department = mongoose.model('departments', departmentSchema);

//Position Model Database
const positionSchema = new mongoose.Schema({
    positionName: String,
    typeWorker: String,
    costCenter: String
});

const Position = mongoose.model('positions', positionSchema);

//Employee Model Database
const employeeSchema = new mongoose.Schema({
    payroll: Number,
    name: String,
    surnameP: String,
    surnameM: String,
    department: String,
    position: String,
    email: String,
    password: String, 
    machine: String,  
    birthday: Date,
    register: Date
});

const Employee = mongoose.model('employees', employeeSchema);

//Square Model Database
const squareSchema = new mongoose.Schema({
    squareNumber: Number,
    department: String,
    register: Date,
    updated: Date
});

const Square = mongoose.model('squares', squareSchema);

//Machine Model Database
const machineSchema = new mongoose.Schema({
    machineNumber: String,
    square: String,
    register: Date,
    updated: Date
});

const Machine = mongoose.model('machines', machineSchema);

//Product Model Database
const productSchema = new mongoose.Schema({
    productName: String,
    partNumber: String,
    machine: String,
    register: Date,
    updated: Date
});

const Product = mongoose.model('products', productSchema);

//Mobility Year Database
const yearSchema = new mongoose.Schema({
    year: Number
});

const Year = mongoose.model('years', yearSchema);

//Mobility Month Database
const monthSchema = new mongoose.Schema({
    month: String,
    year: String
});

const Month = mongoose.model('months', monthSchema);

//Mobility Week Database
const weekSchema = new mongoose.Schema({
    week: Number,
    month: String
});

const Week = mongoose.model('weeks', weekSchema);

//Mobility Day Database
const daySchema = new mongoose.Schema({
    dayNumber: Number,
    dayName: String,
    week: String
});

const Day = mongoose.model('days', daySchema);

//Mobility Database
const mobilitySchema = new mongoose.Schema({
    department: String,
    day: String,
    squares: Array,
    machines: Array,
    operators: Array,
    products: Array,
    indicators: Array,
    observations: Array,
    register: Date
});

const Mobility = mongoose.model('mobilities', mobilitySchema)

export { Department, Position, Employee, Square, Machine, Product, Year, Month, Week, Day, Mobility };