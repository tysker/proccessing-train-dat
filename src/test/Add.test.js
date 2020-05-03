import { add, minus } from '../components/Add';

test( 'add two numbers', () => {
   expect(add(20,40)).toBe(60);
});

test( 'minus two numbers', () => {
   expect(minus(80,40)).toBe(60);
});