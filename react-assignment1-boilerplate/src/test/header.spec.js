// import Header from '../Components/header/Header';
// please add your test cases here
import Header from '../Components/header/Header';
describe('Testing sum', () => {
    function sum(a, b) {
       return a + b;
    }

    it('should equal 4',()=>{
       expect(sum(2,2)).toBe(4);
      })

});
export default Header;