const calculatetemp = () => {

    const numbertemp = document.getElementById('temp').value;

    const tempselected = document.getElementById('temp_type');
    const valuetemp = temp_type.options[tempselected.selectedIndex].value;

    const celtofah = (cel) => {
        let Fahrenheit = Math.round((cel * 9/5) + 32);
        return Fahrenheit;
    }
    const fahtocel = (fah) => {
        let celsius = Math.round ((fah - 32) * 5/9);
        return celsius;
    }

    let result;

    if(valuetemp == 'cel'){
        result = celtofah(numbertemp);
        document.getElementById('resultcontainer').innerHTML= ` Result = ${result}  °Fahrenheit`;
    }else{
        result = fahtocel(numbertemp);
        document.getElementById('resultcontainer').innerHTML= ` Result = ${result}  °Celsius`;
    }
}