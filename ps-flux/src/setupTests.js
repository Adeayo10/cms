// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
    class Stack{
        constructor(){
            this.top = 0;
            this.items = {}
        }

        get peek(){
            return this.items[this.top]
        }

        push(value){
            this.top +=1
            this.items[this.top]=value;
        }
    }
describe('My stack', () => {
    let stack;

    beforeEach(()=>{
        stack = new Stack()
    })

    test('is created empty', () => { 
      
        expect(stack.top).toBe(0)
        expect(stack.items).toEqual({})
    })

    test('can push to the top', () => { 
        stack.push("ADEAYO")

        expect(stack.top).toBe(0)
        expect(stack.peek).toBe("ADEAYO")
     })
})