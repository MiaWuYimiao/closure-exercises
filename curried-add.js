function curriedAdd(total) {
    if(total === undefined) return 0;
    else {
       return function addNext(num) {
            if(num === undefined) return total;
            total += num;
            return addNext;
        }
    }
}

module.exports = { curriedAdd };
