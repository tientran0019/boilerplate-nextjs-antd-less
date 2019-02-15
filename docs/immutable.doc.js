List()
var list = Immutable.List([1, 2, 3])
// [1, 2, 3]

List.isList()
Immutable.List.isList(list)
// true

List.of()
var list = Immutable.List.of(1, 2, 3);
// [1, 2, 3]

list.size
// 3

set()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
newlist = list.set(0, "new value");
console.log(list.toJS());
// [1, 2, 3]
console.log(newlist.toJS());
// ["new value", 2, 3]

// delete(); // - alias remove
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
newlist = list.delete(0);
console.log(list.toJS());
// [1, 2, 3]
console.log(newlist.toJS());
// [2, 3]

insert()
var list = Immutable.List.of(1, 2, 3);
var newlist = list.insert(1, 'bar');
console.log(list.toJS());
// [1, 2, 3]
console.log(newlist.toJS());
// [1, "bar", 2, 3]

clear()
var list = Immutable.List.of(1, 2, 3);
list = list.clear();
console.log(list.toJS());
// []

push()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
list = list.push('bar');
console.log(list.toJS());
// [1, 2, 3, 'bar']

pop()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
list = list.pop();
console.log(list.toJS());
// [1, 2]

unshift()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
list = list.unshift('bar');
console.log(list.toJS());
// ['bar', 1, 2, 3]

shift()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
list = list.shift();
console.log(list.toJS());
// [2, 3]

update()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
list = list.update(1, function () { return 5 });
console.log(list.toJS());
// [1, 5, 3]

merge()
var list = Immutable.List.of(1, 2, 3);
var newlist = Immutable.List([4, 5]);
console.log(list.toJS());
// [1, 2, 3]
list = list.merge(newlist);
console.log(list.toJS());
// [4, 5, 3]


mergeWith()
var list = Immutable.List.of(1, 2, 3);
var newlist = Immutable.List([4, 5]);
console.log(list.toJS());
// [1, 2, 3]
list = list.mergeWith((prev, next) => prev + next, newlist);
console.log(list.toJS());
// [5, 7, 3]

mergeDeep()
var list = Immutable.List.of(1, 2, 3);
var newlist = Immutable.List([4, 5]);
console.log(list.toJS());
// [1, 2, 3]
list = list.mergeDeep(newlist);
console.log(list.toJS());
// [4, 5, 3]


mergeDeepWith()
var list = Immutable.List.of(1, 2, 3);
var newlist = Immutable.List([4, 5]);
console.log(list.toJS());
// [1, 2, 3]
list = list.mergeDeepWith((prev, next) => prev + next, newlist);
console.log(list.toJS());
// [5, 7, 3]

setSize()
var list = Immutable.List.of(1, 2, 3);
console.log(list.toJS());
// [1, 2, 3]
list = list.setSize(5);
console.log(list.toJS());
// [1, 2, 3, undefined, undefined]
list = list.setSize(2);
console.log(list.toJS());
// [1, 2]

setIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
console.log(list.toJS());
// [1, ['foo','bar'], 3, 4, 5, 6]
list = list.setIn([1, 0], 'new');
console.log(list.toJS());
// [1, ['new','bar'], 3, 4, 5, 6]

deleteIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
console.log(list.toJS());
// [1, ['foo','bar'], 3, 4, 5, 6]
list = list.deleteIn([1, 0]);
console.log(list.toJS());
// [1, ['bar'], 3, 4, 5, 6]

updateIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
console.log(list.toJS());
// [1, ['foo', 'bar'], 3, 4, 5, 6]
list = list.updateIn([1, 0], val => 'new ' + val);
console.log(list.toJS());
// [1, ['new foo', 'bar'], 3, 4, 5, 6]

mergeIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
var newlist = Immutable.fromJS(['a']);
console.log(list.toJS());
// [1, ['foo', 'bar'], 3, 4, 5, 6]
list = list.mergeIn([1], newlist);
console.log(list.toJS());
// [1, ['a', 'bar'], 3, 4, 5, 6]

mergeDeepIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
var newlist = Immutable.fromJS(['a']);
console.log(list.toJS());
// [1, ['foo', 'bar'], 3, 4, 5, 6]
list = list.mergeDeepIn([1], newlist);
console.log(list.toJS());
// [1, ['a', 'bar'], 3, 4, 5, 6]

withMutaions()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.withMutations(map => {
	map.push('bar').set(0, 'foo');
});
console.log(list.toJS());
// ["foo", 2, 3, 4, 5, 6, "bar"]

asMutable()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.asMutable().map((item) => {
	return item * item
});
console.log(list.toJS());
// [1, 4, 9, 16, 25, 36]

asImmutable()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.asImmutable().map((item) => {
	return item * item
});
console.log(list.toJS());
// [1, 4, 9, 16, 25, 36]

toSeq()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.toSeq();
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]

toKeyedSeq()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.toKeyedSeq();
console.log(list.toJS());
// {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}

