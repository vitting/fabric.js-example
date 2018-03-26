export function test() {
    document.addEventListener("DOMContentLoaded", function (event) {
        var canvas = new fabric.StaticCanvas('ac');
        var circle = new fabric.Circle({
            radius: 390,
            stroke: 'green',
            strokeWidth: 1,
            fill: "white",
            left: 0, 
            top: 0
        });

        var circleCenter = new fabric.Circle({
            radius: 10,
            stroke: "green",
            strokeWidth: 1,
            fill: "green",
            // left: x, 
            // top: y
        });

        canvas.add(circle, circleCenter);

        circle.center();
        circleCenter.center();
        // circle.calCords();
        let x = circle.width / 2;
        let y = circle.height / 2;
    
        let line = new fabric.Line([x, circle.top, x, y], {
            stroke: "green",
            strokeWidth: 1,
            fill: "green",
            // angle: 0
        });

        let angle = fabric.util.degreesToRadians(360);
        let cx = circle.getPointByOrigin().x + circle.radius * fabric.util.cos(angle);
        let cy = circle.getPointByOrigin().y + circle.radius * fabric.util.sin(angle);
        console.log(cx, cy);
        

        let line2 = new fabric.Line([cx, cy, circle.getCenterPoint().x, circle.getCenterPoint().y], {
            stroke: "green",
            strokeWidth: 1,
            fill: "green",
            // angle: 0
        });
        
        // canvas.add(line);
        canvas.add(line2);
        // line.centerH();
        // line.rotate(90);
        
    });
}
