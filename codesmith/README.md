Instructions from your teacher:
Even while staying home, it's important to keep a balanced routine of fun and healthy activities! Write a function quarantineSchedule that receives as input parameter a string, and produces outputs according to the following table:
_______________________________
| Day                       | Activity              |
| "Monday"             | "Read"                |
| "Wednesday"        | "Puzzles"            |
| "Friday"                | "Netflix"             |
| "Sunday"               | "Exercise"          |
| *anything else*     | "Code"               |
----------------------------------------------
Note: *anything else* is the default case- if the input to the function is not any of the values in the table, then the return value should be "Code"

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, quarantineSchedule("mOnDaY") should still return "Read"