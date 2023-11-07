function renShaCol(shapeCol){
    return shapeCol
}

function renSha(shape){
    if (shape === "Circle"){
        return `circle cx="150" cy="100" r="80"`
    }
    else if (shape === "Triangle"){
        return `polygon points="150, 18 244, 182 56, 182"`
    }
    else if (shape === "Square"){
        return `rect x="75" y="25" width="150" height="150"`
    }
}

function renTexCol(textCol){
    return `${textCol}`
}

function genLog(data) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${renSha(data.sha)} fill="${renShaCol(data.shaCol)}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${renTexCol(data.texCol)}">${data.tex}</text>

</svg>
    `
}

module.exports = genLog;