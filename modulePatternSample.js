const Users = (function(){
    const resource = 'https://jsonplaceholder.typicode.com/users';

    return {
        list:async ()=>{
            const result = await fetch(resource).then(x=>x.json());
            return result;
        },
        create:async(data)=>{
            const result = await fetch(resource,{type:'POST',body:JSON.stringify(data)}).then(x=>x.json());
            return result;
        }
    }
})();