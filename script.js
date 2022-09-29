import data from './cost-calculator/spot.json' assert { type: "json" };

let dropDown = document.getElementById('instanceType');
let workerNodeInstanceType = document.getElementById('workerNode')


function masterNode() {
    data.forEach((instType) => {
        let option = document.createElement('option');
        option.value = instType.size;
        option.textContent = instType.size;
        dropDown.appendChild(option);
    })
}

function workerNode() {
    data.forEach((instType) => {
        let option = document.createElement('option');
        option.value = instType.size;
        option.textContent = instType.size;
        workerNodeInstanceType.appendChild(option);

    })
}

masterNode()
workerNode()