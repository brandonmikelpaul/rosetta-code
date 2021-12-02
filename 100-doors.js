/**
 * Rosetta Code - 100 Doors
 * See: https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors
 *
 *
 * There are 100 doors in a row that are all initially closed.
 * You make 100 passes by the doors.
 *
 * The first time through, visit every door and 'toggle' the door
 * (if the door is closed, open it; if it is open, close it).
 *
 * The second time, only visit every 2nd door
 * (i.e., door #2, #4, #6, ...) and toggle it.
 *
 * The third time, visit every 3rd door (i.e., door #3, #6, #9, ...),
 * etc., until you only visit the 100th door.
 *
 * Implement a function to determine the state of the doors after the last pass.
 * Return the final result in an array, with only the door
 * number included in the array if it is open.
 */

/**
 * My plan:
 * Create an array length 100 to represent the doors, false = closed, true = open
 * Run for loop 100 times, using i to keep track of iteration number
 * Toggle state if door # (index+1) is divisible by i
 * Use array.map to convert open doors (true) to their door # (index+1)
 * Filter out non-numbers
 */

function getFinalOpenedDoors(numDoors) {
  let arr = new Array(100).fill(false);

  for (let i = 1; i <= 100; i++) {
    arr = arr.map((door, index) => ((index + 1) % i === 0 ? !door : door));
  }

  return arr
    .map((door, index) => (door === true ? index + 1 : door))
    .filter((door) => typeof door === "number");
}
