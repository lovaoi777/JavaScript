# Balanced Brackets

**Utilize the Stack ADT developed in class to solve this problem.**  
In case that your program have memory leaks, points will be deducted for each memory leak.

Given the user types a string **s** containing characters '(', ')', '{', '}', '[' and ']' and with a with a max length of 20 characters, determine if the input string is valid, and print the result on the screen.

An input string is valid if:

**1.-** Open brackets must be closed by the same type of brackets.  
 **2.-** Open brackets must be closed in the correct order.

Here is an example of an execution of the program:

**Example 1:**

    Enter a string: {([])}
    Valid String

**Example 2:**

    Enter a string: {)[](}
    Invalid String

**Example 3:**

    Enter a string: while(x<10){x++}
    Valid String

**Example 4:**

    Enter a string: if(i==5}{[]}
    Invalid String
