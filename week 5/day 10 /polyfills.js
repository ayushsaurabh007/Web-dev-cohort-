//----------------------POLYFILLS-----------------
//What are polyfills? -> Polyfills are pieces of code that add missing 
//features or provide alternative implementations of existing features to 
//ensure compatiblity across different browsers or enviourments 

let arr = ["mango" , "billi" , "bakri" , "bhais"];

//POLYFILL FOR POP METHOD IN ARRAYS
Array.prototype.myPop = function(){
    let removed ;
    if(this[0] == undefined){
        return undefined;
    }else{
        removed = this[this.length - 1];
        this.length = this.length - 1;
    }
}


//POLYFILL FOR PUSH METHOD IN ARRAYS 
Array.prototype.myPush = function (data){
    if(data === undefined){
        throw new TypeError("There must be something to push");
    }else{
        this[this.length] = data;
    }
}

//POLYFILL FOR CONCAT 
Array.prototype.myConcat = function (arr){
    let ans = this;
    const len = ans.length - 1; 
    for (let i = 0 ; i < arr.length ; i++){
        ans[len + i ] = arr[i];
    }
    return ans; 
}

//POLYFILL FOR INDEXOF
Array.prototype.myIndexOf = function (data , count = 0){   //start searching from count 
    let idx ;
    
    for (let i = count ; i < this.length ; i++){
        if(data == this[i]){
            return i;
        }
    }
    return -1;
}

let nums = [1,2,3,4,5,6,7]
//POLYFILL FOR INDEXOF
Array.prototype.myFindIndex = function (callback){   
    let curr = this;
    for (let i = 0 ; i < curr.length ; i++){
        if(callback(curr[i] , i)){
            return i ;
        }
    }
    return -1;
}

//POLYFILL FOR FOREACH
Array.prototype.myForEach = function (callback){
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i] , i , this);
    }
}

//POLYFILL FOR MAP
Array.prototype.myMap = function (callback){
    for(let i = 0 ; i < this.length ; i++){
        this[i] = callback(this[i] , i , this);
    }
    return this;
}



