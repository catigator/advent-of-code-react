from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)
import re
import functools


INPUT_FILENAME = "aoc/day_01/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_01/EXAMPLE_01.txt"
EXAMPLE_FILENAME_2 = "aoc/day_01/EXAMPLE_02.txt"

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
    print(f"The sum of all of the calibration values is {sum(sums)}")


DIGITS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
]

DIGITS_TO_INT = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "ten": "10",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
}


def regex_sort_attribute(item):
    return item.regs[0]

def compare_regex_match_start_positions(item1, item2):
    return item1.regs[0] < item2.regs[0]


def get_first_and_last_digits_as_int(digits: list):
    number = int(DIGITS_TO_INT[digits[0].re.pattern] + DIGITS_TO_INT[digits[-1].re.pattern])
    return number


def get_sorted_digits_from_line(line) -> list:
    found_all = []
    for digit in DIGITS:
        found = list(re.finditer(digit, line))
        if found is not None:
            # found.sort(key=functools.cmp_to_key(compare_regex_match_start_positions))
            if len(found) > 0:
                found_all.extend(found)
    found_all.sort(key=regex_sort_attribute)
    return found_all


@time_it
def solve_part_2():
    print("Day 01 - Part 2")
    lines = read_input_lines(INPUT_FILENAME)
    sums = []
    for line in lines:
        digits = get_sorted_digits_from_line(line)
        int_to_add = get_first_and_last_digits_as_int(digits)
        sums.append(int_to_add)
    print(f"The sum of all calibration values is {sum(sums)}")


if __name__ == "__main__":
    solve_part_1()
    solve_part_2()