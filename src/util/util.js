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
    return result;
}