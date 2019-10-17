const ArrayList=require('./SolutionArrayList.js');let a10;function makeA10(){(a10=new ArrayList).append(0),a10.append(1),a10.append(2),a10.append(3),a10.append(4),a10.append(5),a10.append(6),a10.append(7),a10.append(8),a10.append(9)}beforeEach(()=>{makeA10()}),describe("ArrayList",()=>{describe("constructor",()=>{it("starts w/ size zero and empty",()=>{let e=new ArrayList;expect(e.size()).toBe(0),expect(e.isEmpty()).toBe(!0)}),it("has a default capacity of 7",()=>{let e=new ArrayList;expect(e.data.length).toBe(7)}),it("accepts a smaller default capacity",()=>{let e=new ArrayList(3);expect(e.data.length).toBe(3)}),it("accepts a larger default capacity",()=>{let e=new ArrayList(34);expect(e.data.length).toBe(34)})}),describe("get/set/append/size",()=>{it("should set valid indexes",()=>{let e=new ArrayList;e.set(0,44),e.set(1,55),e.set(2,66),expect(e.data[0]).toBe(44),expect(e.data[1]).toBe(55),expect(e.data[2]).toBe(66)}),it("should get valid indexes",()=>{let e=new ArrayList;e.set(0,44),e.set(1,55),e.set(2,66),expect(e.get(0)).toBe(44),expect(e.get(1)).toBe(55),expect(e.get(2)).toBe(66)}),it("should track size",()=>{let e=new ArrayList;expect(e.size()).toBe(0),e.append(44),expect(e.size()).toBe(1),e.append(55),expect(e.size()).toBe(2),e.append(66),expect(e.size()).toBe(3)})}),describe("pop",()=>{it("should return values",()=>{let e=new ArrayList;e.append(44),e.append(55),e.append(66),expect(e.pop()).toBe(66),expect(e.pop()).toBe(55),expect(e.pop()).toBe(44)}),it("should decrement size",()=>{let e=new ArrayList;e.append(44),e.append(55),e.append(66),expect(e.size()).toBe(3),e.pop(),expect(e.size()).toBe(2),e.pop(),expect(e.size()).toBe(1),e.pop(),expect(e.size()).toBe(0)})}),describe("automatic-growth",()=>{it("should automatically double the size of the array",()=>{let e=new ArrayList(2);expect(e.data.length).toBe(2),e.append(11),e.append(22),expect(e.data.length).toBe(2),e.append(33),expect(e.data.length).toBe(4),e.append(44),expect(e.data.length).toBe(4),e.append(55),expect(e.data.length).toBe(8),e.append(66),e.append(77),e.append(88),expect(e.data.length).toBe(8),e.append(99),expect(e.data.length).toBe(16)})}),describe("insertAtIndex",()=>{it("can insert at the front",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33),e.append(44),e.insertAtIndex(0,-10),expect(e.size()).toBe(6),expect(e.get(0)).toBe(-10)}),it("can insert near the front",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33),e.append(44),e.insertAtIndex(1,6),expect(e.size()).toBe(6),expect(e.get(1)).toBe(6)}),it("can insert in the middle",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33),e.append(44),e.insertAtIndex(2,99),expect(e.size()).toBe(6),expect(e.get(0)).toBe(0),expect(e.get(1)).toBe(11),expect(e.get(2)).toBe(99),expect(e.get(3)).toBe(22),expect(e.get(4)).toBe(33),expect(e.get(5)).toBe(44)}),it("can insert at the end",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33),e.append(44),e.insertAtIndex(5,99),expect(e.get(0)).toBe(0),expect(e.get(1)).toBe(11),expect(e.get(2)).toBe(22),expect(e.get(3)).toBe(33),expect(e.get(4)).toBe(44),expect(e.get(5)).toBe(99)}),it("grows the array",()=>{let e=new ArrayList(2);e.append(11),e.append(22),e.insertAtIndex(0,0),expect(e.size()).toBe(3),expect(e.data.length).toBe(4),expect(e.get(0)).toBe(0),expect(e.get(1)).toBe(11),expect(e.get(2)).toBe(22)}),it("prepend is synonomous with insertAtIndex(0, val)",()=>{let e=new ArrayList;e.prepend(3),e.prepend(2),e.prepend(1),expect(e.size()).toBe(3),expect(e.get(0)).toBe(1),expect(e.get(1)).toBe(2),expect(e.get(2)).toBe(3)})}),describe("removeAtIndex",()=>{it("can remove at the front",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33);let t=e.removeAtIndex(0);expect(t).toBe(0),expect(e.size()).toBe(3)}),it("can remove at the end",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33);let t=e.removeAtIndex(3);expect(t).toBe(33),expect(e.size()).toBe(3)}),it("can remove in the middle",()=>{let e=new ArrayList;e.append(0),e.append(11),e.append(22),e.append(33);let t=e.removeAtIndex(2),p=e.removeAtIndex(1);expect(t).toBe(22),expect(p).toBe(11),expect(e.size()).toBe(2)})}),describe("isSorted",()=>{it("empty array",()=>{let e=new ArrayList;expect(e.isSorted()).toBe(!0)}),it("one-element array",()=>{let e=new ArrayList;e.append(11),expect(e.isSorted()).toBe(!0)}),it("two-element ascending",()=>{let e=new ArrayList;e.append(11),e.append(22),expect(e.isSorted()).toBe(!0)}),it("two-element descending",()=>{let e=new ArrayList;e.append(22),e.append(11),expect(e.isSorted()).toBe(!0)}),it("lots ascending",()=>{let e=new ArrayList;for(let t=0;t<99;t++)e.append(t);expect(e.isSorted()).toBe(!0)}),it("lots descending",()=>{let e=new ArrayList;for(let t=0;t<99;t++)e.append(-t);expect(e.isSorted()).toBe(!0)}),it("out of order",()=>{let e=new ArrayList;e.append(11),e.append(33),e.append(22),expect(e.isSorted()).toBe(!1)})}),describe("indexOf / contains",()=>{it("finds at the front",()=>{expect(a10.indexOf(0)).toBe(0),expect(a10.contains(0)).toBe(!0)}),it("finds at the end",()=>{expect(a10.indexOf(9)).toBe(9),expect(a10.contains(9)).toBe(!0)}),it("finds in the middle",()=>{expect(a10.indexOf(4)).toBe(4),expect(a10.contains(4)).toBe(!0)}),it("no false positives",()=>{expect(a10.indexOf(99)).toBe(null),expect(a10.contains(99)).toBe(!1)})}),describe("remove()",()=>{it("removes elements in front/middle/back",()=>{a10.remove(0),expect(a10.size()).toBe(9),a10.remove(5),expect(a10.size()).toBe(8),a10.remove(9),expect(a10.size()).toBe(7)}),it("ignores elements not found",()=>{makeA10();let e=a10.remove(44);expect(e).toBe(!1),expect(a10.size()).toBe(10),e=a10.remove(55),expect(e).toBe(!1),expect(a10.size()).toBe(10),e=a10.remove(66),expect(e).toBe(!1),expect(a10.size()).toBe(10),e=a10.remove(0),expect(e).toBe(!0),expect(a10.size()).toBe(9)})})});
