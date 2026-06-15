function randomInt(max) {
    return Math.floor(Math.random() * max);
}

const content = document.getElementById("content");

const per_row = 9;
const per_col = 9;

const cell_classes = [
    "rb-border-cell",
    "lb-border-cell",
    "lrb-border-cell",
    "rt-border-cell",
    "lt-border-cell",
    "lrt-border-cell",
    "rtb-border-cell",
    "ltb-border-cell",
    "lrtb-border-cell"
]

let cell_class_index = 0;
let html = "";
for (let i = 0; i < per_row * per_col; i++) {
    if      (
        i ===  5 || i ===  9 || i === 14 || i === 18 || i === 23 ||
        i === 45 || i === 50
    ) cell_class_index = 0
    else if (
        i ===  3 || i ===  6 || i === 12 || i === 15 || i === 21 ||
        i === 24 || i === 48 || i === 51
    ) cell_class_index = 1;
    else if (
        i ===  4 || i === 13 || i === 22 || i === 49
    ) cell_class_index = 2;
    else if (
        i === 27 || i === 32 || i === 54 || i === 59 || i === 63 ||
        i === 68 || i === 72 || i === 77
    ) cell_class_index = 3
    else if (
        i === 30 || i === 33 || i === 57 || i === 60 || i === 66 ||
        i === 69 || i === 75 || i === 78
    ) cell_class_index = 4
    else if (
        i === 31 || i === 58 || i === 67 || i === 76
    ) cell_class_index = 5
    else if (
        i === 36 || i === 41
    ) cell_class_index = 6
    else if (
        i === 39 || i === 42
    ) cell_class_index = 7
    else if (
        i === 40
    ) cell_class_index = 8

    html += `<div class=${cell_classes.at(cell_class_index)}>${randomInt(9)}</div>`;
}
content.innerHTML = `
    <div class="three-cols">
        <div></div>
        <div class="grid">
            ${html}
        </div>
        <div></div>
    </div>
`;