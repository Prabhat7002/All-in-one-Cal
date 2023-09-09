const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.set('view engine', 'ejs');
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public/geometric-calculators"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/team', (req, res) => {
    res.render('team')
})


// ------------- Geometric Calculators------------
app.get("/2D-distance", (req, res) => {
    res.render('geometric_Calculators/2D-Dist')
})
app.get("/3D-distance", (req, res) => {
    res.render('geometric_Calculators/3D-Dist')
})
app.get("/equilateral-triangle", (req, res) => {
    res.render('geometric_Calculators/triangleEqi')
})
app.get("/isosceles-triangle", (req, res) => {
    res.render('geometric_Calculators/triangleISO')
})
app.get("/right-angled-triangle", (req, res) => {
    res.render('geometric_Calculators/triangleRT')
})
app.get("/cube", (req, res) => {
    res.render('geometric_Calculators/cube')
})
app.get("/circle", (req, res) => {
    res.render('geometric_Calculators/circle')
})
app.get("/cylinder", (req, res) => {
    res.render('geometric_Calculators/cylinder')
})
app.get("/cone", (req, res) => {
    res.render('geometric_Calculators/cone')
})
app.get("/rectangle", (req, res) => {
    res.render('geometric_Calculators/rectangle')
})
app.get("/sphere", (req, res) => {
    res.render('geometric_Calculators/sphere')
})
app.get("/square", (req, res) => {
    res.render('geometric_Calculators/square')
})


// ------------- Health Calculators------------
app.get("/health-calculator", (req, res) => {
    res.render('health_and_fitness_Calc/health_cal')
})
app.get("/bmr", (req, res) => {
    res.render('health_and_fitness_Calc/bmr')
})
app.get("/ideal-weight", (req, res) => {
    res.render('health_and_fitness_Calc/idealWeight')
})
app.get("/calorie", (req, res) => {
    res.render('health_and_fitness_Calc/calorie')
})
app.get("/body-fat", (req, res) => {
    res.render('health_and_fitness_Calc/bodyfat')
})


// ------------- Financial Calculators------------
app.get("/simple-interest", (req, res) => {
    res.render('financial_calculators/simple-interest')
})
app.get("/compound-interest", (req, res) => {
    res.render('financial_calculators/comp-interest')
})
app.get("/currency-calculator", (req, res) => {
    res.render('financial_calculators/currency-calc')
})
app.get("/investment-calculator", (req, res) => {
    res.render('financial_calculators/investment-calc')
})
app.get("/loan-calculator", (req, res) => {
    res.render('financial_calculators/loan-calc')
})
app.get("/retirement-calculator", (req, res) => {
    res.render('financial_calculators/retirement-calc')
})
app.get("/salary-calculator", (req, res) => {
    res.render('financial_calculators/salary-calc')
})
app.get("/sales-and-tax", (req, res) => {
    res.render('financial_calculators/sales-tax-calc')
})


// ------------- Math and algebra Calculators------------
app.get("/math-and-algebra", (req, res) => {
    res.render('math_and_algebra_Calc/algebra')
})


// ------------- conversion Calculators------------
app.get("/conversion-calculator", (req, res) => {
    res.render('conversion_Calculators/Conversionindex')
})


// ------------- scientific Calculators------------
app.get("/scientific-calculator", (req, res) => {
    res.render('scientific_Calculator/scientificCalc.ejs')
})




app.listen(port, () => {
    console.log(`The server started at ${port}`);
})
