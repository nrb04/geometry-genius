
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "blog.html"
})

let serial = 0;


document.getElementById('btn-triangle').addEventListener('click', function(){
     serial += 1;
    const nameTriangle = document.getElementById('name-triangle').innerText;
    const triangleB = document.getElementById('input-b-triangle').value;
    const triangleH = document.getElementById('input-h-triangle').value;
    getSetElement('triangle-b-inner', 'triangle-h-inner', triangleB, triangleH);
    const total = 0.5 * parseFloat(triangleB) * parseFloat(triangleH);
    addInnerElement(serial, nameTriangle, total);
    
});

document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const nameRectangle = document.getElementById('name-rectangle').innerText;
    const rectangleW = document.getElementById('input-w-rectangle').value;
    const rectangleI = document.getElementById('input-i-rectangle').value; 
getSetElement('rectangle-w-inner', 'rectangle-i-inner', rectangleW, rectangleI)
    const total = parseFloat(rectangleW) * parseFloat(rectangleI);
    addInnerElement(serial, nameRectangle, total);
   
});

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial += 1;
    const nameParallelogram = document.getElementById('name-parallelogram').innerText;
    const parallelogramB = document.getElementById('parallelogram-b').innerText;
    const parallelogramH = document.getElementById('parallelogram-h').innerText;
    getSetElement('parallelogram-b-inner', 'parallelogram-h-inner', parallelogramB, parallelogramH);
    const total = parseFloat(parallelogramB )* parseFloat(parallelogramH);
    addInnerElement(serial, nameParallelogram, total);

});

document.getElementById('btn-rhombus').addEventListener('click', function(){
     serial += 1;
    const nameRhombus = document.getElementById('name-rhombus').innerText;
    const rhombusD1 = document.getElementById('rhombus-d1').innerText;
    const rhombusD2 = document.getElementById('rhombus-d2').innerText;
    getSetElement('rhombus-d1-inner', 'rhombus-d2-inner', rhombusD1, rhombusD2);
    const total = 0.5 * parseFloat(rhombusD1) * parseFloat(rhombusD2);
    addInnerElement(serial, nameRhombus, total);
});

document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    const namePentagon = document.getElementById('name-pentagon').innerText;
    const pentagonP = document.getElementById('pentagon-p').innerText;
    const pentagonB = document.getElementById('pentagon-b').innerText;
    getSetElement('pentagon-p-inner', 'pentagon-b-inner', pentagonP, pentagonB);
    const total = 0.5 * parseFloat(pentagonP) * parseFloat(pentagonB);
    addInnerElement(serial, namePentagon, total);
});

document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    const nameEllipse = document.getElementById('name-ellipse').innerText;
    const ellipseA = document.getElementById('ellipse-a').innerText;
    const ellipseB = document.getElementById('ellipse-b').innerText;
    getSetElement('ellipse-a-inner', 'ellipse-b-inner', ellipseA, ellipseB);
    const total = (Math.PI).toFixed(2) * parseFloat(ellipseA) * parseFloat(ellipseB);
    const newTotal = total.toFixed(2);
    addInnerElement(serial, nameEllipse, newTotal);
})


function getSetElement(getField1, getField2, setField1,setField2){
    const getFieldBInner = document.getElementById(getField1);
    const getFieldHInner= document.getElementById(getField2);
    getFieldBInner.innerText = setField1;
    getFieldHInner.innerText = setField2;
}

function addInnerElement(number, name, total){
    const container = document.getElementById('table-container');
    
    const tr = document.createElement('tr');
    const btn = document.createElement('button');
    btn.innerHTML = "convert to m<sup>2</sup>";
    btn.setAttribute('style', 'background-color: skyblue; color: white; border-radius: 4px; padding-top:2px; padding-bottom:2px');

    tr.innerHTML = `
     <td>${number}</td>
    <td>${name}</td>
    <td>${total}cm<sup>2</sup></td>
     `;
    container.appendChild(tr);
    tr.appendChild(btn);
};

