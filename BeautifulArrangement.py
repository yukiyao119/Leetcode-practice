# Brute Force 1 
# Make a func permute(nums, current_index) to create all permutations.
# Take cur_index ele, swap cur ele with every other ele in the array to the right. Eg: a, b, c. Swap a with a, then swap b with b, then swap b with c.
# Move to next index ele, call func.Eg: Swap a with b, then swap a with a, then swap b with c.
# Time complexity : O(n!)O(n!). A total of n!n! permutations will be generated for an array of length n.
# Space complexity : O(n).
    
# public class Solution {
#     int count = 0;
#     public int countArrangement(int N) {
#         int[] nums = new int[N];
#         for (int i = 1; i <= N; i++)
#             nums[i - 1] = i;
#         permute(nums, 0);
#         return count;
#     }
#     public void permute(int[] nums, int l) {
#         if (l == nums.length - 1) {
#             int i;
#             for (i = 1; i <= nums.length; i++) {
#                 if (nums[i - 1] % i != 0 && i % nums[i - 1] != 0)
#                     break;
#             }
#             if (i == nums.length + 1) {
#                 count++;
#             }
#         }
#         for (int i = l; i < nums.length; i++) {
#             swap(nums, i, l);
#             permute(nums, l + 1);
#             swap(nums, i, l);
#         }
#     }
#     public void swap(int[] nums, int x, int y) {
#         int temp = nums[x];
#         nums[x] = nums[y];
#         nums[y] = temp;
#     }
# }


# backtracking
# check every digit, if cur valid, check next digit, 
# if all digits valid, count+1, once checked, swap back up.
class Solution:
    def countArrangement(self, n: int) -> int:
      self.visited = [False]*(n+1)
      self.count = 0
      
      def calculate(n, pos):
          if pos > n: self.count += 1
          for i in range(1, n+1):
              if not self.visited[i] and (pos % i == 0 or i%pos == 0):
                  self.visited[i] = True
                  calculate(n, pos+1)
                  self.visited[i] = False
      
      calculate(n, 1)
      return self.count