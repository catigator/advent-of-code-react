from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)


INPUT_FILENAME = "aoc/day_01/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_01/EXAMPLE_01.txt"


@time_it
def solve_part_1():
    print("Day 01 - Part 1")
    lines = read_input_lines(INPUT_FILENAME)
    sums = []
    for line in lines:
        number_chars = [c for c in line if c.isnumeric()]
        number_string = number_chars[0] + number_chars[-1]
        number = int(number_string)
        sums.append(number)
    print(sum(sums))


@time_it
def solve_part_2():
    print("Day 01 - Part 2")


if __name__ == "__main__":
    solve_part_1()
    # solve_part_2()