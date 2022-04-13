const {positiveSum} = require('./script1.js');
const {opposite} = require('./script2.js')
const {removeChar} = require('./script3.js')
const {repeatStr} = require('./script4.js')

describe('positive Sum', () => {
test('positive numbers Arr', () => {
  expect(positiveSum([1,2,3,4,5])).toBe(15)
  expect(positiveSum([1,8,3,14,5])).toBe(31)
  expect(positiveSum([71,68,78,14,59])).toBe(290)
})
test('mixed Numbers Arr', () => {
  expect(positiveSum([-1,2,-3,4,-5])).toBe(6)
  expect(positiveSum([1,-8,3,-14,5])).toBe(9)
  expect(positiveSum([-71,68,-78,14,-59])).toBe(82)
})
test('negative Numbers Arr', () => {
  expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0)
  expect(positiveSum([-1,-8,-3,-14,-5])).toBe(0)
  expect(positiveSum([-71,-68,-78,-14,-59])).toBe(0)
})
test('Zero Arr', () => {
  expect(positiveSum([0,0,0])).toBe(0)
})
test('Empy Arr', () => {
    expect(positiveSum([])).toBe(0)
})
})
describe('opposite', ()=> {
test('positive number', ()=> {
  expect(opposite(87)).toBe(-87)
  expect(opposite(876)).toBe(-876)
  expect(opposite(345)).toBe(-345)
})
test('negative number', ()=> {
  expect(opposite(-78)).toBe(78)
  expect(opposite(56)).toBe(-56)
  expect(opposite(874)).toBe(-874)
})
test('zero', ()=> {
  expect(opposite(0)).toBe(-0)
})
})
describe('Remove First and Lasr Char', () => {
test ('removeChar', () => {
  expect(removeChar('Nicaragua')).toBe('icaragu')
  expect(removeChar('Republica de Costa Rica')).toBe('epublica de Costa Ric')
  expect(removeChar('Republica de Panama')).toBe('epublica de Panam')
  expect(removeChar('Colombia')).toBe('olombi')
})
})

describe('Repeat String', () => {
test ('Repeat String', () => {
    expect(repeatStr(4, 'Hello')).toBe('HelloHelloHelloHello')
    expect(repeatStr(0, 'You')).toBe('')
    expect(repeatStr(3, 'why')).toBe('whywhywhy')
    expect(repeatStr(2,'bye')).toBe('byebye')
})
})
