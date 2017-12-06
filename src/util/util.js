export function tab(date){
    var oDate = new Date();
    var nY = oDate.getFullYear();
    var nM = oDate.getMonth();
    var nD = oDate.getDate();
    var newDate = new Date(nY,nM,nD,0,0,0);
    var date = date.split('-');
    var lastDate = new Date(date[0],(date[1]-1),date[2],0,0,0);
    var result = '';
    if(newDate.getTime() > lastDate.getTime()){
        result =(newDate.getTime()-lastDate.getTime())/86400000;
    }else{
        result = Math.abs(newDate.getTime()-lastDate.getTime())/86400000;
    }
    if(result<=7){
        result = result + '天前';
    }else if(result<=30){
        result = (result/7).toFixed(0) + '周前'
    }else if(result<90){
        result = '1月前'
    }else{
        result = '完结'
    }
    return result;
}

export function setBookCase(info){
    var bookName = [];
    var t = JSON.parse(localStorage.getItem('bookName'));
    if(t){
        bookName = t.concat(info)
    }else{
        bookName.push(info)
    } 
    localStorage.setItem('bookName',JSON.stringify(bookName))
}

export function judegData(id){
    var data = JSON.parse(localStorage.getItem('bookName'));
    if(data){
        const p = data.filter(item=>{
            return item._id === id
        })
        console.log(p)
        return p.length>0?true:false
    }else{
        return false
    }
}

export function deleteData(id){
    
}