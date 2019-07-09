class Grid {
    static origin = {x: 0, y: 0}
    scale: number
    constructor(scale: number) {
        this.scale = scale
    }

    claculateDistanceFromOrigin(point:{x:number;y:number}) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist+ yDist * yDist)*this.scale;
    }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.claculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.claculateDistanceFromOrigin({x:3,y:4}));


