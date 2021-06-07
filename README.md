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
  - [Binary Tree](#binary-tree)
  - [Binary Search Tree (BST)](#binary-search-tree-bst)
  - [Trie](#trie)
  - [Heap ( Priority Queue )](#heap--priority-queue-)
  - [Hash-Table](#hash-table)
  - [Graph](#graph)
  - [Graph Algorithms](#graph-algorithms)
    - [Depth-First Search (DFS)](#depth-first-search-dfs)
    - [Breadth-First Search (BFS)](#breadth-first-search-bfs)
    - [DFS Vs BFS](#dfs-vs-bfs)
- [Algorithms Q&A](#algorithms-qa)
  - [Merge Sort](#merge-sort)
    - [Merge Sort Implementation](#merge-sort-implementation)
    - [Find Median Values (With Merge Sort Algorithm)](#find-median-values-with-merge-sort-algorithm)
  - [Quick Sort](#quick-sort)
    - [Quick Sort Implementation](#quick-sort-implementation)
  - [BFS (Breath First Search)](#bfs-breath-first-search)
- [Math & Stats](#math--stats)
  - [Integer Division Without Using \* or /](#integer-division-without-using--or-)
  - [Array slice](#array-slice)
  - [Math.floor](#mathfloor)
  - [Math.round](#mathround)
- [Mock Interview](#mock-interview)
  - [Get the Average value at each level of the tree](#get-the-average-value-at-each-level-of-the-tree)
  - [ADT](#adt)

## Working with this repo

Download or clone in local machine. Then run individual file in node console to see the results.

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

- [] Computer Science Concepts
- [] DataStructure
- [] Algorithms

## Computer Science Concepts

- [] Big O Time
- [] Big O Space
- [] Recursion
- [] Memoization / Dynamic Programming

## Big O complexity

### Big O Time complexity

Learn Big O. Make sure you give what would be the `runtime complexity` and `memory complexity`.

### Big O Space complexity

`Iterative functions` take no extra memory and therefore, `memory complexity` is `constant` O(1).

`Recursive functions` take extra on the stack therefore, `memory complexity` is `lograrithmic` O(_logn_)

## Recursion

## Data Structures

- [x] Array
- [ ] Hash Table
- [x] Linked List
- [ ] Stack
- [ ] Queue
- [ ] Tree
- [ ] Tries
- [ ] Graphs
- [ ] Heaps
- [ ] Vectors

## Algorithms

- [x] Merge sort
- [ ] Quick sort
- [ ] Breadth-first search
- [ ] Depth-first search
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

![](https://i.imgur.com/tMN6TD5.png)

Performance wise linked lists are slower than arrays because there is no direct access to linked list elements.

Suppose we have an array that contains following five elements 1, 2, 4, 5, 6. We want to insert a new element with value “3” in between “2” and “4”.

You have to copy 1,2 in new array then insert 3 and copy rest of the values. Runtime complexity and memory complexity is very high.

Therefore, we use linked list to store 1-6 and we can easily insert 3 in between 2 and 4.

![](https://i.imgur.com/r689svn.png)

The linked list is a list of items, called nodes. Nodes have two parts, `value` part and `link` part. Value part is used to stores the data. The link part is a reference, which is used to store addresses of the next element in the list.

- **Head**: Head is a reference that holds the address of the first node in the linked list.
- **Nodes**: Items in the linked list are called nodes.
- **Value**: The data that is stored in each node of the linked list.
- **Link**: Link part of the node is used to store the reference of other node.

![](https://i.imgur.com/LeGU67n.png)

![](https://i.imgur.com/nHFfpov.png)

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

  ![](https://i.imgur.com/byjRY7x.png)

#### Insert at head

The newly created node will become head of the linked list. · Size of the list is increased by one.

![](https://i.imgur.com/79qwSqL.png)

#### Insert at tail

![](https://i.imgur.com/Wz9Uovq.png)

#### Reverse a Singly Linked List

We’re given the pointer/reference to the head of a singly linked list, reverse it and return the pointer/reference to the head of the reversed linked list.

![](https://i.imgur.com/lamsYrL.png)

Problem Solving steps

![](https://i.imgur.com/0wZ4lB1.png)

Running program output

![](https://i.imgur.com/FAHJMeF.png)

### Stack

Depth First Search (DFS) uses a `stack` for storing the nodes that it is visiting.

#### Popping element from stack

```ts
var stack = [1, 2, 3, 4];
stack.pop(); // 4 , stack [1,2,3]
stack.pop(); // 3 , stack [1,2]
stack.pop(); // 2 , stack [1]
stack.pop(); // 1 , stack []
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
queue.shift(); // 4 , queue []
```

## Tree

A tree has hierarchical data and it has nodes.

![](https://i.imgur.com/wUiUy0B.png)

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

![](https://imgur.com/L04E7lo.png)

![](https://i.imgur.com/Jzwpguk.png)

If you want to store hierarchical data use Tree.

You should know about `Binary Tree` and `Binary Search Tree`.

### Binary Tree

A binary tree is a type of tree in which each node has `at most two children` (0, 1 or 2) which are referred as left child and right child.

![](https://i.imgur.com/fkRP5Ju.png)

### Binary Search Tree (BST)

In Binary Search Tree nodes are:

- The key in the left subtree is less than the key in its parent node.
- The key in the right subtree is greater or equal the key in its parent node.

![](https://i.imgur.com/u5WpbHe.png)

BSTs get an average case of `O(log n)` on gets, adds, and deletes, but they can have a worst case of `O(n)` if you do something like add a sorted list to a BST. Go ahead, do a BST then add [1,2,3,4,5] to it.

- [Binary Search Tree Implementation Exercise](https://codepen.io/roopkt/pen/RwpJBOw?editors=0010) 

### Trie

Trie is a tree, in which we store only one character at each node. This final key value pair is stored in the leaves.

![](https://i.imgur.com/o9UWgEN.png)

Trie is also suitable for solving partial match and range query problems.

### Heap ( Priority Queue )

Each node in the heap follows the rule that the `parent value is greater than its two children` are.

![](https://i.imgur.com/J5If65C.png)

There are two types of the heap data structure:

- **Max heap**: each node should be greater than or equal to each of its children.
- **Min heap**: each node should be smaller than or equal to each of its children.

A heap is a useful data structure when you want to get max/min one by one from data.

### Hash-Table

It is just like a dictionary or key value pair.

### Graph

![](https://i.imgur.com/kYlxMWJ.png)

Graph represents network. It has Nodes, Vertices and Edges.

### Graph Algorithms

- Depth-First Search (DFS)
- Breadth-First Search (BFS)

#### Depth-First Search (DFS)

The DFS algorithm we start from starting point and go into depth of graph until we reach a dead end and then move up to parent node (Backtrack). The stack is used to implement DFS.
![](https://i.imgur.com/4P7FMDl.png)

#### Breadth-First Search (BFS)

In BFS algorithm, a graph is traversed in layer-by-layer fashion. point. The queue is used to implement BFS.

![](https://i.imgur.com/i7nf4go.png)

Example: Suppose you have given a tree structure and asked to calculate the average of numbers at each level.

#### DFS Vs BFS

| DFS                                                                       | BFS                                                                                                      |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Search from root to the leaf                                              | Search level by level                                                                                    |
| Uses Stack to sort                                                        | Uses Queue to sort                                                                                       |
| Time complexity: Fast                                                     | Time complexity: Slow                                                                                    |
| Where to use: if you can find at root or leaf, find connected components. | Where to use: Find shortest path,find connected components. When you think you have less data go for it. |
| Time Complexity: O(V+E)                                                   | Time Complexity: O(V+E)                                                                                  |

## Algorithms Q&A

### Merge Sort

Browser's JavaScript Engine (`Array.prototype.sort`) uses merge sort maximum time. Runtime complexity O(n logn), Memory complexity O(n) because we have to create new list. It uses divide-and-conquer algorithm! and also it is recursive.

https://www.youtube.com/watch?v=UxnyImctVzg

![](https://i.imgur.com/YpQSB5J.png)

#### Merge Sort Implementation

Merge Sort Implementation Visualization:

[![Merge Sort Algorithm Simulator](https://img.youtube.com/vi/UxnyImctVzg/0.jpg)](https://www.youtube.com/watch?v=UxnyImctVzg 'Merge Sort Algorithm Simulator')

- [Merge Sort Implementation Exercise](https://codepen.io/roopkt/pen/ExWRRgP?editors=0010)
- [Merge Sort Implementation Answer](https://codepen.io/roopkt/pen/zYZaaZr?editors=0010)

#### Find Median Values (With Merge Sort Algorithm)

2 sorted arrays find the median element. Median is the middle index its not an average of values in an sorted array.

![](https://i.imgur.com/anPm3Yx.png)

So in order to find median we can use the stich algorithm since arrays are already sorted. Then we can find the middle index.

[Exercise File](src/sorting/merge-sort/find-median-values.mjs)

### Quick Sort

When Browser's are not using Merge sort they most of the time use Quick sort variations.

![](https://i.imgur.com/LudZhvH.png)

#### Quick Sort Implementation

- [Implement Quick Sort Exercise](https://codepen.io/roopkt/pen/NWpzMRv?editors=0010)
- [Implement Quick Sort Answer](https://codepen.io/roopkt/pen/eYvKrvP?editors=0010)

### BFS (Breath First Search)

## Math & Stats

### Integer Division Without Using \* or /

Divide two integers without using '/' (division) or '\*' (multiplication) operators.

```shell
node .\src\math-and-stats\integer-division.js
```

![](https://imgur.com/Cf7cz4W.png)

### Array slice

Slice does not mutate the original array.
`slice(index,count) `: Starts taking number from given index and go till given count.

[Example of slice](https://i.imgur.com/9iaew6W.png):

```js
[20,39,48,58,16,36,48].slice(0,3) = [20,39,48,58]
[20,39,48,58,16,36,48].slice(3,7) = [58,16,36,48]
```

![](https://i.imgur.com/9iaew6W.png)

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

![](https://imgur.com/N6agnSk.png)

Traverse by depth and collect all the numbers.
And calculate average also.

Runtime Complexity
O(logn)
Space Complexity
O(logn)

### ADT

abstract data type (ADT) - ADT is defined as a user point of view of a data type and Does not talk about how exactly it will be implemented.
