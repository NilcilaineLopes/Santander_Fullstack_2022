const maca = {
	value: 2,
};

const banana = {
	value: 3,
};

function mapcomThis(arr, thisArg) {
	return arr.map(function (item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapcomThis(nums, maca));
console.log('this ->laranja', mapcomThis(nums, banana));