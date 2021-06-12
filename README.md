[Visit this page in Website for Coding interview](http://www.rupeshtiwari.com/coding-examples-cs-fundamentals/)

- [Important thing to remember](#important-thing-to-remember)
- [Working with this repo](#working-with-this-repo)
- [What to practice?](#what-to-practice)
- [How to Approach?](#how-to-approach)
  - [Before you code](#before-you-code)
  - [While you code](#while-you-code)
  - [After you code](#after-you-code)
    - [Ask Questions before coding](#ask-questions-before-coding)
- [What you should prepare?](#what-you-should-prepare)
- [Computer Science Concepts](#computer-science-concepts)
- [Big O complexity](#big-o-complexity)
  - [Big O Time complexity](#big-o-time-complexity)
  - [Big O Space complexity](#big-o-space-complexity)
- [Recursion](#recursion)
- [Data Structures](#data-structures)
- [Algorithms](#algorithms)
- [Data Structure Q & A](#data-structure-q--a)
  - [Array](#array)
    - [Implement Binary Search on a Sorted Array](#implement-binary-search-on-a-sorted-array)
    - [Find Maximum in Sliding Window](#find-maximum-in-sliding-window)
  - [Linked List](#linked-list)
    - [Insert at head](#insert-at-head)
    - [Insert at tail](#insert-at-tail)
    - [Reverse a Singly Linked List](#reverse-a-singly-linked-list)
  - [Stack](#stack)
    - [Popping element from stack](#popping-element-from-stack)
  - [Queue](#queue)
    - [Enqueue an element in Queue](#enqueue-an-element-in-queue)
    - [Dequeue an element from Queue](#dequeue-an-element-from-queue)
  - [Tree](#tree)
    - [Breadth-first Traversal (BFT)](#breadth-first-traversal-bft)
    - [Depth-first Traversal (DFT)](#depth-first-traversal-dft)
    - [Difference between Breadth-first vs Depth-first traversal](#difference-between-breadth-first-vs-depth-first-traversal)
  - [Binary Tree](#binary-tree)
    - [Minimal Binary Tree](#minimal-binary-tree)
    - [Binary Search Tree (BST)](#binary-search-tree-bst)
    - [Binary Search Iterative](#binary-search-iterative)
    - [Binary Search Recursive](#binary-search-recursive)
  - [Trie](#trie)
  - [Heap ( Priority Queue )](#heap--priority-queue-)
  - [Hash-Table](#hash-table)
  - [Graph](#graph)
    - [Implement Graph](#implement-graph)
    - [Breadth First Search (BFS)](#breadth-first-search-bfs)
    - [Depth First Search (DFS)](#depth-first-search-dfs)
- [Algorithms Q&A](#algorithms-qa)
  - [Merge Sort](#merge-sort)
    - [Find Median Values (With Merge Sort Algorithm)](#find-median-values-with-merge-sort-algorithm)
  - [Quick Sort](#quick-sort)
- [Math & Stats](#math--stats)
  - [Integer Division Without Using \* or /](#integer-division-without-using--or-)
  - [Array slice](#array-slice)
  - [Math.floor](#mathfloor)
  - [Math.round](#mathround)
- [Mock Interview](#mock-interview)
  - [Get the Average value at each level of the tree](#get-the-average-value-at-each-level-of-the-tree)
  - [ADT](#adt)
- [Interview Questions Easy](#interview-questions-easy)
  - [Trees and Graphs](#trees-and-graphs)
    - [Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.](#route-between-nodes-given-a-directed-graph-design-an-algorithm-to-find-out-whether-there-is-a-route-between-two-nodes)
    - [Minimal Tree: Given a sorted increasing order array with unique integer elements, write an algorithm to create a binary search tree with minimal height](#minimal-tree-given-a-sorted-increasing-order-array-with-unique-integer-elements-write-an-algorithm-to-create-a-binary-search-tree-with-minimal-height)
  - [Recursion Interview Questions](#recursion-interview-questions)
    - [Calculate x to the power n using recursion](#calculate-x-to-the-power-n-using-recursion)
- [References](#references)

## Important thing to remember

- Remember: Run through `your code` not through the `algorithm` while executing test.
- While `solving` problem: give yourself difficult values like use 7-8 elements of array not just 3 elements array. [1,2,3] instead use [12,34,22,51,6,96,43,8]
- While `executing` your code always start with very easy example [2,3,1]

## Working with this repo

- Download or clone in local machine.
- Run `npm ci`
- Then run individual file to see result on console.
- You should use `node filename` in console to see results.

## What to practice?

Make sure you know Computer science [basic data structures](#data-structures-you-should-know). Also you should be aware of [fundamental algorithms](#fundamental-algorithms-you-should-know).

## How to Approach?

### Before you code

### While you code

### After you code

#### Ask Questions before coding

Once they give you problem, don't start coding. Ask clarifying questions to make sure you understand the problem.

Example:

- Will there be null/empty values on input?
- Will all numbers in a binary tree integers?

## What you should prepare?

- [x] Computer Science Concepts
- [x] DataStructure
- [x] Algorithms

## Computer Science Concepts

- [x] Big O Time
- [x] Big O Space
- [x] Recursion
- [x] Memoization / Dynamic Programming

## Big O complexity

### Big O Time complexity

Learn Big O. Make sure you give what would be the `runtime complexity` and `memory complexity`.

### Big O Space complexity

`Iterative functions` take no extra memory and therefore, `memory complexity` is `constant` O(1).

`Recursive functions` take extra on the stack therefore, `memory complexity` is `lograrithmic` O(_logn_)

## Recursion

**Factorial Simple Recursion**

![Factorial Simple Recursion](https://i.imgur.com/5hArLdr.png)

**Recursive Factorial Simulation**

![Recursive Factorial Simulation](https://i.imgur.com/prXbTHd.png)

**Recursive Factorial Time complexity O(n)**

![Recursive Factorial Time complexity](https://i.imgur.com/rPoxJoA.png)

**Recursive Factorial Space complexity is O(n)**
 
![Recursive Factorial Space complexity](https://i.imgur.com/uceKl4R.png)

## Data Structures

- [x] Array
- [x] Hash Table
- [x] Linked List
- [x] Stack
- [x] Queue
- [x] Tree
- [ ] Tries
- [x] Graphs
- [ ] Heaps
- [ ] Vectors

## Algorithms

- [x] Merge sort
- [x] Quick sort
- [x] Breadth-first search
- [x] Depth-first search
- [x] Binary Search

## Data Structure Q & A

### Array

Arrays can store a fixed number of elements, whereas a collection stores object dynamically so there is no size restrictions it grows and shrinks automatically.

- **Insert** at the end (push) is efficient.
- **Insert** at in between is not efficient.

#### Implement Binary Search on a Sorted Array

Given a sorted array of integers, return the index of the given key. Return -1 if the key is not found.

Run below script

```
node .\src\arrays\binary-search.js
```

#### Find Maximum in Sliding Window

Given a large array of integers and a window of size w, find the current maximum value in the window as the window slides through the entire array.

### Linked List

Linked lists are dynamic data structure and memory is allocated at run time. They don't store data contiguously rather they use link to point to other elements.

![ ](https://i.imgur.com/tMN6TD5.png)

Performance wise linked lists are slower than arrays because there is no direct access to linked list elements.

Suppose we have an array that contains following five elements 1, 2, 4, 5, 6. We want to insert a new element with value “3” in between “2” and “4”.

You have to copy 1,2 in new array then insert 3 and copy rest of the values. Runtime complexity and memory complexity is very high.

Therefore, we use linked list to store 1-6 and we can easily insert 3 in between 2 and 4.

![ ](https://i.imgur.com/r689svn.png)

The linked list is a list of items, called nodes. Nodes have two parts, `value` part and `link` part. Value part is used to stores the data. The link part is a reference, which is used to store addresses of the next element in the list.

- **Head**: Head is a reference that holds the address of the first node in the linked list.
- **Nodes**: Items in the linked list are called nodes.
- **Value**: The data that is stored in each node of the linked list.
- **Link**: Link part of the node is used to store the reference of other node.

![ ](https://i.imgur.com/LeGU67n.png)

![ ](https://i.imgur.com/nHFfpov.png)

```ts
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

Below are the types of LinkedList:

- **Singly Linked List**
- **Doubly Linked List**
- **Circular Linked List**

  ![ ](https://i.imgur.com/byjRY7x.png)

#### Insert at head

The newly created node will become head of the linked list. · Size of the list is increased by one.

![ ](https://i.imgur.com/79qwSqL.png)

#### Insert at tail

![ ](https://i.imgur.com/Wz9Uovq.png)

#### Reverse a Singly Linked List

We’re given the pointer/reference to the head of a singly linked list, reverse it and return the pointer/reference to the head of the reversed linked list.

![ ](https://i.imgur.com/lamsYrL.png)

Problem Solving steps

![ ](https://i.imgur.com/0wZ4lB1.png)

Running program output

![ ](https://i.imgur.com/FAHJMeF.png)

### Stack

Depth First Search (DFS) uses a `stack` for storing the nodes that it is visiting.

#### Popping element from stack

```ts
var stack = [1, 2, 3, 4];
stack.pop(); // 4 , stack [1,2,3]
stack.pop(); // 3 , stack [1,2]
stack.pop(); // 2 , stack [1]
stack.pop(); // 1 , stack [ ]
```

### Queue

Breadth First Search (BFS) uses a `queue` for storing the nodes that it is visiting.

#### Enqueue an element in Queue

```ts
var queue = [];

queue.push(1); //   queue [1]
queue.push(2); //   queue [1,2]
queue.push(3); //   queue [1,2,3]
```

#### Dequeue an element from Queue

```ts
var queue = [1, 2, 3, 4];
queue.shift(); // 1 , queue [2,3,4]
queue.shift(); // 2 , queue [3,4]
queue.shift(); // 3 , queue [4]
queue.shift(); // 4 , queue [ ]
```

### Tree

A tree has hierarchical data and it has nodes. It is a type of graph. Each node (except root) has exactly on parent and zero or more children.
A tree is `acyclic` meaning it has no cycles: "a cycle is a path [AKA sequence] of edges and vertices wherein a vertex is reachable from itself".
Therefore, a tree is also called as `Directed Acyclic Graph (DAG)`.

![ ](https://i.imgur.com/wUiUy0B.png)

- **Root**: top node of tree is called root and has no parent and has no incoming edges.
- **Node**: every node has parent ( except root ) and 0 or more children's.
- **Edge**: used to connect two nodes.
- **Path**: A path is an ordered list of nodes that are connected by edges.
- **Leaf**: A leaf node is a node that has no children.
- **Height of the tree**: The height of a tree is the number of edges on the longest path between the root and a leaf.
- **The level of node**: The level of a node is the number of edges on the path from the root node to that node.
- **Children**: Nodes that have incoming edges from the same node to be said to be the children of that node.
- **Parent**: Node is a parent of all the child nodes that are linked by outgoing edges. - **Sibling**: Nodes in the tree that are children of the same parent are called siblings.
- **Ancestor**:  A node reachable by repeated moving from child to parent.

![ ](https://imgur.com/L04E7lo.png)

![ ](https://i.imgur.com/Jzwpguk.png)

If you want to store hierarchical data use Tree.

You should know about `Binary Tree` and `Binary Search Tree`.

#### Breadth-first Traversal (BFT)

In BFS algorithm, a graph is traversed in layer-by-layer fashion. point. The queue is used to implement BFS.

![ ](https://i.imgur.com/i7nf4go.png)

Example: Suppose you have given a tree structure and asked to calculate the average of numbers at each level.

- **Strategy**: `Iterative`
- **Time Complexity**: `O(n logn)`
- **Space Complexity**: `O(n logn)`
- Use `Queue` while coding.

- [Breadth-first Traversal Question](https://codepen.io/roopkt/pen/bGqjVZe?editors=0010)
- [Breadth-first Traversal Answer](https://codepen.io/roopkt/pen/XWMBdWv?editors=0010)

#### Depth-first Traversal (DFT)

The DFS algorithm we start from starting point and go into depth of graph until we reach a dead end and then move up to parent node (Backtrack). The stack is used to implement DFS.

![ ](https://i.imgur.com/4P7FMDl.png)

- **Strategy**: `Recursive`
- **Time Complexity**: `O(n logn)`
- **Space Complexity**: `O(n logn)`
- Use `Recursive Call Stack` while coding.

![ ](https://i.imgur.com/DdFyXGx.png)

- [Breadth-first Traversal Question](https://codepen.io/roopkt/pen/bGqjVZe?editors=0010)
- [Breadth-first Traversal Answer](https://codepen.io/roopkt/pen/XWMBdWv?editors=0010)

#### Difference between Breadth-first vs Depth-first traversal

| BFS                                                                                                                                                                  | DFS                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Search level by level                                                                                                                                                | Search from root to the leaf    |
| Uses Queue to sort                                                                                                                                                   | Uses Stack to sort              |
| Time complexity: Slow                                                                                                                                                | Time complexity: Fast           |
| Where to use: solution is not far from the root of the tree,If the tree is very deep and solutions are rare, If solutions are frequent but located deep in the tree, | Where to use: tree is very wide |
| Time Complexity: O(V+E)                                                                                                                                              | Time Complexity: O(V+E)         |

### Binary Tree

A binary tree is a type of tree in which each node has `at most two children` (0, 1 or 2) which are referred as left child and right child.

![ ](https://i.imgur.com/fkRP5Ju.png)

#### Minimal Binary Tree

A Minimal Binary Tree has about the same number of nodes on the left of each node as on the right.

#### Binary Search Tree (BST)

In Binary Search Tree nodes are:

- The key in the left subtree is less than the key in its parent node.
- The key in the right subtree is greater or equal the key in its parent node.

![ ](https://i.imgur.com/u5WpbHe.png)

[Checkout Binary Search Tree Visualization here.](https://www.cs.usfca.edu/~galles/visualization/BST.html)

BSTs get an average case of `O(log n)` on gets, adds, and deletes, but they can have a worst case of `O(n)` if you do something like add a sorted list to a BST. Go ahead, do a BST then add [1,2,3,4,5] to it.

Below image showing how to add `[3, 7, 4, 6, 5, 1, 10, 2, 9, 8]` in BST.

![ ](https://i.imgur.com/qkefQzD.png)

- [Binary Search Tree Implementation Question](https://codepen.io/roopkt/pen/RwpJBOw?editors=0010)
- [Binary Search Tree Implementation Answer](https://codepen.io/roopkt/pen/LYWBYMM?editors=0010)

Binary Search can be done both in iterative or recursive way.

![](https://i.imgur.com/PWjbCaZ.png)

#### Binary Search Iterative

![](https://i.imgur.com/CQSDjqZ.png)

#### Binary Search Recursive

![](https://i.imgur.com/h2azawY.png)

Simulating Recursive Binary Search for an existing number in a sorted increasing order unique integer array.

![](https://i.imgur.com/gSRARcL.png)

Simulating Recursive Binary Search for an non-existing number in a sorted increasing order unique integer array.

![](https://i.imgur.com/wC7TAsu.png)

### Trie

Trie is a tree, in which we store only one character at each node. This final key value pair is stored in the leaves.

![ ](https://i.imgur.com/o9UWgEN.png)

Trie is also suitable for solving partial match and range query problems.

### Heap ( Priority Queue )

Each node in the heap follows the rule that the `parent value is greater than its two children` are.

![ ](https://i.imgur.com/J5If65C.png)

There are two types of the heap data structure:

- **Max heap**: each node should be greater than or equal to each of its children.
- **Min heap**: each node should be smaller than or equal to each of its children.

A heap is a useful data structure when you want to get max/min one by one from data.

### Hash-Table

It is just like a dictionary or key value pair.

### Graph

![ ](https://i.imgur.com/kYlxMWJ.png)

Graph represents network. It has Nodes, Vertices and Edges.

#### Implement Graph

![ ](https://i.imgur.com/eqzKDIV.png)

[Implement Graph Question](https://codepen.io/roopkt/pen/ZEejLJe?editors=0010)
[Implement Graph Answer](https://codepen.io/roopkt/pen/vYxagrP?editors=0010)

#### Breadth First Search (BFS)

When you want to find all possible routes between airports then you want to use BFS.
Find all possible routes from `PHX` to `BKK`. Also then you can decide which path is the shortest one.

![ ](https://i.imgur.com/Fc8HIae.png)

[Question Answer Source Code: Find all possible routes between 2 airports using BFS](./src/data-structure/5-graph/breadth-first-search.mjs)

![ ](https://i.imgur.com/CvPhRQx.png)

![ ]((https://i.imgur.com/DrWF78t.png)

#### Depth First Search (DFS)

![ ](https://i.imgur.com/wHevaTK.png)

[Question Answer Source Code: Find shortest route between 2 airports using DFS](./src/data-structure/5-graph/depth-first-search.mjs)

## Algorithms Q&A

### Merge Sort

Browser's JavaScript Engine (`Array.prototype.sort`) uses merge sort maximum time. Runtime complexity O(n logn), Memory complexity O(n) because we have to create new list. It uses divide-and-conquer algorithm! and also it is recursive.

https://www.youtube.com/watch?v=UxnyImctVzg

![ ](https://i.imgur.com/YpQSB5J.png)

**Merge Sort Algorithm**

![Merge Sort Algorithm](https://i.imgur.com/DIvX2OX.png)

**Merge Sort Algorithm Simulation**

![Merge Sort Algorithm Simulation](https://i.imgur.com/wDIB4Vz.png)

Merge Sort Implementation Visualization:

[![Merge Sort Algorithm Simulator](https://img.youtube.com/vi/UxnyImctVzg/0.jpg)](https://www.youtube.com/watch?v=UxnyImctVzg 'Merge Sort Algorithm Simulator')

- [Merge Sort Implementation Question](https://codepen.io/roopkt/pen/ExWRRgP?editors=0010)
- [Merge Sort Implementation Answer](https://codepen.io/roopkt/pen/ZEeMPPL?editors=0010)

#### Find Median Values (With Merge Sort Algorithm)

2 sorted arrays find the median element. Median is the middle index its not an average of values in an sorted array.

![ ](https://i.imgur.com/anPm3Yx.png)

So in order to find median we can use the stich algorithm since arrays are already sorted. Then we can find the middle index.

[Find Median Values Question & Answer](src/sorting/merge-sort/find-median-values.mjs)

### Quick Sort

When Browser's are not using Merge sort they most of the time use Quick sort variations. Most powerful sorting algorithm

**Quick sort Algorithm**

![Quick sort Algorithm](https://i.imgur.com/m61xGnU.png)

**Pseudo Code for Quick Sort Algorithm**

![Pseudo Code for Quick Sort Algorithm](https://i.imgur.com/4gM1PFE.png)

**Quick Sort Algorithm Simulation**

![Quick Sort Algorithm Simulation](https://i.imgur.com/ERCfeCg.png)

**Quick Sort Partition Algorithm**

![Quick Sort Partition Algorithm](https://i.imgur.com/zewMoKV.png)

**Quick Sort Partition Algorithm Simulation**

![Quick Sort Partition Algorithm Simulation](https://i.imgur.com/CkpjhGn.png)

![ ](https://i.imgur.com/LudZhvH.png)

**Implement Quick Sort Algorithm Question**

[Implement Quick Sort Question](https://codepen.io/roopkt/pen/NWpzMRv?editors=0010)

**Quick Sort Answer with extra Array and Space complexity is O(n)**

[Implement Quick Sort Answer](https://codepen.io/roopkt/pen/eYvKrvP?editors=0010)

**Quick Sort Answer with in-place partition and Space complexity O(1) the most Efficient algorithm**

[Implement in-place algorithm for Quick Sort Answer](https://codepen.io/roopkt/pen/OJpBYKz?editors=0010)

- [quick sort in-place](src/algorithms/sorting/quick-sort/quick-sort-inplace.mjs)
- [quick sort ](src/algorithms/sorting/quick-sort/quick-sort.mjs)

## Math & Stats

### Integer Division Without Using \* or /

Divide two integers without using '/' (division) or '\*' (multiplication) operators.

```shell
node .\src\math-and-stats\integer-division.js
```

![ ](https://imgur.com/Cf7cz4W.png)

### Array slice

Slice does not mutate the original array.
`slice(index,count) `: Starts taking number from given index and go till given count.

[Example of slice](https://i.imgur.com/9iaew6W.png):

```js
[20,39,48,58,16,36,48].slice(0,3) = [20,39,48]
[20,39,48,58,16,36,48].slice(3,7) = [58,16,36,48]
```

![ ](https://i.imgur.com/9iaew6W.png)

### Math.floor

```javascript
Math.floor(2.5) = 2
Math.floor(2.8) = 2
Math.floor(2.4) = 2
```

### Math.round

```javascript
Math.round(2.5) = 3
Math.round(2.8) = 3
Math.round(2.4) = 2
```

## Mock Interview

### Get the Average value at each level of the tree

![ ](https://imgur.com/N6agnSk.png)

Traverse by depth and collect all the numbers.
And calculate average also.

Runtime Complexity
O(logn)
Space Complexity
O(logn)

### ADT

abstract data type (ADT) - ADT is defined as a user point of view of a data type and Does not talk about how exactly it will be implemented.

## Interview Questions Easy

### Trees and Graphs

#### Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

![](https://i.imgur.com/7Xhkftd.png)

[Answer Source Code Route Between Nodes](src/data-structure/interview-questions/graph/1-route-between-nodes.mjs)

![](https://i.imgur.com/JAYs7el.png)

#### Minimal Tree: Given a sorted increasing order array with unique integer elements, write an algorithm to create a binary search tree with minimal height

**What is Minimal Tree?**

![](https://i.imgur.com/9wkzVyk.png)

**Minimal Tree Simulation**

![](https://i.imgur.com/scpMVbO.png)

[Answer for Creating Minimal Tree Interview Question](src/interview-questions/graph/2-minimal-bs-tree.mjs)


### Recursion Interview Questions

#### Calculate x to the power n using recursion

**x to the power n Brute Force** 

![x to the power n Brute Force](https://i.imgur.com/wy1ANJ5.png)


**x to the power n using simple recursion un-optimized** 

![x to the power n using simple recursion un-optimized](https://i.imgur.com/Ed1sLqi.png)


**x to the power n using optimized recursion with multiple subproblems** 

![x to the power n using optimized recursion with multiple subproblems](https://i.imgur.com/Ym3qjhj.png)


## References

- http://btholt.github.io/four-semesters-of-cs/
- https://btholt.github.io/four-semesters-of-cs-part-two/
- [Binary Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/BST.html)
