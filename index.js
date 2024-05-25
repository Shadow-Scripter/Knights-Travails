function knightMoves(start, end) {
    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];

        if (x === end[0] && y === end[1]) {
            return path;
        }

        for (const [dx, dy] of moves) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                const newPosition = [newX, newY];
                if (!visited.has(newPosition)) {
                    visited.add(newPosition);
                    queue.push([...path, newPosition]);
                }
            }
        }
    }

    // If no path is found
    return null;
}

// Example usage:
console.log(knightMoves([0,0],[1,2])); // Output: [[0,0],[1,2]]
console.log(knightMoves([0,0],[3,3])); // Output: [[0,0],[2,1],[3,3]]
console.log(knightMoves([3,3],[0,0])); // Output: [[3,3],[1,2],[0,0]]
console.log(knightMoves([0,0],[7,7])); // Output: [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
