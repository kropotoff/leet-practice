# 01 - Arrays and Hashing

## Pattern: Hash Map / Frequency Counting

Use a hash map (object or `Map`) to store values you have seen, enabling
O(1) lookups instead of O(n) nested scans.

### ASCII Visualization -- Hash Map Lookup

```
  Input array:  [ 2,  7, 11, 15 ]    target = 9
                  ^
                  i=0, val=2

  Hash Map (complement -> index):
  +--------+-------+
  |  key   | value |
  +--------+-------+
  |   7    |   0   |  <-- need 9-2=7, store complement
  +--------+-------+

  Next iteration:
                  [ 2,  7, 11, 15 ]
                       ^
                       i=1, val=7

  Lookup: is 7 in the map?  YES -> return [map[7], i] = [0, 1]
```

### When to Use

- You need to find pairs / groups that satisfy a sum or matching condition.
- You need to count frequencies of elements (anagrams, top-K, duplicates).
- You want to reduce an O(n^2) brute-force search to O(n) with extra space.

### Complexity

| Approach         | Time   | Space |
|------------------|--------|-------|
| Brute force      | O(n^2) | O(1)  |
| Hash map lookup  | O(n)   | O(n)  |
| Frequency count  | O(n)   | O(n)  |
| Bucket sort      | O(n)   | O(n)  |

### Problems in This Section

| #   | Problem             | Difficulty | Key Idea                        |
|-----|---------------------|------------|---------------------------------|
| 1   | Two Sum             | Easy       | Complement lookup in hash map   |
| 49  | Group Anagrams      | Medium     | Sorted string as hash key       |
| 347 | Top K Frequent      | Medium     | Frequency map + bucket sort     |
