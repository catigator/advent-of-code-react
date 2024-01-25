from typing import List

from utils.decorators import time_it
from utils.helper_functions import (
    read_input,
    read_input_lines,
    read_input_int,
    read_input_int_individuals,
    read_input_int_matrix
)
import math


INPUT_FILENAME = "aoc/day_06/INPUT.txt"
EXAMPLE_FILENAME = "aoc/day_06/EXAMPLE_01.txt"

DISTANCES = {}


def parse_lines(lines: List[str]):
    line_1 = lines[0]
    line_2 = lines[1]

    times = line_1.split("Time:")[1].strip().split()
    times = [int(time) for time in times]

    distances = line_2.split("Distance:")[1].strip().split()
    distances = [int(distance) for distance in distances]

    return times, distances


def get_speed(hold_time: int):
    return hold_time


def get_distance(speed: int, time: int):
    return speed * time


def get_distance_for_hold_time(hold_time: int, total_time: int):

    remaining_time = total_time - hold_time
    return remaining_time * hold_time

    speed = get_speed(hold_time)

    distance = get_distance(speed, remaining_time)
    return distance


def calculate_highest(time, record_distance):
    ways_to_beat_record = 0
    for hold_time in range(time + 1):
        # if hold_time % 10000 == 0:
        #     print(".")

        distance = get_distance_for_hold_time(hold_time, time)
        if distance > record_distance:
            ways_to_beat_record += 1

    return ways_to_beat_record


def calculate_highest_for_all_times(times, distances):

    ways_to_beat_records = []

    for i_time, time in enumerate(times):
        record_distance = distances[i_time]
        ways_to_beat_record = calculate_highest(time, record_distance)
        ways_to_beat_records.append(ways_to_beat_record)

    print(f"The multiplied number of ways to beat the records is {math.prod(ways_to_beat_records)}")





@time_it
def solve_part_1():
    print("Day 06 - Part 1")
    lines = read_input_lines(EXAMPLE_FILENAME)
    times, distances = parse_lines(lines)
    calculate_highest_for_all_times(times, distances)


@time_it
def solve_part_2():
    print("Day 06 - Part 2")
    lines = read_input_lines(INPUT_FILENAME)
    times, distances = parse_lines(lines)

    time_str = ""
    for t in times:
        time_str += str(t)
    time = int(time_str)

    distance_str = ""
    for d in distances:
        distance_str += str(d)
    distance = int(distance_str)

    ways_to_beat_record = calculate_highest(time, distance)
    print(f"There are {ways_to_beat_record} ways to beat the record")


if __name__ == "__main__":
    # solve_part_1()
    solve_part_2()