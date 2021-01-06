Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]


# Brute Force 1
# use extra memory to create empty temp list, add vals to temp list 
# use Counter to count all vals counts
# loop counts again, if it's 1, add it to temp list
# create dummy empty nodes
# loop temp and add node to dummy 
# class Solution:
#     def deleteDuplicates(self, head: ListNode) -> ListNode:
#       temp = []
#       cur = head
#       while cur:
#         temp.append(cur.val)
#         cur = cur.next
      
#       c = Counter(temp)
#       temp = [k for k,v in c.items() if v == 1]

#       dummy = cur = ListNode()

#       for i in temp:
#         cur.next = ListNode(i)
#         cur = cur.next
      
#       return dummy.next


# have a dummy to return dummy.next; dummy also represents prev
# head compares with head.next
# if equals, head move to head.next
# if not equals, prev links directly to head.next

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        dummy = ListNode(0,next=head)
        prev = dummy
        
        while head:
            if head.next and head.val == head.next.val:
                while head.next and head.val == head.next.val:
                    head = head.next
                prev.next = head.next
            else:
                prev = prev.next
        
            head = head.next
        
        return dummy.next
