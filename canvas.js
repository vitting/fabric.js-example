function drawLineInCircle(circle, angle, color) {
    let radians = fabric.util.degreesToRadians(angle);
    let cx = circle.getPointByOrigin().x + circle.radius * fabric.util.cos(radians);
    let cy = circle.getPointByOrigin().y + circle.radius * fabric.util.sin(radians);

    let angleOp = 180 + angle; 
    let radiansOp = fabric.util.degreesToRadians(angleOp);
    let cxOp = circle.getPointByOrigin().x + circle.radius * fabric.util.cos(radiansOp);
    let cyOp = circle.getPointByOrigin().y + circle.radius * fabric.util.sin(radiansOp);

    let line = new fabric.Line([cx, cy, cxOp, cyOp], {
        stroke: color,
        strokeWidth: 1,
        fill: color,
    });

    return line;
}

function drawCircle(radius, strokeWidth, strokeColor, bgColor) {
    let circle = new fabric.Circle({
        radius: radius,
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        fill: bgColor,
        left: 0, 
        top: 0
    });

    return circle;
}

function drawMonth(monthname, left, top, angle) {
    let month = new fabric.Text(monthname, {
        left: left,
        top: top,
        angle: angle,
        fontSize: 25,
        fill: "white" ,
        fontFamily: "Arial"
    });

    return month;
}

export function draw() {
    document.addEventListener("DOMContentLoaded", function (event) {
        let canvas = new fabric.StaticCanvas('ac');

        let circle = drawCircle(390, 1, "#0dffeb", "#0dffeb");
        let circleCenter = drawCircle(10, 1, "darkgreen", "darkgreen");
        canvas.add(circle, circleCenter);
        circle.center();
        circleCenter.center();
        

        let line30 = drawLineInCircle(circle, 30, "white");
        let line60 = drawLineInCircle(circle, 60, "white");
        let line90 = drawLineInCircle(circle, 90, "white");
        let line120 = drawLineInCircle(circle, 120, "white");
        let line150 = drawLineInCircle(circle, 150, "white");
        let line180 = drawLineInCircle(circle, 180, "white");
        canvas.add(line30);
        canvas.add(line60);
        canvas.add(line90);
        canvas.add(line120);
        canvas.add(line150);
        canvas.add(line180);

        let circleBorder = drawCircle(380, 40, "#f833ff");
        
        canvas.add(circleBorder);
        circleBorder.center();
        console.log(line90);
        let january = drawMonth("Januar", line90.x2 + 60, line90.y2, 14);
        let february = drawMonth("Februar", line120.x2 + 60, line120.y2 + 35, 47);
        let march = drawMonth("Marts", line150.x2 + 35, line150.y2 + 60, 75);
        let april = drawMonth("April", line180.x2, line180.y2 + 70, 105);
        let may = drawMonth("May", line30.x1 - 40, line30.y1 + 60, 128);
        let june = drawMonth("Juni", line60.x1 - 70, line60.y1 + 35, 165);
        let july = drawMonth("Juli", line90.x1 - 40, line90.y1, 190);
        let august = drawMonth("August", line120.x1, line120.y1, 190);
        let september = drawMonth("September", line150.x1, line150.y1, 190);
        let october = drawMonth("Oktober", line180.x1, line180.y1, 190);
        let november = drawMonth("November", line30.x2, line30.y2, 190);
        let december = drawMonth("December", line60.x2, line60.y2, 190);
        
        canvas.add(january);
        canvas.add(february);
        canvas.add(march);
        canvas.add(april);
        canvas.add(may);
        canvas.add(june);
        canvas.add(july);
        canvas.add(august);
        canvas.add(september);
        canvas.add(october);
        canvas.add(november);
        canvas.add(december);
    });
}
