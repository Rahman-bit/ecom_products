
const HOCMemo = ()=>{

    function add(...data){
        let val = data.reduce((acc,val)=> acc+val);
        return val;
    }
    const HOCMemo = (func)=>{
        let obj = {}
        return function(...arg){
            const para = JSON.stringify(arg) 
            if(obj[para]){
                console.log('returning the cashe results', obj)
                return obj[para]
            }else{
                console.log('calculating the result')
                const val = func(...arg)
                obj[para] = val;
                return val;
            }
        }
    }
    
    const calaulate = HOCMemo(add)
    
    calaulate(5,10,20)
    calaulate(5,10,20)
   
    return <>

    </>

}


export default HOCMemo;