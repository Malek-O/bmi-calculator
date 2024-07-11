import { bmiType } from "../types/type.t";

function caclBmiImperical(feet: number, inches: number, stones: number, pounds: number) {
    let _height = convertToCentimeters(feet, inches);
    let _weight = convertToKilograms(stones, pounds);
    console.log({ _height, _weight });

    const total = _weight / (_height * _height);
    const _bmi = bmi(total, _height);
    return _bmi
}

function caclBmiMetric(height: number, weight: number) {
    let _height = height / 100;
    let _weight = weight;
    console.log({ _height, _weight });
    const total = _weight / (_height * _height);
    const _bmi = bmi(total, _height);
    return _bmi
}



function bmi(bmi: number, height: number): bmiType {
    let classification;
    if (bmi < 18.5) {
        classification = "Your BMI suggests you’re Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = "Your BMI suggests you’re a healthy weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = "Your BMI suggests you’re Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
        classification = "Your BMI suggests you’re Obese of (Class 1)";
    } else if (bmi >= 35 && bmi < 39.9) {
        classification = "Your BMI suggests you’re Obese of (Class 2)";
    } else {
        classification = "Your BMI suggests you’re Obese of (Class 3)";
    }

    const idealWeightMin = 18.5 * height * height;
    const idealWeightMax = 24.9 * height * height;

    return {
        bmi: Number(bmi.toFixed(2)),
        classification: classification,
        idealWeightMin: idealWeightMin.toFixed(1),
        idealWeightMax: idealWeightMax.toFixed(1),
        idealStoneAndPound: `Your ideal weight is between ${convertToStonesAndPounds(Number(idealWeightMin.toFixed(1))).stones}st ${convertToStonesAndPounds(Number(idealWeightMin.toFixed(1))).pounds}lbs - ${convertToStonesAndPounds(Number(idealWeightMin.toFixed(1))).stones}st ${convertToStonesAndPounds(Number(idealWeightMax.toFixed(1))).stones}st ${convertToStonesAndPounds(Number(idealWeightMax.toFixed(1))).pounds}lbs.`,
        idealKg: `Your ideal weight is between ${idealWeightMin.toFixed(1)}kg - ${idealWeightMax.toFixed(1)}kg .`,
        minStone: convertToStonesAndPounds(Number(idealWeightMin.toFixed(1))).stones,
        maxStone: convertToStonesAndPounds(Number(idealWeightMax.toFixed(1))).stones,
        minPound: convertToStonesAndPounds(Number(idealWeightMin.toFixed(1))).pounds,
        maxPound: convertToStonesAndPounds(Number(idealWeightMax.toFixed(1))).pounds,
    };
}


function convertToStonesAndPounds(kg: number) {
    const kgToPounds = 0.453592;

    let totalPounds = kg / kgToPounds;  // Convert kg to total pounds
    let stones = Math.floor(totalPounds / 14);  // Calculate stones
    let pounds = totalPounds % 14;  // Calculate remaining pounds

    return {
        stones: stones,
        pounds: pounds.toFixed()
    };
}

function convertToKilograms(stones: number, pounds: number) {
    const STONE_TO_KG = 6.35029;
    const POUND_TO_KG = 0.453592;

    let totalKilograms = (stones * STONE_TO_KG) + (pounds * POUND_TO_KG);
    return Number(totalKilograms.toFixed());
}
function convertToCentimeters(feet: number, inches: number) {
    const FOOT_TO_CM = 30.48;
    const INCH_TO_CM = 2.54;

    let totalCentimeters = (feet * FOOT_TO_CM) + (inches * INCH_TO_CM);
    return Number(totalCentimeters.toFixed()) / 100;
}


export { caclBmiImperical, caclBmiMetric }