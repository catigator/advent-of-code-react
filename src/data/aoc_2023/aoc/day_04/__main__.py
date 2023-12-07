from typing import List

from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)


INPUT_FILENAME = "aoc/day_04/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_04/EXAMPLE_01.txt"


def get_matching_points(matching):
    if matching > 0:
        return 2 ** (matching - 1)
    else:
        return 0


def matching_numbers(winning: List[int], my: List[int]):
    matching = set(winning).intersection(my)
    return len(matching)


@time_it
def solve_part_1():
    print("Day 04 - Part 1")
    lines = read_input_lines(INPUT_FILENAME)
    total_points = []
    for line in lines:
        split_line = line.split(": ")
        card_nbr = int(split_line[0][4:])
        winning_numbers, my_numbers = split_line[1].split("| ")
        winning_numbers = winning_numbers.strip().split()
        my_numbers = my_numbers.strip().split()

        matching = matching_numbers(winning_numbers, my_numbers)
        points = get_matching_points(matching)
        # print(f"{points=}")
        total_points.append(points)

    print(f"The cards are worth {sum(total_points)} points")




@time_it
def solve_part_2():
    print("Day 04 - Part 2")


if __name__ == "__main__":
    solve_part_1()
    # solve_part_2()