toIndexedSeq()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.toIndexedSeq();
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]

toSetSeq()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list = list.toSetSeq();
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]

fromEntrySeq()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
list.fromEntrySeq();
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]

equals()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
var list2 = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.equals(list2))
// true

hashCode()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.hashCode());
// 1012924004

get()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
console.log(list.get(5));
// 6

has()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toJS());
// [1, 2, 3, 4, 5, 6]
console.log(list.has(5));
// true
console.log(list.has(12));
// false

includes()
var list = Immutable.fromJS([1, 'foo', 3, 4, 5, 6]);
console.log(list.toJS());
// [1,'foo',3,4,5,6]
console.log(list.includes('foo'));
// true
console.log(list.includes('bar'));
// false

first()
var list = Immutable.fromJS([1, 'foo', 3, 4, 5, 6]);
console.log(list.toJS());
// [1,'foo',3,4,5,6]
console.log(list.first());
// 1

last()
var list = Immutable.fromJS([1, 'foo', 3, 4, 5, 6]);
console.log(list.toJS());
// [1,'foo',3,4,5,6]
console.log(list.last());
// 6

getIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
console.log(list.toJS());
// [1,['foo', 'bar'],3,4,5,6]
console.log(list.getIn([1, 0]));
// foo

hasIn()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
console.log(list.toJS());
// [1,['foo', 'bar'],3,4,5,6]
console.log(list.hasIn([1, 0]));
// true
console.log(list.hasIn([1, 1, 1]));
// false

toJS()
var list = Immutable.fromJS([1, ['foo', 'bar'], 3, 4, 5, 6]);
console.log(list.toJS());
// [1,['foo', 'bar'],3,4,5,6]

toArray()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toArray());
// [1, 2, 3, 4, 5, 6]

toObject()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toObject());
// {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}

toMap()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toMap());
// Immutable map

toOrderedMap()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toOrderedMap());
// Ordered Immutable Map

toSet()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toSet());
// returns set

toOrderedSet()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toOrderedSet());
// returns ordered set

toList()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toList());
// list

toStack()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.toStack());
// stack

keys()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.keySeq().toArray());
// [0, 1, 2, 3, 4, 5]

values()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.valueSeq().toArray());
// ["one", "two", "three", "four", "five", "six"]

entry()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.entrySeq().toArray());
// { 0: [0, "one"], 1: [1, "two"], 2: [2, "three"], 3: [3, "four"], 4: [4: "five"], 5: [5: "six"] }

map()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
list.map(function (k, v) {
	console.log('---');
	console.log(k);
	console.log(v);
});
//  ---
// one
// 0
// ---
// two
// 1
// ---
// three
// 2
// ---
// four
// 3
// ---
// five
// 4
// ---
// six
// 5

filter()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
var result = list.filter(function (k, v) {
	return v % 2 == 0
});
console.log(result.toJS());
// ["one", "three", "five"]

filterNot()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
var result = list.filterNot(function (k, v) {
	return v % 2 == 0
});
console.log(result.toJS());
// ["two", "four", "six"]


reverse()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.reverse().toJS());
// ["six", "five", "four", "three", "two", "one"]

sort()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.sort().toJS());
// ["five", "four", "one", "six", "three", "two"]
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.sort((a, b) => b - a).toJS());
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

sortBy()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.sortBy(v => v % 3).toJS());
// [3, 6, 9, 1, 4, 7, 10, 2, 5, 8]

groupBy()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.groupBy(x => x % 2).toJS());
// [[2,4,6,8,10], [1,3,5,7,9]]

forEach()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
list.forEach(function (key) { console.log(key); });
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

slice()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.slice(3, -3).toJS());
// [4, 5, 6, 7]

rest()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.rest().toJS());
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

butLast()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.butLast().toJS());
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

skip()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.skip(2).toJS());
// [3, 4, 5, 6, 7, 8, 9, 10]

skipLast()
var list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.skipLast(2).toJS());
// [1, 2, 3, 4, 5, 6, 7, 8]

skipWhile()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.skipWhile(x => x.match(/o/)).toJS());
// ["three", "four", "five", "six"]

skipUntil()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.skipUntil(x => x.match(/f/)).toJS());
// ["four", "five", "six"]

take()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.take(2).toJS());
// ["one", "two"]

takeLast()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.takeLast(2).toJS());
// ["five", "six"]

takeWhile()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.takeWhile(x => x.match(/o/)).toJS());
// ["one", "two", undefined, "four"]

takeUntil()
var list = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list.takeUntil(x => x.match(/f/)).toJS());
// ["one", "two", "three"]

concat()
var list1 = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var list2 = Immutable.List(['one', 'two', 'three', 'four', 'five', 'six']);
console.log(list1.concat(list2).toJS());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "one", "two", "three", "four", "five", "six"]

flatten()
var list = Immutable.fromJS([1, 2, [3, 4, 5, 6], 7, 8, 9, 10]);
console.log(list.flatten().toJS());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

