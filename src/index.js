// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    else
        return matrix.reduce((arr, current, index) => {
            return ((index + 1) % 2 == 0) ? arr.concat(current.reverse()) : arr.concat(current)
        }, [])
}