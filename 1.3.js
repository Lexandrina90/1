function matrix(size) {
    let result = new Array(size).fill().map(() => new Array(size).fill('')); // создаем пустой массив n x n 
    let counter = 1;
    let startCol = 0;
    let endCol = size - 1;
    let startRow = 0;
    let endRow = size - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return result;

}

console.log(matrix(3));