### What you should know before coding interview?

Make sure you know Computer science [basic data structures](#data-structures-you-should-know). Also you should be aware of [fundamental algorithms](#fundamental-algorithms-you-should-know).

### Ask Questions before coding

Once they give you problem, don't start coding. Ask clarifying questions to make sure you understand the problem.

Example:

- Will there be null/empty values on input?
- Will all numbers in a binary tree integers?
-

## What you should prepare?

### Big O

Learn Big O. Make sure you give what would be the `runtime complexity` and `memory complexity`.

`Iterative functions` take no extra memory and therefore, `memory complexity` is `constant` O(1).

`Recursive functions` take extra on the stack therefore, `memory complexity` is `lograrithmic` O(_logn_)

### Data Structures you should know

- Hash Table
- Linked List
- Stack
- Queue
- Tree
- Tries
- Graphs
- Vectors
- Heaps

### Fundamental algorithms you should know

- Breadth-first search
- Depth-first search
- Merge sort

## Working with this repo

Download or clone in local machine. Then run individual file in node console to see the results.

## Arrays

### Implement Binary Search on a Sorted Array

Given a sorted array of integers, return the index of the given key. Return -1 if the key is not found.

Run below script

```
node .\src\arrays\binary-search.js
```

### Find Maximum in Sliding Window

Given a large array of integers and a window of size w, find the current maximum value in the window as the window slides through the entire array.

## Math & Stats

### Integer Division Without Using \* or /

Divide two integers without using '/' (division) or '\*' (multiplication) operators.

```shell
node .\src\math-and-stats\integer-division.js
```

![](https://imgur.com/Cf7cz4W.png)

## Mock Interview

### Get the Average value at each level of the tree

![](https://imgur.com/N6agnSk.png)

Traverse by depth and collect all the numbers.
And calculate average also.

Runtime Complexity
O(logn)
Space Complexity
O(logn)

## Binary Tree

A binary tree is a type of tree in which each node has at most two children (0, 1 or 2) which are referred as left child and right child.

## Binary Search Tree (BST)

In Binary Search Tree nodes are:

- The key in the left subtree is less than the key in its parent node.
- The key in the right subtree is greater or equal the key in its parent node.

![](https://i.imgur.com/Dk04fw4.png)

### Level Order Traversal

**Level Order traversal** is also known as **Breadth-First Traversal** since it traverses all the nodes at each level before going to the next level (depth). The last level of the tree is always equal to the height of the tree. The last level of the tree should contain at least one Node.


#### ADT
abstract data type (ADT) 