flatMap()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.flatMap(v => [v, v * 2]).toJS());
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12, 7, 14, 8, 16, 9, 18, 10, 20]

interpose()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.interpose(0).toJS());
// [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10]

interleave()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.interleave(Immutable.Seq.of('A', 'B', 'C', 'D', 'E', 'F', 'G')).toJS());
// [1, "A", 2, "B", 3, "C", 4, "D", 5, "E", 6, "F", 7, "G"]

splice()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.splice(2, 5).toJS());
// [1, 2, 8, 9, 10]

zip()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6]);
console.log(list.zip(Immutable.Seq.of('one', 'two', 'three', 'four', 'five', 'six')).toJS());
// [[1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"]]

zipWith()
var list = Immutable.fromJS([1, 2, 3]);
console.log(list.zipWith(function () { return Immutable.List(arguments); }, Immutable.Seq.of(4, 5, 6), Immutable.Seq.of(7, 8, 9)).toJS());
// [[1,4,7], [2,5,8], [3,6,9]]

reduce()
var list = Immutable.fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.reduce((a, b) => a + b, 0));
// 55

reduceRight()
var list = Immutable.fromJS(['a', 'b', 'c']);
console.log(list.reduceRight((a, b) => a + b));
// cba

every()
var list = Immutable.fromJS([5, 6, 7]);
console.log(list.every(v => v > 4));
// true
console.log(list.every(v => v > 6));
// false

some()
var list = Immutable.fromJS([5, 6, 7]);
console.log(list.some(v => v < 4));
// false
console.log(list.some(v => v > 6));
// true

join()
var list = Immutable.fromJS([5, 6, 7]);
console.log(list.join(' - '));
// 5 - 6 - 7

isEmpty()
var list1 = Immutable.fromJS([5, 6, 7]);
var list2 = Immutable.fromJS([]);
console.log(list1.isEmpty());
// false
console.log(list2.isEmpty());
// true

count()
var list = Immutable.fromJS([5, 6, 7]);
console.log(list.count());
// 3

countBy()
var list = Immutable.fromJS([5, 6, 7]);
console.log(list.countBy(x => x % 2).toJS());
// {0: 1, 1: 2}

find()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.find(x => x % 2 == 0));
// 6

findLast()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.findLast(x => x % 2 == 0));
// 8

findEntry()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.findEntry(x => x % 2 == 0));
// [1, 6]

findLastEntry()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.findLastEntry(x => x % 2 == 0));
// [3, 8]

findKey()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.findKey(x => x % 2 == 0));
// 1

findLastKey()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.findLastKey(x => x % 2 == 0));
// 3

keyOf()
var list = Immutable.fromJS([5, 6, 7, 8, 9, 7]);
console.log(list.keyOf(7));
// 2

lastKeyOf()
var list = Immutable.fromJS([5, 6, 7, 8, 9, 7]);
console.log(list.lastKeyOf(7));
// 5

max()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.max(x => x % 2 == 0));
// 8

maxBy()
var list = Immutable.Seq([
	{ name: 'Oakley', age: 7 },
	{ name: 'Dakota', age: 7 },
	{ name: 'Casey', age: 35 },
	{ name: 'Avery', age: 34 },
]);
console.log(list.maxBy(x => x.age));
// {name: "Casey", age: 35}

min()
var list = Immutable.fromJS([5, 6, 7, 8, 9]);
console.log(list.min());
// 5

minBy()
var list = Immutable.Seq([
	{ name: 'Oakley', age: 7 },
	{ name: 'Dakota', age: 5 },
	{ name: 'Casey', age: 35 },
	{ name: 'Avery', age: 34 },
]);
console.log(list.minBy(x => x.age));
// {name: "Casey", age: 35}

indexOf()
var list = Immutable.fromJS([5, 6, 7, 8, 9, 7]);
console.log(list.indexOf(7));
// 2

lastIndexOf()
var list = Immutable.fromJS([5, 6, 7, 8, 9, 7]);
console.log(list.lastIndexOf(7));
// 5

findIndex()
var list = Immutable.fromJS([5, 6, 7, 8, 9, 7]);
console.log(list.findIndex(x => x % 2 == 0));
// 1

findLastIndex()
var list = Immutable.fromJS([5, 6, 7, 8, 9, 7]);
console.log(list.findLastIndex(x => x % 2 == 0));
// 3

isSubset()
var list1 = Immutable.Map({ a: 1, b: 1 });
var list2 = Immutable.Map({ a: 1, b: 1, c: 3 });
console.log(list1.isSubset(list2));
// true
console.log(list2.isSubset(list1));
// false

isSuperset()
var list1 = Immutable.Map({ a: 1, b: 1 });
var list2 = Immutable.Map({ a: 1, b: 1, c: 3 });
console.log(list1.isSuperset(list2));
// false
console.log(list2.isSuperset(list1));
// true
